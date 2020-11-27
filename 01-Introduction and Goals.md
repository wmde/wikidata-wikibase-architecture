# Introduction and Goals

## Requirements Overview

## Quality Goals

## Stakeholders & Expectations

### Wikidata editor

- Add new structured entity data on Wikidata via a desktop web interface.
- Edit existing structured entity data on Wikidata via a desktop web interface.
- Programmatically add new structured data to Wikidata.
- Programmatically edit existing structured data on Wikidata.
- View existing structured entity data on Wikidata on mobile web.
- Edit labels, descriptions, aliases on Wikidata via a mobile web interface.
- Edit terms and sitelinks of entities without using JavaScript in a browser.
- Have Statements about external identifiers separated from other Statements in the Wikidata UI.
- Have Statements shown in a useful order.
- Search on Wikidata for an entity.
- Ensure the coherence of data modeling in a certain topic.
- Review edits.

### Wikipedia editor

- Connect pages on different Wikipedias, showing interwiki links on the Articles.
- Store Wikipedia page connections in a central place.
- Store infomation relating to article quality in a central place, for use in interwiki links on the Articles.
- Use data from Wikidata in Wikipedia pages.
- Have Wikipedia pages automatically update when data on Wikidata changes.
- Have data updates which cause page changes to be shown in RecentChanges and Watchlists.
- Update Wikidata’s data used on Wikipedia when it is incorrect or outdated via web interface.
- See the "unconnected pages" on a Wikipedia to try to create connections.
- Find wrong or missing data on a Wikipedia article and correct or add it to Wikidata.

#### Small Wikipedia editor

- Have placeholder pages be automatically generated for topics Wikidata contains data for, in order to gain more readers and thus more editors.

### Commons editors

- Store structured data relevant to files on Commons, on Commons.
- Describe Commons files using concepts from Wikidata.

### Data re-user

- Access Wikidata's content via a web API.
- Fix and add values on Wikidata.

#### Researcher

- Obtain large parts of the data on Wikidata.
- Quickly create visualizations based on data from Wikidata without the need to download it.
- Fix minor modeling and data issues.

### Data donor

- Import (donate) subset of my collection data to Wikidata.
- Monitor, maintain, and re-export the data donated to Wikidata.
- Cross-check an external data collection against Wikidata.

### Non Wikimedia Wikibase Project

- Create knowledge bases similar to Wikidata using our same software stack (including extensions, tools and features)
- Install, configure, update, and maintain a Wikibase instance with confidence.
- Import a large data set into a non Wikimedia Wikibase.
- Use the same Wikidata ontology on a non Wikimedia Wikibase.
- Extend a non Wikimedia Wikibase with relevant entities from Wikidata (federation).

#### Large Non Wikimedia Wikibase Project

- Import large amount of data (>1M entities) into the Wikibase quickly & efficiently.

### Product Managers

- Access to an appropriate test system for product verification for new features.

#### Wikidata Product Manager

- It should be possible to create lists from the stored structured data.
- Make the centralized data not only useful for Wikimedia projects, but also other users (researchers, apps etc.)
- Store structured data relevant to the Wiktionary project in a meaningful way, that will also be useful for Abstract Wikipedia.
- The stored data and changes must be manageable by a distributed community.
- Solution should not enforce too tight rigidity in the data (e.g. enforcing and supporting by automation symmetric properties) because “world is complex and there are always exceptions”

### Wikibase / Wikidata System Developers

- Access to a quick, easy and consistent dev system setup.
- Easily discoverable, well written documentation of the system and its parts.
