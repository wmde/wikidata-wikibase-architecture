# Introduction and Goals

## Requirements Overview

## Quality Goals

- Entity data which is included in a client wiki's article content is eventually consistent with updates on the corresponding repo.

## Stakeholders & Expectations

### Client editor

- Connect a page to a Wikibase Item.
- Show that a page is connected to a Wikibase Item in the page info.
- Link to the connected Wikibase Item for an article page in its sidebar.
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
