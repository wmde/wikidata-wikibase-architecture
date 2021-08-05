# Architecture Constraints

Some constraints cover the entire Wikibase system, and thus are [documented at a higher level](./../../Architecture_Constraints.md).

## MediaWiki Integration

WikibaseClient makes the [Repo's](../../Glossary.md#wikibase-repository) Entity data available to MediaWiki applications such as Wikipedia. Thus, it must integrate with and extend the functionality of MediaWiki, which is best achieved through a [MediaWiki extension](../../Glossary.md#mediawiki-extension) or a [collection thereof](../../Glossary.md#wikibase-extension).

## Embedding Entity data in Client articles must be triggered through Wikitext

Since the source of any wiki article is written in [Wikitext](../../Glossary.md#wikitext), the process of loading [Entity](../../Glossary.md#entity) data has to happen with the transformation from Wikitext to the desired output format (typically HTML). This is possible by calling a [Lua function](../../Glossary.md#lua) or a [ParserFunction](https://www.mediawiki.org/wiki/Help:Extension:ParserFunctions) from Wikitext.
