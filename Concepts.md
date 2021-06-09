# Crosscutting Concepts

![Crosscutting Concepts](./diagrams/08-crosscutting-concepts.drawio.svg)

## Domain concepts

- [WikibaseDataModel](https://github.com/wmde/WikibaseDataModel)
- [WikibaseDataModelJavaScript](https://github.com/wmde/WikibaseDataModelJavaScript)
- [WikibaseDataModelTypes](https://github.com/wmde/WikibaseDataModelTypes)

You can read more about Wikibase's data model in the [Glossary](./Glossary.md#entity).

## User Experience concepts (UX)

### User Interface

User interfaces which were built prior to 2017 use either [OOUI](https://www.mediawiki.org/wiki/OOUI) or [jQuery UI](https://jqueryui.com).  

There are several applications which are written in [Vue](https://vuejs.org/) and [TypeScript](https://www.typescriptlang.org/).  
JavaScript and CSS dependencies are managed through npm. Optimization and minification of files is done through [Webpack](https://v4.webpack.js.org/).  
There is a central Vue components library in development as part of the [Wikidata/Wikibase Design System](https://wmde.github.io/wikit/). In the future, ideally, all frontend components will be using it.

The project Termbox, which delivers the terms section of an item page on mobile, uses Vue and [vue-server-renderer](https://www.npmjs.com/package/vue-server-renderer) to achieve [server side rendering](https://wikitech.wikimedia.org/wiki/WMDE/Wikidata/SSR_Service).

### Internationalization (i18n)

The system is made usable in international settings in the following ways:

- by providing internationalized content via [mediawiki's i18n mechanism](https://www.mediawiki.org/wiki/Localisation)
- by designing and developing for both left-to-right and right-to-left scripts

## Security concepts

The development conforms to established [security best practices](https://www.mediawiki.org/wiki/Security_for_developers).

Security code review is performed by [WMF's Security Team](https://www.mediawiki.org/wiki/Wikimedia_Security_Team) for every new feature.

## Architecture and design patterns

Recurring patterns within the system.  

### Dispatching

Wikibase, particularly [Wikibase Repository](./systems/WikibaseRepo/01-Introduction_and_Goals.md) and [Wikibase Client](./systems/WikibaseClient/01-Introduction_and_Goals.md), make use of a [Dynamic Dispatch](https://en.wikipedia.org/wiki/Dynamic_dispatch#Single_and_multiple_dispatch) pattern.
This is most notably used for switching internal service implementations based on the type of entity being interacted with.

```mermaid
graph LR
A[Caller] -->|Calls service| B(DispatchingService)
B -->D[ItemServiceImplementation]
B -->|Call one service implementation based on entity type| E[LexemeServiceImplementation]
B -->F[...ServceImplementation]
```

A few different implementations of the dispatching pattern currently exist, the most notable difference being:

- Default / fallback implementation available in some implementations
- Callbacks passed into dispatching code, rather than concrete implementations
- Multiple implementations able to be called for a single entity type

## “Under-the-hood” concepts

### Persistency

How / where to store and retrieve data.  
TBD

### Process control

TBD

### Communication and integration

How to integrate with other systems, how to communicate (i.e. sync, async, pub-sub…)  
TBD

### Exception and error handling

What errors to handle, how to handle exceptional situations.  
TBD.

### Parallization and threading

How to parallelize tasks, how to create/spawn/manage processes.  
TBD.

### Plausibility checks and validation

i.e. client-side validation, how to verify/check data, input, results.  
TBD.

### Business rules

i.e. how to use a rule-engine, how to implement/configure business rules, how to change those…  
TBD.

### Batch processing

How to process data in batches (i.e. offline processing).  
TBD.

### Reporting

How to create reports, how to gather the required data, how to render the results.  
TBD.

## Development concepts

### Build, test, deploy

TBD

### Code generation

TBD

### Migration

TBD

### Configurability

TBD

## Operational concepts

### Administration

TBD

### Management

TBD

### Disaster-Recovery

TBD

### Scaling

TBD

### Clustering

TBD

### Monitoring, Logging

TBD

### High Availability

TBD

### Load balancing

TBD
