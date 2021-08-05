# Runtime View

## Basic Viewing on a Repository

See the [editor's use case](./01-Introduction_and_Goals.md#editor): _View structured entity data on devices of varying capabilities (including mobile)._

```mermaid
sequenceDiagram
    autonumber
    participant Repository Editor
    participant Web Interface
    Repository Editor->>+Web Interface: Navigate to Entity page
    Web Interface->>+Entity Renderer: Get page for Entity
    Entity Renderer->>+Entity Persistence: Get current Entity data
    Entity Renderer->>+Web Interface: Page of current Entity
    Web Interface->>+Repository Editor: Page of current Entity
```

## Basic JS Editing on a Repository

See the [editor's use case](./01-Introduction_and_Goals.md#editor): _Interact with (CRUD) structured entity datain a repository via a desktop web interface._

```mermaid
sequenceDiagram
    autonumber
    participant Repository Editor
    participant Web Interface
    Repository Editor->>+Web Interface: Alter data of Entity being viewed
    Web Interface->>+MW Action API: Trigger API call with Entity data based on user interaction
    MW Action API->>+Entity Persistence: Add new version of Entity
    MW Action API->>+Web Interface: Change success
    Web Interface->>+Repository Editor: New version of Entity
```

## User suggested a property when adding a statement

See the [editor's use case](./01-Introduction_and_Goals.md#editor): _Receive suggestions for [properties](../../Glossary.md#property) in a meaningful order when trying to add new [statements](../../Glossary.md#statement)._

```mermaid
sequenceDiagram
    autonumber
    participant Repository Editor
    participant Web Interface
    Repository Editor->>+Web Interface: Start adding a new statement
    Web Interface->>+PropertySuggester API: Request suggester properties for the current Entity
    PropertySuggester API->>+Web Interface: Suggestions
    Web Interface->>+Repository Editor: Suggestions
    Repository Editor-->>+Web Interface: Continues adding a statement
```
