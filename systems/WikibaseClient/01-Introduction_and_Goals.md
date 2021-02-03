# Introduction and Goals

## Requirements Overview

## Quality Goals

- Entity data which is included in a [Wikibase Client's](../overall/../overview/12-Glossary.md#wikibase-client) [wikitext generated content](../overall/../overview/12-Glossary.md#wikitext-generated-content) is eventually consistent with updates on the corresponding [Wikibase Repository](../overall/../overview/12-Glossary.md#wikibase-repository).

## Stakeholders & Expectations

### Wikibase Client editor

- Connect a page to a Wikibase Item.
- Show that a page is connected to a Wikibase Item in the page info.
- Link to the connected Wikibase Item for an article page in its sidebar.
- Use data from a Wikibase Repository in Wikibase Client [wikitext generated content](../overall/../overview/12-Glossary.md#wikitext-generated-content).
- Have data from a Wikibase Repository used in Wikibase Client pages update automatically when changes happen on the Wikibase Repository.
- See the "unconnected pages" on a Wikibase Client.

### Wikimedia editor

- Store Wikipedia page connections in a central place.

### Wikipedia editor

- Connect pages on different Wikipedias, showing interwiki links on the connected pages.
- Store information relating to article quality in a central place, for use in interwiki links on the Articles.
- Have data updates which cause pages changes to be shown in RecentChanges.
- Have data updates which cause pages changes to be shown in [Watchlists](../overview/12-Glossary.md#watchlist), when the page being changed is watched.
- Update Wikidata’s data used on Wikipedia when it is incorrect or outdated via web interface.
- Find wrong or missing data on a Wikipedia article and correct or add it to Wikidata.
