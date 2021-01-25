# Runtime View

## Runtime Scenario 1

## Data Bridge

### Attachment and Opening

The Data Bridge is injected into Wikitext-generated content pages that have edit links by overloading the links.

Clicking on one of these links then opens the Data Bridge instead of taking you to the Repo.

```mermaid
sequenceDiagram
    autonumber
    User->>+Wikitext-generated content: Reads
    Data Bridge->>+Wikitext-generated content: Overload links
    User->>+Data Bridge: Clicks link
    Data Bridge->>+User: Open with loading indicator
    Data Bridge->>+Repo: Gets data
    Data Bridge->>+User: Loading complete
```

### Supported value change

Once the Data Bridge is open the User can edit supported values.

```mermaid
sequenceDiagram
    autonumber
    participant User
    participant Page as Wikitext-generated content
    participant Bridge as Data Bridge
    User->>+Bridge: Enters new values, clickes save
    Bridge->>+Repo: Saves value
    Repo->>+Bridge: Success
    Bridge->>+Page: Purges Page
    Page->>+Bridge: Success
    Bridge->>+Page: Trigger Reload
    User->>+Page: Sees updated content
```

## Runtime Scenario 3

...
