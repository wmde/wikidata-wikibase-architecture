# Introduction and Goals

Wikibase Client is part of [Wikibase](../overview/01-Introduction_and_Goals.md). It is a [MediaWiki extension](../overview/12-Glossary.md#mediawiki-extension) that acts as a client to the [Wikibase Repository](../WikibaseRepo/01-Introduction_and_Goals.md) extension. Its development is part of the [Wikidata](../overview/12-Glossary.md#wikidata) project. It allows to use and display data from a Wikibase Repository via [Lua](../overview/12-Glossary.md#lua) modules or parser functions. Clients can also use centralized language links or article placeholders.

## Requirements Overview

## Quality Goals

- Entity data which is included in a Client wiki's content is eventually consistent with updates on the corresponding [Wikibase Repository](../overview/12-Glossary.md#wikibase-repository). The Repository notifies the Client of updates via [Entity Change Notifications](./06-Runtime_View.md#entity-change-notifications) to which the Client reacts by purging the caches of pages which include data of the affected Entities which in turn pulls the updated Entity data from the Repository.

## Stakeholders & Expectations

### Client editor

- Connect a page to a [Wikibase Item](../overview/12-Glossary.md#item).
- Show that a page is connected to a [Wikibase Item](../overview/12-Glossary.md#item) in the page info.
- Link to the connected [Wikibase Item](../overview/12-Glossary.md#item) for an article page in its sidebar.
- Use data from a Repo in Client pages.
- Have data from a Repo used in Client pages update automatically when changes happen on the Repo.
- See the "unconnected pages" on a Client.

### Wikimedia editor

- Store Wikipedia page connections in a central place.

### Wikipedia editor

- Connect pages on different Wikipedias, showing interwiki links on the connected pages.
- Store information relating to article quality in a central place, for use in interwiki links on the Articles.
- Have data updates which cause pages changes to be shown in RecentChanges.
- Have data updates which cause pages changes to be shown in [Watchlists](../overview/12-Glossary.md#watchlist), when the page being changed is watched.
- Update Wikidata’s data used on Wikipedia when it is incorrect or outdated via web interface.
- Find wrong or missing data on a Wikipedia article and correct or add it to Wikidata.
