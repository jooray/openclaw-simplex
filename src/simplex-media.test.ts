import { beforeEach, describe, expect, it } from "vitest";
import type { PluginRuntime } from "openclaw/plugin-sdk";
import { setSimplexRuntime } from "./runtime.js";
import { buildComposedMessages } from "./simplex-media.js";

function createRuntime(): PluginRuntime {
  return {
    error: () => undefined,
    channel: {
      media: {
        fetchRemoteMedia: async () => {
          throw new Error("remote fetch not used in test");
        },
        saveMediaBuffer: async () => {
          throw new Error("saveMediaBuffer not used in test");
        },
      },
    },
    media: {
      detectMime: async ({ filePath }: { filePath: string }) => {
        if (filePath.includes("missing")) {
          throw new Error(`ENOENT: no such file or directory, open '${filePath}'`);
        }
        return "audio/mp4";
      },
      mediaKindFromMime: (mime: string) => (mime.startsWith("audio/") ? "audio" : "file"),
      isVoiceCompatibleAudio: () => true,
    },
  } as unknown as PluginRuntime;
}

describe("buildComposedMessages", () => {
  beforeEach(() => {
    setSimplexRuntime(createRuntime());
  });

  it("falls back to a text notice when media is missing", async () => {
    const messages = await buildComposedMessages({
      cfg: {},
      text: "Voice reply is ready.",
      mediaUrl: "/tmp/missing-voice.m4a",
      audioAsVoice: true,
    });

    expect(messages).toEqual([
      {
        msgContent: {
          type: "text",
          text: "Voice reply is ready.\n\nAttachment unavailable: missing-voice.m4a",
        },
      },
    ]);
  });

  it("keeps delivered media and adds a notice for missing attachments", async () => {
    const messages = await buildComposedMessages({
      cfg: {},
      text: "Here you go.",
      mediaUrls: ["/tmp/ok-voice.m4a", "/tmp/missing-voice.m4a"],
      audioAsVoice: true,
    });

    expect(messages).toEqual([
      {
        fileSource: { filePath: "/tmp/ok-voice.m4a" },
        msgContent: {
          type: "voice",
          text: "Here you go.",
          duration: 0,
        },
      },
      {
        msgContent: {
          type: "text",
          text: "Attachment unavailable: missing-voice.m4a",
        },
      },
    ]);
  });
});
