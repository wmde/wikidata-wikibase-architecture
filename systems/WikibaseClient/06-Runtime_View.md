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
    User->>+Bridge: Enters new values, chooses an update strategy, clickes save
    Bridge->>+Repo: Saves value
    Repo->>+Bridge: Success
    Bridge->>+Page: Purges Page
    Page->>+Bridge: Success
    Bridge->>+Page: Trigger Reload
    User->>+Page: Sees updated content
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

...
