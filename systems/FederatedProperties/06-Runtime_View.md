# Runtime View

See [3rd party Editor's use case](../Repository/01-Introduction.md#3rd-party-editor): _Extend a non Wikimedia Wikibase with relevant entities from Wikidata_

## Listing federated and local properties in a local Item's statement edit view

```mermaid
sequenceDiagram
    autonumber
    3rd party Editor->>+Item Page: Navigate to Item page
    3rd party Editor->>+Item Page: Click add a new statement<br> and start typing
    Item Page->>+Search Properties: Search properties<br> based on user input
    Search Properties->>+Local Property Search: Search properties<br> in local repository
    Search Properties->>+Remote Property Search: Search properties in remote repository
    Local Property Search->>+Search Properties: Local properties matching the search input
    Remote Property Search->>+Search Properties: Remote properties matching the search input
    Search Properties->>+Item Page: All properties matching the search input
    Item Page->>+3rd party Editor: List of all properties<br> matching the search input
```
