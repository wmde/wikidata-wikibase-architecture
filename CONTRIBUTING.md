# Contributing

How to get started with contributing to these docs.

## arc42

We recommend that you familiarize yourself with the ARC 42 template, as this is used throughout system documentation.

- [Overview](https://arc42.org/overview/)
- [Documentation](https://docs.arc42.org/home/)

A blank arc42 template that can be used for new systems is kept in the `blank-acr42` directory.

## Source

Source for the documentation lives on [Github](https://github.com/wmde/wikidata-wikibase-architecture).

While working on this source locally, you can install needed dependencies with `npm install`.

Commands exist for other local actions:

- `npm run test` - Runs basic markdown and SVG linting
- `npm run fix` - Fixes markdown issues
- `npm run dev` - Run a development server with live reload of the build documentation site
- `npm run build` - Build a static version of the site

### Directory structure

- `/docs` - Documentation of this documentation (meta docs)
- `/systems` - Actual system level architecture documentation. Each directory within is an arc42 template.
- `/systems/<name>/diagrams` - Diagrams relevant to the system
- `/diagrams` - Diagrams that do not currently fit elsewhere (TODO remove)
- `/.vuepress` - VuePress configuration

## VS Code

We recommend using [VS Code](https://code.visualstudio.com/) to make changes to this documentation.

Recommended Plugins:

- [Draw.io Integration](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

## VuePress

This documentation makes use of [VuePress](https://vuepress.vuejs.org/) for static site generation.

## Diagrams

### [diagrams.net](https://github.com/jgraph/drawio)

diagrams.net is used to create refined SVG diagrams.

These SVGs should only be edited using a diagrams.net editor.

If you are using VS Code, you can take advantage of the [diagrams.net integration plugin](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio).

If you are not using VS Code you can edit diagrams on [diagrams.net iteself](https://www.diagrams.net/), exporting as an SVG.

### [mermaid](https://mermaid-js.github.io/mermaid/#/)

A [VuePress plugin](https://vuepress-plugin-mermaidjs.efrane.com/) allows mermaid diagrams to be included directly in markdown files.

An [online live editor](https://mermaid-js.github.io/mermaid-live-editor/) exists if you wish to easily view and edit mermaid diagrams.
