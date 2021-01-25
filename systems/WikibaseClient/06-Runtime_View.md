# Runtime View

## Runtime Scenario 1

## Runtime Scenario 2

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
