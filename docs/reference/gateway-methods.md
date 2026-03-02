# Gateway Methods

The plugin registers these methods:

## `simplex.invite.create`

Create an invite link.

Request params:

```json
{
  "mode": "connect",
  "accountId": "default"
}
```

`mode` supports:

- `connect`
- `address`

## `simplex.invite.list`

List current invite/address links and pending hints.

Request params:

```json
{
  "accountId": "default"
}
```

## `simplex.invite.revoke`

Revoke active address link.

Request params:

```json
{
  "accountId": "default"
}
```
