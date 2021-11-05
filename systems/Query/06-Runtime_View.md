# Runtime View

## RCPoller

A happy path when updating happens.

```mermaid
sequenceDiagram
    autonumber
    participant Blazegraph
    participant RCPoller
    participant Wikibase Repository
    
    RCPoller->>+Blazegraph: Query last updated timestamp
    Blazegraph->>+RCPoller: Last updated time
    RCPoller->>+Wikibase Repository: Poll API for RecentChanges since time
    Wikibase Repository->>+RCPoller: RecentChanges
    RCPoller->>+Wikibase Repository: Get RDF for Entities
    Wikibase Repository->>+RCPoller: Entity RDF
    RCPoller->>+Blazegraph: RDF Write Queries
    RCPoller->>+Blazegraph: Update Timestamp
    Blazegraph->>+RCPoller: Success
```

A common error case for infrequently edited wikis is when the storage timestamp in Blazegraph appears to be too old.

<https://phabricator.wikimedia.org/T182394>

```mermaid
sequenceDiagram
    autonumber
    participant Blazegraph
    participant RCPoller
    
    RCPoller->>+Blazegraph: Query last updated timestamp
    Blazegraph->>+RCPoller: OLD Last updated time
    Note left of RCPoller: IllegalStateException: <br/>RDF store reports the last update <br/>time is before the minimum safe poll time
```
