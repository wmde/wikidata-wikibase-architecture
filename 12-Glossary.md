# Glossary

This section contains the most important domain and technical terms used when discussing the system.
The goal is for all consumers of the architecture documentation to have an identical understanding of the terms and not use synonyms and homonyms.

## Stakeholder

All persons, roles or organizations that:
- will use the system
- should know the architecture
- have to work with the architecture or with code
- need the documentation of the architecture for their work
- have to come up with decisions about the system or its development

## Use case

A textual description of the functionality provided by the system that captures actor-system interaction. It specifies how a user interacts with a system and how the system responds to the user actions.

## Component

A component is a software unit with a well-defined interface and explicitly specified dependencies. A software component can be as small as a block of reusable code, or it can be as big as an entire application depending on the level of granularity a system is being looked at.

## [MediaWiki Extension](https://www.mediawiki.org/wiki/Manual:Extensions)

Extensions are software components that administrators can add (or remove) to their MediaWiki application in order to customize how it looks and works.
Examples: WikibaseClient, UniversalLanguageSelector, OAuth

## Wikibase Extension

Wikibase Extensions are MediaWiki extensions that add further functionality to Wikibase. They depend on the Wikibase extension being installed and directly interact with it.
Examples: WikibaseLexeme, WikibaseMediaInfo, WikibaseImport

## [Sitelink](https://www.wikidata.org/wiki/Help:Sitelinks)

Sitelinks (also known as interwiki links or interlanguage links) are special links that contain a site and a title, and go from individual items in Wikidata to pages on other Wikimedia sites such as Wikipedia, Wikisource and Wikivoyage.

## [Interwiki Links](https://www.mediawiki.org/wiki/Manual:Interwiki)

Interwiki links are links to pages of other projects, using a prefixed internal link style.
Interwiki links make it possible to link to pages of (e.g.) Wikipedia, Wikibooks, Wikinews etc. or to your wiki-project in different languages.
