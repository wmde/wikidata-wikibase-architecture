# Introduction and Goals

## Requirements Overview

## Quality Goals

* Entity data which is included in a client wiki's article content is eventually consistent with updates on the corresponding repo. Data updates from the repo are available to the client within [10 minutes](https://gerrit.wikimedia.org/r/plugins/gitiles/operations/puppet/+/e3423c8627067a8de8352b9b7f3c59870d9b47c5/modules/icinga/manifests/monitor/wikidata.pp#10).

## Stakeholders & Expectations

### Wikidata editor

- Ability to add new structured entity data on Wikidata via a desktop web interface.
- Ability to edit existing structured entity data on Wikidata via a desktop web interface.
- Ability to programmatically add new structured data to Wikidata.
- Ability to programmatically edit existing structured data on Wikidata.
- Ability to view existing structured entity data on Wikidata on mobile web.
- Ability to edit labels, descriptions, aliases on Wikidata via a mobile web interface.
- Ability to edit terms and sitelinks of entities without using JavaScript in a browser.
- Have Statements about external identifiers separated from other Statements in the Wikidata UI.
- Have Statements shown in a useful order.
- Ability to search on Wikidata for an entity.
- Ability to ensure the coherence of data modeling in a certain topic.
- Ability to review edits.

### Wikipedia editor

- Ability to connect pages on different Wikipedias, showing interwiki links on the Articles.
- Ability to store Wikipedia page connections in a central place.
- Ability to store infomation relating to article quality in a central place, for use in interwiki links on the Articles.
- Ability to use data from Wikidata in Wikipedia pages.
- Have Wikipedia pages automatically update when data on Wikidata changes.
- Have data updates which cause page changes to be shown in RecentChanges and Watchlists.
- Ability to update Wikidata’s data used on Wikipedia when it is incorrect or outdated via web interface.
- Ability to see the "unconnected pages" on a Wikipedia to try to create connections.
- Ability to find wrong or missing data on a Wikipedia article and correct or add it to Wikidata.

#### Small Wikipedia editor

- Have placeholder pages be automatically generated for topics Wikidata contains data for, in order to gain more readers and thus more editors.

### Commons editors

- Ability to store structured data relevant to files on Commons, on Commons.
- Describe Commons files using concepts from Wikidata.

### Data re-user

- Ability to access Wikidata's content via a web API.
- Ability to fix and add values on Wikidata.

#### Researcher

- Ability to obtain large parts of the data on Wikidata.
- Ability to quickly create visualizations based on data from Wikidata without the need to download it.
- Ability to fix minor modeling and data issues.

### Data donor

- Ability to import (donate) subset of my collection data to Wikidata.
- Ability to monitor, maintain, and re-export the data donated to Wikidata.
- Ability to cross-check an external data collection against Wikidata.

### Non Wikimedia Wikibase Project

- Ability to create knowledge bases similar to Wikidata using our same software stack (including extensions, tools and features)
- Ability to install, configure, update, and maintain a Wikibase instance with confidence.
- Ability to easily import a large data set into a non Wikimedia Wikibase.
- Ability to use the same Wikidata ontology on a non Wikimedia Wikibase.
- Ability to extend a non Wikimedia Wikibase with relevant entities from Wikidata (federation).

#### Large Non Wikimedia Wikibase Project

- Ability to import large amount of data (>1M entities) into the Wikibase quickly & efficiently.

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
