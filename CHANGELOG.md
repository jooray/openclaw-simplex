# Changelog

All notable changes to this project will be documented in this file.

## [0.2.1] - 2026-03-25

### Changed

- Aligned the plugin entrypoints with the current OpenClaw channel plugin structure, including a dedicated `setup-entry`.
- Updated operator documentation to reflect the current OpenClaw flow for external plugins, including trust via `plugins.allow` and explicit `channels.simplex.connection` setup.

### Fixed

- Improved SimpleX runtime status reporting so connection state, disconnects, and health are surfaced more accurately in OpenClaw.
- Fixed a runtime logger crash in the SimpleX monitor connection-status path.
- Stopped treating implicit managed defaults as a configured channel; SimpleX now requires explicit connection config before OpenClaw marks it startup-capable.
- Updated invite gateway tests to match the explicit connection-config requirement.

## [0.2.0] - 2026-03-24

### Changed

- Migrated SimpleX channel setup from the legacy onboarding adapter to the current OpenClaw setup flow.
- Updated plugin SDK integration for newer OpenClaw channel, setup, media, directory, and action APIs.
- Raised the minimum supported OpenClaw version to `2026.3.22`.

### Fixed

- Normalized SimpleX allowlist handling without relying on removed shared SDK helpers.
- Tightened config schema definitions and related tests for newer SDK expectations.

## [0.1.1] - 2026-03-02

### Added

- GitHub Actions publish workflow for npm releases.

### Fixed

- Registry authentication handling in publish workflow.

## [0.1.0] - 2026-03-02

### Added

- Initial release of `@dangoldbj/openclaw-simplex`.
- OpenClaw channel plugin registration for `simplex`.
- SimpleX runtime support via local `simplex-chat` CLI WebSocket API.
- Gateway invite methods:
  - `simplex.invite.create`
  - `simplex.invite.list`
  - `simplex.invite.revoke`
- Pairing and allowlist enforcement integration.
- Message actions support (send/reply/reaction/edit/delete + group operations).
- Managed and external connection modes.
- Operator documentation:
  - installation and setup
  - security model
  - troubleshooting
  - end-to-end getting started flow with screenshots

### Notes

- OpenClaw may warn about `child_process` usage during plugin install. This is expected for managed mode, where the plugin starts `simplex-chat` locally.
