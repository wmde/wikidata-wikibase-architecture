# Glossary

This section contains the most important domain and technical terms used when discussing the system.
The goal is for all consumers of the architecture documentation to have an identical understanding of the terms and not use synonyms and homonyms.

## [Alias](https://www.wikidata.org/wiki/Help:Aliases)

Aliases are alternative names for [Entities](#entity) that are placed in the _Also known as_ column of the table on top of every Wikidata Item or Property page. The usual or most important name is the [Label](#label). Aliases help people to find an item even if they don’t search with the label. For example, the item Q2 has the label “Earth” and aliases such as “Tellus” and “Blue Planet”. It's a type of [Term](#term).

## [Badge](https://www.wikidata.org/wiki/Help:Badges)

Badges are optional markers that can be attached to a sitelink to another Wikimedia page. For instance a sitelink can be marked to link to a "featured article" and/or to a "proofread" page.

## [Bots](https://www.wikidata.org/wiki/Wikidata:Bots)

 Bots are tools used to make edits without the necessity of human decision-making. Bots can add interwiki links, labels, descriptions, statements, sources, and can even create items, among other things.

## Component

A component is a software unit with a well-defined interface and explicitly specified dependencies. A software component can be as small as a block of reusable code, or it can be as big as an entire application depending on the level of granularity a system is being looked at.

## [Description](https://www.wikidata.org/wiki/Help:Description)

Description is a language-specific descriptive phrase for an [Entity](#entity). It provides context for the [Label](#label) (for example, there are many items about places with the label "Cambridge"). The Description therefore does not need to be unique, neither within a language or Wikidata in general, but it must be unique together with the Label. It's a type of [Term](#term).

## Entity

Entities are the top level concepts of Wikibase's data model. [Items](#item) and [Properties](#property) are the core Entity types of Wikibase. Other types can be added through [Wikibase extensions](#wikibase-extension), such as [Lexemes](https://www.mediawiki.org/wiki/Extension:WikibaseLexeme/Data_Model#Lexeme).

## Gadgets

[Gadgets](https://www.mediawiki.org/wiki/Extension:Gadgets) are made up of JavaScript and/or CSS Snippets located on pages in the MediaWiki namespace. These snippets add functionality to the wiki itself and can be enabled and disabled via preferences.

## [Interwiki Links](https://www.mediawiki.org/wiki/Manual:Interwiki)

Interwiki links are links to pages of other projects, using a prefixed internal link style.
Interwiki links make it possible to link to pages of (e.g.) Wikipedia, Wikibooks, Wikinews etc. or to your wiki-project in different languages.

## [Item](https://www.wikidata.org/wiki/Help:Items)

In Wikidata, Items are used to represent all the things in human knowledge, including topics, concepts, and objects. For example, the "1988 Summer Olympics", "love", "Elvis Presley", and "gorilla" are all Items in Wikidata.

## [Label](https://www.wikidata.org/wiki/Help:Label)

Label (also name) is the main name given to identify an [Entity](#entity). E.g.: the Item with the Item identifier Q7378 has the English label “elephant”. Every Entity has exactly one Label in a given human language. Labels do not need to be unique. [Descriptions](#description) and [Aliases](#alias) are used to distinguish between entities with the same Label. It's a type of [Term](#term).

## [Lua](https://en.wikipedia.org/wiki/Wikipedia:Lua)

Lua is a programming language that can be embedded into [Wikitext](https://www.mediawiki.org/wiki/Wikitext) to programmatically enhance the content of wiki articles. It is available on most Wikimedia sites (Wikipedias, Commons, Wiktionaries, ...) via the [Scribunto MediaWiki extension](https://www.mediawiki.org/wiki/Extension:Scribunto). It's often used in templates for [Infoboxes](https://en.wikipedia.org/wiki/Help:Infobox) on Wikipedias.

## MediaWiki

MediaWiki is the free and open-source wiki engine that is running Wikipedia and almost all other Wikimedia websites, including Wiktionary, Wikimedia Commons and Wikidata.

## [MediaWiki Core](https://www.mediawiki.org/wiki/Core)

MediaWiki Core refers to all files that are part of the main [MediaWiki](#mediawiki) package.

## [MediaWiki Extension](https://www.mediawiki.org/wiki/Manual:Extensions)

Extensions are software components that administrators can add (or remove) to their [MediaWiki](#mediawiki) application in order to customize how it looks and works.
Examples: WikibaseClient, UniversalLanguageSelector, OAuth

## [Property](https://www.wikidata.org/wiki/Help:Properties)

Properties are Entities that describe a relationship between Items (or other Entities) and values of the Property. Typical Properties are _population_ (using numbers as values), _binomial name_ (using strings as values), but also _has father_ and _author of_ (both using Items as values).

## [QuickStatements](https://www.wikidata.org/wiki/Help:QuickStatements)

QuickStatements is a tool, that can edit Wikidata [Items](#item), based on a simple set of text commands. The tool can add and remove [Statements](#statement), [Labels](#label), Descriptions, and Aliases; as well as add statements with optional qualifiers and sources.

## [Sitelink](https://www.wikidata.org/wiki/Help:Sitelinks)

Sitelinks (also known as interwiki links or interlanguage links) are special links that contain a site and a title, and go from individual [Items](#item) in Wikidata to pages on other Wikimedia sites such as Wikipedia, Wikisource and Wikivoyage.

## [Special Page](https://www.mediawiki.org/wiki/Manual:Special_pages)

Special pages are dynamically created [MediaWiki](#mediawiki) pages, which perform a specific function, such as providing a list of pages, showing statistics or creating a form for user submitted feedback. They are located in their own namespace (_Special:_) and are not editable directly like other pages.  Developers can create new special pages. They will generally show up in the list of all special pages at [Special:SpecialPages](https://www.wikidata.org/wiki/Special:SpecialPages).

## Stakeholder

All persons, roles or organizations that:

- will use the system
- should know the architecture
- have to work with the architecture or with code
- need the documentation of the architecture for their work
- have to come up with decisions about the system or its development

## [Statement](https://www.wikidata.org/wiki/Help:Statements)

A Statement is a piece of data about an [Item](#item), recorded on the Item's page. A Statement consists of a property-value pair such as "Location: Germany", augmented by references and a rank. The term _Statement_ is often used interchangeably with _Claim_, but technically it only becomes a Statement once at least one reference has been added.

## Term

A term is a string value with a language code. Terms are used as [Labels](#label), [Descriptions](#description) and [Aliases](#alias) of [Entities](#entity) and are displayed in the [termbox](#termbox). They may only be plain text (i.e. not containing any wiki markup).

## Termbox

The termbox is the zone at the top of an [Entity](#entity) page which shows its [Labels](#label), [Descriptions](#description) and [Aliases](#alias) in different languages.

## [Tools](https://www.wikidata.org/wiki/Wikidata:Tools)

Tools which help when working with Wikidata. The full list of Wikidata tools can be found at [Toolforge](https://hay.toolforge.org/directory/#/search/wikidata)

## Use case

A textual description of the functionality provided by the system that captures actor-system interaction. It specifies how a user interacts with a system and how the system responds to the user actions.

## [Watchlist](https://en.wikipedia.org/wiki/Help:Watchlist)

A watchlist is a page which allows any logged-in user to maintain a list of "watched" pages and to generate a list of recent changes made to those pages. In this way they can keep track of, and react to, what's happening to pages they have created or are otherwise interested in.

## Wikibase

Wikibase is the software behind [Wikidata](#wikidata). It consists of a set of [extensions](#mediawiki-extension) to the [MediaWiki](#mediawiki) software. These extensions allow Wikidata to manage and display data in [Items](#item) and [Properties](#property).

## [WikibaseClient](https://www.mediawiki.org/wiki/Extension:Wikibase_Client)

WikibaseClient is a [MediaWiki Extension](#mediawiki-extension) that enables the use and display of Entity data from a [Wikibase Repository](#wikibase-repository) via Lua modules or parser functions. Clients can also use centralized language links.

## Wikibase Extension

Wikibase Extensions are [MediaWiki](#mediawiki) extensions that add further functionality to [Wikibase](#wikibase). They depend on the Wikibase extension being installed and directly interact with it.
Examples: WikibaseLexeme, WikibaseMediaInfo, WikibaseImport

## Wikibase Repository

Wikibase Repository is an application that provides structured [Entity](#entity) data. Its core functionality is implemented as a [MediaWiki extension](#mediawiki-extension) called [WikibaseRepo](https://www.mediawiki.org/wiki/Extension:Wikibase_Repository). It can optionally contain additional [Wikibase extensions](#wikibase-extension) such as WikibaseLexeme.

## Wikidata

Wikidata is a Wikimedia project that runs an instance of [MediaWiki](#mediawiki) with the [Wikibase](#wikibase) extensions. It enables Wikidata editors to enter structured Entity data and browse pages.

## Wikipedia

The free, multilingual open-collaborative online encyclopedia that is run by the [MediaWiki](#mediawiki) engine and using  [WikibaseClient](#wikibaseclient) as an [extension](#mediawiki-extension) to display Entity data from [Wikidata](#wikidata).

## [Wikitext](https://en.wikipedia.org/wiki/Help:Wikitext)

Wikitext, also known as Wiki markup or Wikicode, consists of the syntax and keywords used by the [MediaWiki](#mediawiki) software to format a page. It's what editors work with to create and edit wiki articles.

## Wikitext-generated content

This describes the content of a wiki that is generated by [Wikitext](#wikitext), such as wiki pages or [messages](https://www.mediawiki.org/wiki/Help:System_message). The format of Wikitext-generated content is typically HTML, but it can also be plain text.
