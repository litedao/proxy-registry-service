# Proxy Directory Service

## Sync Blockchain data to MongoDB

### Prerequisites

Have a local node running

### Sync DB:

`node ./sync --port [CHAIN_PORT]` (default: 8545)

## Webservice

### Prerequisites

Have MongoDB previously synced. `sync` service should be running in parallel to keep DB up to date.

### Enable Service:

`node ./service --network [NETWORK] --port [LISTEN_PORT]` (default: main) (default: 4000)

### Clean MongoDB (sync should be stopped before running this command and restarted after):

`node ./clean --network [NETWORK]` (default: main)

### Consume Service:

`http://[DOMAIN/IP]:[LISTEN_PORT]/conditions=[CONDITIONS]/sort=[SORT]/limit=[NUMBER]/skip=[NUMBER]`

#### CONDITIONS
[field]:[value] || [field].gt:[value] || [field].gte:[value] || [field].lt:[value] || [field].lte:[value]

#### SORT
[field]:asc || [field]:desc

#### FIELDS
owner || proxy || blockNumber
