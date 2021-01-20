# Client / Repo relation to MediaWiki

**Decision Date:** Early 2021

**Summary:** We will document Repo as a standalone system and Client as a subsystem that is embedded into a MediaWiki application.

## Details

Starting with documenting early architecture decisions, we noticed that the MediaWiki-WikibaseClient relation on the one hand and the MediaWiki-WikibaseRepo relation on the other hand are of quite different nature: While WikibaseClient is a "plugin" (= extension) that lives inside MediaWiki and adds functionality to another system, WikibaseRepo is a system of its own.

We decided that the corresponding "Solution Strategy" sections of both [WikibaseClient](../../systems/WikibaseClient/04-Solution_Strategy.md#developing-wikibase-client-as-a-mediawiki-extension) and [WikibaseRepo](../../systems/WikibaseRepo/04-Solution_Strategy.md#developing-wikibase-repo-as-a-mediawiki-extension) are the best place to document the reasons why Wikibase was created as a MediaWiki extension.

In addition to that, we reflect the MediaWiki-Client relation in the [Technical Context diagram for WikibaseClient](../../systems/WikibaseClient/03-Context_and_Scope.md#technical-context) by embedding it as a subsystem into a higher-level MediaWiki application. However, we do not regard MediaWiki as an external system in the [Technical Context diagram for WikibaseRepo](../../systems/WikibaseRepo/03-Context_and_Scope.md#technical-context).

Still, MediWiki will be shown as a component in the [Building Block View of WikibaseRepo](../../systems/WikibaseRepo/05-Building_Block_View.md).
