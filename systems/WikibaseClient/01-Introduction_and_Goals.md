# Introduction and Goals

Wikibase Client is part of [Wikibase](../../Introduction_and_Goals.md). It is a [MediaWiki extension](../../Glossary.md#mediawiki-extension) that acts as a client to the [Wikibase Repository](../WikibaseRepo/01-Introduction_and_Goals.md) extension. Its development is part of the [Wikidata](../../Glossary.md#wikidata) project. It allows to use and display data from a Wikibase Repository via [Lua](../../Glossary.md#lua) modules or parser functions. Clients can also use centralized language links or article placeholders.

## Requirements Overview

## Quality Goals

- Entity data which is included in a [Wikibase Client's](../overall/../../Glossary.md#wikibase-client) content is eventually consistent with updates on the corresponding [Wikibase Repository](../../Glossary.md#wikibase-repository). The Repository notifies the Client of updates via [Entity Change Notifications](./06-Runtime_View.md#entity-change-notifications) to which the Client reacts by purging the caches of pages which include data of the affected Entities which in turn pulls the updated Entity data from the Repository.

## Stakeholders & Expectations

### Wikibase Client editor

- Connect a page to a [Wikibase Item](../../Glossary.md#item).
- Show that a page is connected to a [Wikibase Item](../../Glossary.md#item) in the page info.
- Link to the connected [Wikibase Item](../../Glossary.md#item) for an article page in its sidebar.
- Use data from a Wikibase Repository in Wikibase Client [wikitext generated content](../overall/../../Glossary.md#wikitext-generated-content).
- Have data from a Wikibase Repository used in Wikibase Client pages update automatically when changes happen on the Wikibase Repository.
- See the "[unconnected pages](../../Glossary.md#connected-pages)" on a Wikibase Client.

### Wikimedia editor

- Store Wikipedia page connections in a central place.

### Wikipedia editor

- Connect pages on different Wikipedias, showing interwiki links on the [connected pages](../../Glossary.md#connected-pages).
- Have [interwiki links](../../Glossary.md#interwiki-links) keep up to date, when pages are moved or deleted.
- Store information relating to article quality in a central place, for use in interwiki links on the Articles.
- Have data updates which cause pages changes to be shown in RecentChanges.
- Have data updates which cause pages changes to be shown in [Watchlists](../../Glossary.md#watchlist), when the page being changed is watched.
- Update Wikidata’s data used on Wikipedia when it is incorrect or outdated via web interface.
- Find wrong or missing data on a Wikipedia article and correct or add it to Wikidata.

### Wikipedia reader

- Have a representation of structured data about the world in Wikipedia articles (e.g. infoboxes)
- Rely on centrally maintained data and trust that information in articles is up-to-date, even on small Wikipedias
- Find reliable and up-to-date references for claims about the world
