# Runtime View

## UpdateRepoHookHandler

```mermaid
sequenceDiagram
    autonumber
    alt is move
        MediaWiki Page->>+UpdateRepo-HookHandler: PageMoveComplete (hook)
    else is delete
        MediaWiki Page->>+UpdateRepo-HookHandler: ArticleDeleteComplete (hook)
    end
    UpdateRepo-HookHandler->>UpdateRepo-HookHandler: Check if altered pages are connected to Items
    opt Not connected to Items
        UpdateRepo-HookHandler-->>MediaWiki Page: Return control flow
    end
    UpdateRepo-HookHandler->>+Repo MediaWiki JobQueue: Notify Repo of the changes (job)
    opt Repo Notified
        UpdateRepo-HookHandler-->>MediaWiki Page: Return control flow
    end
```

## Data Bridge

### Attachment and Opening

The Data Bridge is injected into Wikitext-generated content pages that have edit links by overloading the links.

Clicking on one of these links then opens the Data Bridge instead of taking you to the Repo.

```mermaid
sequenceDiagram
    autonumber
    Client Editor->>+Wikitext-generated content: Reads
    Data Bridge->>+Wikitext-generated content: Overload links
    Client Editor->>+Data Bridge: Clicks link
    Data Bridge->>+Client Editor: Open with loading indicator
    Data Bridge->>+Repo: Gets data
    Data Bridge->>+Client Editor: Loading complete
```

### Supported value change

Once the Data Bridge is open the Client Editor can edit supported values.

```mermaid
sequenceDiagram
    autonumber
    participant Client Editor
    participant Page as Wikitext-generated content
    participant Bridge as Data Bridge
    Client Editor->>+Bridge: Enters new values, chooses an update strategy, clickes save
    Bridge->>+Repo: Saves value
    Repo->>+Bridge: Success
    Bridge->>+Page: Purges Page
    Page->>+Bridge: Success
    Bridge->>+Page: Trigger Reload
    Client Editor->>+Page: Sees updated content
```

## Entity Change Notifications

### Entity change events entering the Client

A Repo will schedule Jobs on Clients including change data that the Client needs.

```mermaid
sequenceDiagram
    autonumber
    participant Repo
    participant ChangeNotificationJob
    Repo->>+ChangeNotificationJob: Notify of change (job)
    ChangeNotificationJob->>+EntityChangesLookup: Get changes
    EntityChangesLookup->>+ChangeNotificationJob: Changes
    ChangeNotificationJob->>+ChangeHandler: Handle changes
```

### Handle change events on the Client

```mermaid
sequenceDiagram
    autonumber
    ChangeHandler->>+ChangeRunCoalescer: Reduce changes
    ChangeRunCoalescer->>+ChangeHandler: Reduced changes
    loop Every change
        ChangeHandler->>+AffectedPagesFinder: Find Affected Usages on Page
        AffectedPagesFinder->>+ChangeHandler: Usages & Pages
        ChangeHandler->>+PageUpdater: purgeWebCache
        ChangeHandler->>+PageUpdater: scheduleRefreshLinks
        ChangeHandler->>+PageUpdater: injectRCRecords
    end
```

## Entity Data Access

### Using data via LUA

```mermaid
sequenceDiagram
    autonumber
    Client Editor->>+Scribunto: Edit Scribunto Module to include Wikibase LUA code
    Client Editor->>+Wikitext-generated content page: Edit Wikitext page to use Scribunto Module
    Client Editor->>+Wikitext-generated content page: Client Editor requests page
    Note right of Wikitext-generated content page: This is only one part of page rendering
    Wikitext-generated content page->>+Scribunto: Parse LUA Modules
    Scribunto->>+Entity Data Access: Parse Wikibase LUA Functions
    Entity Data Access->>+WikibaseRepo: Get Entity Data
    WikibaseRepo-->>Entity Data Access: Entity Data
    Entity Data Access-->>Scribunto: Parsed LUA Functions
    Scribunto-->>Wikitext-generated content page: Parsed LUA Modules
    Wikitext-generated content page->>+Client Editor: Server responds with rendered page
```

### Using data via ParserFunctions

```mermaid
sequenceDiagram
    autonumber
    Client Editor->>+Wikitext-generated content page: Edit Wikitext page to include a Wikibase Parser Function
    Client Editor->>+Wikitext-generated content page: Client Editor requests page
    Note right of Wikitext-generated content page: This is only one part of page rendering
    Wikitext-generated content page->>+Entity Data Access: Parse Wikibase Parser Functions
    Entity Data Access->>+WikibaseRepo: Get Entity Data
    WikibaseRepo-->>Entity Data Access: Entity Data
    Entity Data Access-->>Wikitext-generated content page: Parsed Parser Functions
    Wikitext-generated content page-->>+Client Editor: Server responds with rendered page
```
