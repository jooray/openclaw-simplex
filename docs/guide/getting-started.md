# Getting Started

## 1. Install package

```bash
npm i @dangoldbj/openclaw-simplex
```

## 2. Register with OpenClaw

```bash
openclaw plugins install @dangoldbj/openclaw-simplex
openclaw plugins enable simplex
```

## 3. Configure channel

```json
{
  "channels": {
    "simplex": {
      "enabled": true,
      "connection": {
        "mode": "managed",
        "cliPath": "simplex-chat"
      },
      "dmPolicy": "pairing",
      "allowFrom": []
    }
  }
}
```

## 4. Restart OpenClaw

Restart OpenClaw so plugin/channel registry reloads.

## 5. Verify

```bash
openclaw plugins list
openclaw plugins info simplex
```
