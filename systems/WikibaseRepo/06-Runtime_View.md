# Runtime View

## Basic Editing on Wikidata

see the [Wikidata editor's use case](./01-Introduction_and_Goals.md#repository-editor): _Edit existing structured entity data on a Repository via a desktop web interface_

```mermaid
sequenceDiagram
    autonumber
    participant Repository Editor
    participant Web Interface
    Repository Editor->>+Web Interface: Navigate to Item page
    Web Interface->>+Item Renderer: Get page for Item
    Item Renderer->>+Entity Persistence: Get current Entity data
    Web Interface->>+MW Action API: Trigger API call with Entity data based on user interaction
    MW Action API->>+Entity Persistence: Add new version of Entity
```

## Runtime Scenario 2

## Runtime Scenario 3

...
