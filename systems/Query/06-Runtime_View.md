# Runtime View

## Updater

A happy path when updating happens.

```mermaid
sequenceDiagram
    autonumber
    participant Blazegraph
    participant Updater
    participant Wikibase Repository
    
    Updater->>+Blazegraph: Query last udpated timestamp
    Blazegraph->>+Updater: Last updated time
    Updater->>+Wikibase Repository: Poll API for RecentChanges since time
    Wikibase Repository->>+Updater: RecentChanges
    Updater->>+Wikibase Repository: Get RDF for Entities
    Wikibase Repository->>+Updater: Entity RDF
    Updater->>+Blazegraph: RDF Write Queries
    Updater->>+Blazegraph: Update Timestamp
    Blazegraph->>+Updater: Success
```

A common error case for infrequently edited wikis is when the storage timestamp in Blazegraph appears to be too old.

<https://phabricator.wikimedia.org/T182394>

```mermaid
sequenceDiagram
    autonumber
    participant Blazegraph
    participant Updater
    
    Updater->>+Blazegraph: Query last udpated timestamp
    Blazegraph->>+Updater: OLD Last updated time
    Note left of Updater: IllegalStateException: <br/>RDF store reports the last update <br/>time is before the minimum safe poll time
```
