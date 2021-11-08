# Glossary

This section contains the most important domain and technical terms used when discussing the system.
The goal is for all consumers of the architecture documentation to have an identical understanding of the terms and not use synonyms and homonyms.

## [Alias](https://www.wikidata.org/wiki/Help:Aliases)

Aliases are alternative names for [Entities](#entity) that are placed in the _Also known as_ column of the table on top of every [Wikibase Item](#item) or Property page. The usual or most important name is the [Label](#label). Aliases help people to find an item even if they don’t search with the label. For example, the item Q2 has the label “Earth” and aliases such as “Tellus” and “Blue Planet”. It's a type of [Term](#term).

## [Badge](https://www.wikidata.org/wiki/Help:Badges)

Badges are optional markers that can be attached to a sitelink to another Wikimedia page. For instance a sitelink can be marked to link to a "featured article" and/or to a "proofread" page.

## [Blazegraph](https://blazegraph.com/)

Blazegraph™ DB is a ultra high-performance graph database supporting Blueprints and [RDF](#rdf)/[SPARQL](#sparql) APIs.
It is the central part of the Query Service.

## [Bots](https://www.wikidata.org/wiki/Wikidata:Bots)

 Bots are tools used to make edits without the necessity of human decision-making. Bots can add Sitelinks, labels, descriptions, statements, References, and can even create Items, among other things.

## [Commons](https://commons.wikimedia.org/wiki/Main_Page)

Commons, or Wikimedia Commons is a media repository, running [MediaWiki](#mediawiki), of free-use images, sounds, other media, and JSON files.
It runs the MediaInfo [Wikibase Extension](#wikibase-extension).

## Component

A component is a software unit with a well-defined interface and explicitly specified dependencies. A software component can be as small as a block of reusable code, or it can be as big as an entire application depending on the level of granularity a system is being looked at.

## Connected Pages

Pages on Client wikis for which there is a [Sitelink](#sitelink) on an Item on a Wikibase Repository are often referred to as connected or linked pages. Pages for which there isn't a Sitelink are called unconnected pages.

## [Datatype](https://www.wikidata.org/wiki/Help:Data_type)

Datatype (or _propertyType_) is an attribute of a [Property](#property) specifying the type and shape of the [Datavalue](#datavalue) in each statement. Each property is assigned a pre-defined datatype, which usually can not be changed. Data types can only be defined by developers; the development of new datatypes is still in progress.

## [Datavalue](https://www.wikidata.org/wiki/Help:Statements#Values)

Datavalue (also just _value_) is the actual piece of information stored within a [Statement](#statement). Wikidata has a range of allowed [datatypes](#datatype) (such as _Item_, _mathematical expression_, _quantity_). The datatype needed for any given statement is determined by the [Property](#property) used (e.g. the value in a _place of birth_ statement must be an _Item_). Instead of a normal value, you can also use one of the special cases _unknown value_ or _no value_ in a statement.

## [Description](https://www.wikidata.org/wiki/Help:Description)

Description is a language-specific descriptive phrase for an [Entity](#entity). It provides context for the [Label](#label) (for example, there are many items about places with the label "Cambridge"). The Description therefore does not need to be unique, neither within a language or Wikidata in general, but it must be unique together with the Label. It's a type of [Term](#term).

## Entity

Entities are the top level concepts of Wikibase's data model. [Items](#item) and [Properties](#property) are the core Entity types(#entity-types) of Wikibase. Other types can be added through [Wikibase extensions](#wikibase-extension), such as [Lexemes](https://www.mediawiki.org/wiki/Extension:WikibaseLexeme/Data_Model#Lexeme).

## [Entity Sources](https://doc.wikimedia.org/Wikibase/master/php/md_docs_topics_entitysources.html)

Entity Sources define the data sources for entities. There are two types: API Entity Sources and Database Entity Sources. API sources are for Entities that are usable in Statements on the local Repository, but stored and edited on a remote Repository (see also [Federated Properties](#federated-properties)). Database sources are used for Entities whose data is stored in a database that is accessible to the local repository. Only a single Database Entity Source is allowed per entity type on a given repo.

## [Entity Types](https://doc.wikimedia.org/Wikibase/master/php/md_docs_topics_entitytypes.html)

Entities as defined by Wikibase have a type, e.g. `item`, `property`, `lexeme`.
The entity type has a defined ID format and json structure. It also has a set of services, which differ based on the type.
There's a minimum set of services which need to be set though, like serializer/deserializer, ID Factory, content factory, [rdf](#rdf) factory etc.
For detailed information on those services see a `*.entitytypes.php` file in Wikibase's repository.

## [EventBus](https://www.mediawiki.org/wiki/Extension:EventBus)

A [MediaWiki extension](#mediawiki-extension) that propagates state changes (edit, move, delete, revision visibility, etc) to a RESTful event service.

## [EventGate](https://wikitech.wikimedia.org/wiki/Event_Platform/EventGate)

A HTTP service for ingestion of events producing them to a backend such as [Kafka](#kafka).

## [Federated Properties](https://doc.wikimedia.org/Wikibase/master/php/md_docs_components_repo-federated-properties.html)

Federated Properties is a feature that allows a newly created [Wikibase](#wikibase) instance to use the existing [Properties](#property) of another Wikibase. This enables new users evaluating Wikibase to get started without having to spend a lot of time defining basic Properties first.

## Gadgets

[Gadgets](https://www.mediawiki.org/wiki/Extension:Gadgets) are made up of JavaScript and/or CSS Snippets located on pages in the MediaWiki namespace. These snippets add functionality to the wiki itself and can be enabled and disabled via preferences.

## [Hadoop](https://hadoop.apache.org/)

Allows for the distributed processing of large data sets across clusters of computers using simple programming models.

## [Interwiki Links](https://www.mediawiki.org/wiki/Manual:Interwiki)

Interwiki links are links to pages of other projects, using a prefixed internal link style. Interwiki links make it possible to link to pages of e.g. Wikipedia, Wikibooks, Wikinews etc. or to your wiki-project in different languages. Interwiki links to pages referring to the same concept across wikis can be centrally stored on a Wikibase Repository by using [Sitelinks](#sitelink).

## [Item](https://www.wikidata.org/wiki/Help:Items)

In Wikidata or any other WikibaseRepo instance, Items are used to represent all the things in human knowledge, including topics, concepts, and objects. For example, the "1988 Summer Olympics", "love", "Elvis Presley", and "gorilla" are all Items in Wikidata.

The terms "Wikibase Item" and "Wikidata Item" are used interchangeably throughout the documentation. They are the same thing that lives in different contexts - Wikidata or another WikibaseRepo instance.

## [Kafka](https://kafka.apache.org/intro)

Apache Kafka is an event streaming platform.

## [Label](https://www.wikidata.org/wiki/Help:Label)

Label (also name) is the main name given to identify an [Entity](#entity). E.g.: the Item with the Item identifier Q7378 has the English label “elephant”. Every Entity has exactly one Label in a given human language. Labels do not need to be unique. [Descriptions](#description) and [Aliases](#alias) are used to distinguish between entities with the same Label. It's a type of [Term](#term).

## [Lua](https://en.wikipedia.org/wiki/Wikipedia:Lua)

Lua is a programming language that can be embedded into [Wikitext](https://www.mediawiki.org/wiki/Wikitext) to programmatically enhance the content of wiki articles. It is available on most [Wikimedia sites](#wikimedia-sites) via the [Scribunto MediaWiki extension](https://www.mediawiki.org/wiki/Extension:Scribunto). It's often used in templates for [Infoboxes](https://en.wikipedia.org/wiki/Help:Infobox) on Wikipedias.

## MediaWiki

MediaWiki is the free and open-source wiki engine that is running Wikipedia and almost all other Wikimedia websites, including Wiktionary, Wikimedia Commons and Wikidata.

## [MediaWiki Core](https://www.mediawiki.org/wiki/Core)

MediaWiki Core refers to all files that are part of the main [MediaWiki](#mediawiki) package.

## [MediaWiki Extension](https://www.mediawiki.org/wiki/Manual:Extensions)

Extensions are software components that administrators can add (or remove) to their [MediaWiki](#mediawiki) application in order to customize how it looks and works.
Examples: WikibaseClient, UniversalLanguageSelector, OAuth

## [MediaWiki file page](https://www.mediawiki.org/wiki/Help:Managing_files#File_description_page)

A MediaWiki file page refers to a type of [MediaWiki](#mediawiki) page in the `File` [namespace](#mediawiki-namespace).

An example file page on [Commons](#commons) would be <https://commons.wikimedia.org/wiki/File:ISS050-E-68411_-_View_of_Earth.jpg>

## [MediaWiki namespace](https://www.mediawiki.org/wiki/Manual:Namespace)

A MediaWiki namespace is a collection of pages which have content with a similar purpose.

Wikibase [Items](#item) and [Properties](#property) each exist in their own namespaces.

## [OOUI](https://www.mediawiki.org/wiki/OOUI)

OOUI is a MediaWiki core library (developed and supported by the WMF) that contains a set of ready-to-use widgets, layouts, windows and a server-side component that generates compatible output in PHP for cases where JavaScript is not supported.

## [Parser function](https://www.mediawiki.org/wiki/Manual:Parser_functions)

Parser functions are dynamic functions that can be used directly in wikitext. Functionality of such functions can be defined by extensions.

## [Property](https://www.wikidata.org/wiki/Help:Properties)

Properties are [Entities](#entity) that describe a relationship between [Items](#item) (or other Entities) and [values](#datavalue) of the Property. Typical Properties are _population_ (using numbers as values), _binomial name_ (using strings as values), but also _has father_ and _author of_ (both using Items as values).

## [QueryBuilder](https://www.wikidata.org/wiki/Wikidata:Query_Builder)

The Query Builder provides a visual interface for building simple Wikibase data queries.
It is ideal for users with little or no experience in [SPARQL](#sparql).
The Query Builder doesn't offer SPARQL's full functionality.

The Query Builder was initially developed for the Wikidata usecase, and may not currently be optimized for generic Wikibase usage.

## [QuickStatements](https://www.wikidata.org/wiki/Help:QuickStatements)

QuickStatements is a tool, that can edit Wikidata [Items](#item), based on a simple set of text commands. The tool can add and remove [Statements](#statement), [Labels](#label), Descriptions, and Aliases; as well as add statements with optional qualifiers and sources.

## [Rank](https://www.wikidata.org/wiki/Help:Ranking)

Rank is a quality factor used for simple selection/filtering in cases where there are several [Statements](#statement) for a given [Property](#property). In such cases, users may want to indicate which statement is more important or relevant than other statements. By default, a statement has the rank _normal_, but it can be changed this to either _preferred_ or _deprecated_.

## [RDF](https://www.w3.org/TR/rdf-concepts/)

The Resource Description Framework (RDF) is a framework for representing information in the Web.

RDF extends the linking structure of the Web to use URIs to name the relationship between things as well as the two ends of the link (this is usually referred to as a “triple”).

For example a triple in XML RDF form from Wikidata:

```
<?xml version="1.0" encoding="utf-8" ?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
         xmlns:ns0="http://www.wikidata.org/prop/direct/">

  <rdf:Description rdf:about="http://www.wikidata.org/entity/Q123">
    <ns0:P31 rdf:resource="http://www.wikidata.org/entity/Q47018901"/>
  </rdf:Description>

</rdf:RDF>
```

A textual form of RDF, common in Wikibase is [Turtle](#turtle).

## [Recent changes](https://www.mediawiki.org/wiki/Help:Recent_changes)

A feature within [MediaWiki](#mediawiki) exposed via API and UI that lists recent changes in reverse order, with change date and time, change in the page size, user who created the page, and edit summary.

## [Reference](https://www.wikidata.org/wiki/Help:Sources)

A Reference (or source) is used to point to a specific resource that supports a [Statement](#statement) in Wikidata. A reference can be a link to a URL or an item; for example, an item about a book. Wikidata does not aim to answer the question of whether a statemente is correct, but only whether the statemtent appears in a reference.

## [Sitelink](https://www.wikidata.org/wiki/Help:Sitelinks)

Sitelinks are special links that contain a site and a title, and go from individual [Items](#item) in a Wikibase Repository to pages on Client wikis (e.g. from Wikidata to other Wikimedia sites such as Wikipedia, Wikisource and Wikivoyage) referring to the same concept. Adding a Sitelink to an Item on a Wikibase Repository for a wiki page on a Client connects the two, which makes it possible for the Client's wiki page to link to pages on other Clients referring to the same concept. On the Client side, these links are called [Interwiki links](#interwiki-links).

## Snak

Snak is a technical term of Wikibase software which data users are most likely to encounter when accessing Wikidata through the MediaWiki API. It refers to the combination of a [Property](#property) and either a [value](#datavalue) or one of the special cases _no value_ and _unknown value_. Snaks can be found in statements (then they are called _main snaks_) or in qualifiers (then they are called _qualifier snaks_).

## [SPARQL](https://www.w3.org/TR/sparql11-query/)

SPARQL is an [RDF](#rdf) query language that is, a semantic query language for databases.

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

A Statement is a piece of data about an [Item](#item), recorded on the Item's page. A Statement consists of a property-value pair such as "Location: Germany", augmented by [References](#reference) and a [Rank](#rank). The term _Statement_ is often used interchangeably with _Claim_.

## Term

A term is a string value with a language code. Terms are used as [Labels](#label), [Descriptions](#description) and [Aliases](#alias) of [Entities](#entity) and are displayed in the [termbox](#termbox). They may only be plain text (i.e. not containing any wiki markup).

## Termbox

The termbox is the zone at the top of an [Entity](#entity) page which shows its [Labels](#label), [Descriptions](#description) and [Aliases](#alias) in different languages.

## Title

Title is the name of a wiki page. All pages must have a unique title within a given wiki, as the title is included in the URL for the page. For example there can be only one page with the title "Douglas Adams" on English Wikipedia. In Wikidata, a title is either an entity identifier such as Q42, or it starts with a namespace prefix such as Help:. The page title is not to be confused with the [Label](#label) for a Wikidata [Item](#item) or [Property](#property). Wikidata items are connected to pages on other Wikimedia wikis via [Sitelinks](#sitelink), which use the page's title to uniquely identify the resource.

## [Tools](https://www.wikidata.org/wiki/Wikidata:Tools)

Tools which help when working with Wikidata. The full list of Wikidata tools can be found at [Toolforge](https://hay.toolforge.org/directory/#/search/wikidata)

## [Turtle](https://www.w3.org/TR/turtle/)

A textual syntax for [RDF](#rdf) called Turtle.

For example a triple in turtle form from Wikidata:

```
<http://www.wikidata.org/entity/Q123> <http://www.wikidata.org/prop/direct/P31> <http://www.wikidata.org/entity/Q47018901>.
```

## Use case

A textual description of the functionality provided by the system that captures actor-system interaction. It specifies how a user interacts with a system and how the system responds to the user actions.

## [Watchlist](https://en.wikipedia.org/wiki/Help:Watchlist)

A watchlist is a page which allows any logged-in user to maintain a list of "watched" pages and to generate a list of recent changes made to those pages. In this way they can keep track of, and react to, what's happening to pages they have created or are otherwise interested in.

## Wikibase

Wikibase is a collection of software and services to enable creation and maintenance of a powerful, flexible and customizable knowledge base.
[Wikidata](#wikidata) is the largest current public deployement of this system.

## Wikibase as a Service

Wikibase as a Service is a platform allowing easy creation of multiple Wikibase instances using a single shared set of resources.
Primarily developed under the name WBStack at <https://wbstack.com>, at the start of 2022 a service was created at <https://wikibase.cloud>

## Wikibase Client

Wikibase Client is a set of features that enables the use, display and editing of [Entity](#entity) data from a [Wikibase Repository](#wikibase-repository).
Its core functionality is implemented as a [MediaWiki extension](#mediawiki-extension) called [WikibaseClient](https://www.mediawiki.org/wiki/Extension:Wikibase_Client).
It can optionally contain additional [MediaWiki extensions](#mediawiki-extension) such as ArticlePlaceholder.

[Wikibase Client](./systems/Client/01-Introduction.md) is identified as a top level system of the Wikibase architecture.

## Wikibase Extension

Wikibase Extensions are [MediaWiki](#mediawiki) extensions that add further functionality to the main extensions that make up Wikibase ([WikibaseClient](#wikibase-client) and [WikibaseRepo](#wikibase-repository)).
Extensions such as [WikibaseLexeme](https://www.mediawiki.org/wiki/Extension:WikibaseLexeme) that enable additional Entity types or Property datatypes on Wikibase need to be enabled both on the Repository, and on the Client.
On the Repository the extension enables creating and editing these new types of data, and on the Client side the extension enables the wiki to consume and display them.

Other Wikibase extensions exist only on the Repository (e.g. [WikibaseQualityConstraints](https://www.mediawiki.org/wiki/Extension:WikibaseQualityConstraints)) or only on the Client (e.g. [ArticlePlaceholder](https://www.mediawiki.org/wiki/Extension:ArticlePlaceholder)).

## Wikibase Repository

Wikibase Repository is an application that provides structured [Entity](#entity) data.
Its core functionality is implemented as a [MediaWiki extension](#mediawiki-extension) called [WikibaseRepo](https://www.mediawiki.org/wiki/Extension:Wikibase_Repository).
It can optionally contain additional [Wikibase extensions](#wikibase-extension) such as WikibaseLexeme, and is often surrounded by other services such as a Query Service.

[Wikibase Repository](./systems/Repository/01-Introduction.md) is identified as a top level system of the Wikibase architecture.

## Wikidata

Wikidata is a Wikimedia project that runs an instance of [MediaWiki](#mediawiki) with the [Wikibase](#wikibase) extensions. It enables Wikidata editors to enter structured Entity data and browse pages.

## Wikimedia

Wikimedia is a global movement whose mission is to bring free educational content to the world.

## Wikimedia sites

Wikimedia is made up of various projects or sites, most of which run [MediaWiki](#mediawiki) and [Wikibase Client](#wikibase-client).

These sites include but is not limited to [Wikidata](#wikidata), [Commons](#commons), [Wikipedia](#wikipedia), Wiktionaries, ...

[Wikidata](#wikidata), which is a primary user of [Wikibase](#wikibase) is also a site run by [Wikimedia](#wikimedia).

## Wikipedia

The free, multilingual open-collaborative online encyclopedia that is run by the [MediaWiki](#mediawiki) engine and using [Wikibase Client](#wikibase-client) to display Entity data from [Wikidata](#wikidata).

## [Wikitext](https://en.wikipedia.org/wiki/Help:Wikitext)

Wikitext, also known as Wiki markup or Wikicode, consists of the syntax and keywords used by the [MediaWiki](#mediawiki) software to format a page. It's what editors work with to create and edit wiki articles.

## Wikitext-generated content

This describes the content of a wiki that is generated by [Wikitext](#wikitext), such as wiki pages or [messages](https://www.mediawiki.org/wiki/Help:System_message). The format of Wikitext-generated content is typically HTML, but it can also be plain text.
