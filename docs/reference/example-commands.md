# Example Commands

## Plugin lifecycle

```bash
npm i @dangoldbj/openclaw-simplex
openclaw plugins install @dangoldbj/openclaw-simplex
openclaw plugins enable simplex
openclaw plugins list
openclaw plugins info simplex
```

## Gateway method examples

Use your normal gateway client to call:

- `simplex.invite.create`
- `simplex.invite.list`
- `simplex.invite.revoke`

Example payloads:

```json
{
  "mode": "connect",
  "accountId": "default"
}
```

```json
{
  "accountId": "default"
}
```
