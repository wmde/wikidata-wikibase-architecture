# Architecture Decisions

## ADRs
Since 2018 architecture decisions concerning Wikibase are recorded as ADRs. They are stored within the Wikibase code repository and can be found on the [official documentation website](https://doc.wikimedia.org/Wikibase/master/php/md_docs_adr_index.html).

## Early architecture decisions

This section contains retrospectively documented decisions that were made before the practice of recording them in ADRs was established. Some knowledge of the decision context likely went missing over time, so the reasoning is speculative to some degree.

### Developing Wikibase Repo as a MediaWiki extension

One of the main requirements of Wikibase is to make data available to MediaWiki applications. This makes it a natural choice to deliver the client (= data consumer) functionality as a MediaWiki extension. The same is not necessarily the case for the Wikibase Repository, the subsystem that provides and maintains the structured data. WikibaseRepo could have been developed independently of MediaWiki, yet it was decided to use MediaWiki like a web framework and add the functionality to store and maintain structured data through the WikibaseRepo MediaWiki extension.

This came with the following benefits:
* better compatibility with the rest of the Wikimedia ecosystem
* achieving a familiar Wikimedia user experience out of the box
* reduction of initial boilerplate code and basic features
* the original development team had extensive MediaWiki experience
* ability to easily have one application that is both a client and a repo

It also had negative consequences:
* hacks to make MediaWiki do things it was not meant to do
    * storing structured data in the same way Wikitext is stored
    * showing different content dependent on user settings (language)
* binding to multiple extension points (Hooks, API actions, Special Pages, ResourceLoader, ...) of MediaWiki makes for a confusing control flow going back and forth between it and the code within the WikibaseRepo extension, where traditional web frameworks usually have one clearly defined entry and exit point
* strong coupling to MediaWiki concepts (`Title`, `ParserOutput`, ...) slowing down development of features that aren't backed by MediaWiki (Termbox, Federated Properties)
