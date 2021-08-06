# Repository Introduction

Wikibase Repository is part of [Wikibase](../../Introduction.md).
Wikibase Repository is focused around a [MediaWiki extension](../../Glossary.md#mediawiki-extension) that allows you to use your [MediaWiki](../../Glossary.md#mediawiki) site as a structured data repository.
Its development is part of the [Wikidata](../../Glossary.md#wikidata) project. The data can in turn be used in a wiki using the [Wikibase Client](../Client/01-Introduction.md) extension.

## Requirements Overview

The overall goal of Wikibase Repository is to allow humans and machines to store, change, maintain, manage, retrieve and dive into (query) structured multi lingual data in a non rigid fashion.

Wikidata specific goals are also fullfilled by Wikibase Repository:

- Store structured information for Wikimedia projects in a central place.
- Wikidata is not only useful for Wikimedia projects, but also other stakeholders (data re-users, researchers, apps, etc)

### Basic Usage

- A user interacts with data entities via UIs and APIs, retrieving or changing them.

## Quality Goals

- Whenever any data changes on a [Wikibase Repository](../../Glossary.md#wikibase-repository), it becomes available to connected wikis with [Wikibase Client](../../Glossary.md#wikibase-client) within [10 minutes](https://gerrit.wikimedia.org/r/plugins/gitiles/operations/puppet/+/e3423c8627067a8de8352b9b7f3c59870d9b47c5/modules/icinga/manifests/monitor/wikidata.pp#10).
  For example, if the mayor of Berlin changes and that is updated on Wikidata, the corresponding article that uses the Wikidata item "Mayor of Berlin" on English Wikipedia should have the updated information within 10 minutes.

## Stakeholders & Expectations

### Editor

- Find structured entity data on the repository.
- View structured entity data on devices of varying capabilities (including mobile).
- Interact with (CRUD) structured entity datain a repository via a desktop web interface.
- Programmatically interact with (CRUD) structured data in a repository.
- Review changes to the structured entity data.
- Edit [Labels](../../Glossary.md#label), [Descriptions](../../Glossary.md#description), [Aliases](../../Glossary.md#alias) on Repository via a mobile web interface.
- Have [Statements](../../Glossary.md#statement) about external identifiers separated from other Statements in the Repository UI.
- Have Statements shown in a useful order.
- Ensure the coherence of data modeling in a certain topic.

#### Wikidata editor

- Edit [Terms](../../Glossary.md#term) and sitelinks of entities without using JavaScript in a browser.
- Receive suggestions for [properties](../../Glossary.md#property) in a meaningful order when trying to add new [statements](../../Glossary.md#statement).

#### Commons editor

Some [Commons](../../Glossary.md#commons) editor expectations probably only apply to the MediaInfo extension, however many end up influencing Repository architecture.

- Store structured data relevant to files on Commons, on Commons.
- Describe Commons files using concepts from Wikidata.
- Structured data can be added to a file without the need for extra "creation" of some entity or page.
- There is a known mapping between the [File page](../../Glossary.md#mediawiki-file-page) and structured data location

#### 3rd party editor

- Use the same Wikidata ontology on a non Wikimedia Wikibase.
- Extend a non Wikimedia Wikibase with relevant entities from Wikidata ([federation](../../Glossary.md#federated-properties)).

### Importer

- - Import large amount of data (>1M entities) into a third-party Wikibase quickly & efficiently.

#### Wikidata Data donor

- Import (donate) subset of my collection data to Wikidata.
- Monitor, maintain, and re-export the data donated to Wikidata.
- Cross-check an external data collection against Wikidata.

### Data re-user

- Access a Repositories content via a web API.

#### Wikidata Data re-user

- Fix and add [data values](../../Glossary.md#datavalue) on Wikidata.

#### Researcher

- Obtain large parts of the data on Wikidata.
- Quickly create visualizations based on data from Wikidata without the need to download it.
- Fix minor modeling and data issues.
