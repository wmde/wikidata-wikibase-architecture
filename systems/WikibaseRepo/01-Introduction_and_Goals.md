# Introduction and Goals

Wikibase Repository is part of [Wikibase](../../Introduction_and_Goals.md). Wikibase Repository is a [MediaWiki extension](../../Glossary.md#mediawiki-extension) that allows you to use your wiki as a structured data repository. Its development is part of the [Wikidata](../../Glossary.md#wikidata) project. The data can in turn be used in a wiki using the [Wikibase Client](../WikibaseClient/01-Introduction_and_Goals.md) extension.

## Requirements Overview

## Quality Goals

- Whenever any data (entity [label](../../Glossary.md#label), description, [alias](../../Glossary.md#alias), [statements](../../Glossary.md#statement) etc.) changes on a [Wikibase Repository](../../Glossary.md#wikibase-repository) (e.g. Wikidata), it becomes available to the connected wiki with [Wikibase Client](../../Glossary.md#wikibase-client) within [10 minutes](https://gerrit.wikimedia.org/r/plugins/gitiles/operations/puppet/+/e3423c8627067a8de8352b9b7f3c59870d9b47c5/modules/icinga/manifests/monitor/wikidata.pp#10).
  For example, if the mayor of Berlin changes and that is updated on Wikidata, the corresponding article that uses the Wikidata item "Mayor of Berlin" on English Wikipedia should have the updated information within 10 minutes.

## Stakeholders & Expectations

### Repo editor

- Add new structured entity data on a Repo via a desktop web interface.
- Edit existing structured entity data on a Repo via a desktop web interface.
- Programmatically add new structured data to a Repo.
- Programmatically edit existing structured data on a Repo.
- View existing structured entity data on a Repo on mobile web.
- Edit [Labels](../../Glossary.md#label), [Descriptions](../../Glossary.md#description), [Aliases](../../Glossary.md#alias) on Repo via a mobile web interface.
- Have [Statements](../../Glossary.md#statement) about external identifiers separated from other Statements in the Repo UI.
- Have Statements shown in a useful order.
- Search on the Repo for an entity.
- Ensure the coherence of data modeling in a certain topic.
- Review changes to the structured data.

### Wikidata editor

- Edit [Terms](../../Glossary.md#term) and sitelinks of entities without using JavaScript in a browser.

### Commons editor

Some Commons editor expectations probably only apply to the MediaInfo extension, however many end up influencing Repo architecture.

- Store structured data relevant to files on Commons, on Commons.
- Describe Commons files using concepts from Wikidata.
- Structured data can be added to a file without the need for extra "creation" of some entity.
- There is a known mapping between the File page and structured data?

### Non Wikimedia project editor

- Use the same Wikidata ontology on a non Wikimedia Wikibase.
- Extend a non Wikimedia Wikibase with relevant entities from Wikidata ([federation](../../Glossary.md#federated-properties)).

### Data re-user

- Access a Repos's content via a web API.

#### Wikidata Data re-user

- Fix and add [data values](../../Glossary.md#datavalue) on Wikidata.

#### Researcher

- Obtain large parts of the data on Wikidata.
- Quickly create visualizations based on data from Wikidata without the need to download it.
- Fix minor modeling and data issues.

### Data importer

- - Import large amount of data (>1M entities) into a third-party Wikibase quickly & efficiently.

#### Wikidata Data donor

- Import (donate) subset of my collection data to Wikidata.
- Monitor, maintain, and re-export the data donated to Wikidata.
- Cross-check an external data collection against Wikidata.
