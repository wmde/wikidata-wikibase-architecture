# Wikibase Client / Wikibase Repository relation to MediaWiki

**Decision Date:** January 2021

**Summary:** We will document [Wikibase Repository](../../systems/overview/12-Glossary.md#wikibase-repository) as a standalone system and [Wikibase Client](../../systems/overview/12-Glossary.md#wikibase-client) as a subsystem that is embedded into a [MediaWiki](../../systems/overview/12-Glossary.md#mediawiki) application.

## Details

Starting with documenting early architecture decisions, we noticed that the MediaWiki to Wikibase Client relation on the one hand and the MediaWiki to Wikibase Repository relation on the other hand are of quite different nature: While Wikibase Client is primarily made of "plugins" (= extensions) that live inside MediaWiki and adds functionality to another system, Wikibase Repository is a system of its own.

We decided that the corresponding "Solution Strategy" sections of both [Wikibase Client](../../systems/WikibaseClient/04-Solution_Strategy.md#developing-wikibase-client-as-mediawiki-extensions) and [Wikibase Repo](../../systems/WikibaseRepo/04-Solution_Strategy.md#developing-wikibase-repository-as-a-mediawiki-extension) are the best place to document the reasons why Wikibase was created as a MediaWiki extension.

In addition to that, we reflect the MediaWiki to Wikibase Client relation in the [Technical Context diagram for Wikibase Client](../../systems/WikibaseClient/03-Context_and_Scope.md#technical-context) by embedding it as a subsystem into a higher-level MediaWiki application. However, we do not regard MediaWiki as an external system in the [Technical Context diagram for Wikibase Repository](../../systems/WikibaseRepo/03-Context_and_Scope.md#technical-context).

Still, MediaWiki will be shown as a component in the [Building Block View of Wikibase Repository](../../systems/WikibaseRepo/05-Building_Block_View.md).
