# Architecture diagrams

## Generating [mermaidjs](https://github.com/mermaid-js/mermaid) diagrams

Fetch the needed dependencies:

```lang=sh
docker run -it --rm -v "$PWD:/app" -w /app  node:14 npm install
```

Build a container to build the images in:

```lang=sh
docker build -t wikibase-architecture-diagrams .
```

Generate a SVG representation of the mermaid diagram with:


```lang=sh
docker run -it --rm -v "$PWD:/app" wikibase-architecture-diagrams node_modules/.bin/mmdc -i 03-context.mmd -o 03-context.svg
```

If you get a Chrome error `Running as root without --no-sandbox is not supported` you might need to use the `--no-sandbox` option of the Puppeteer:

```lang=sh
docker run -it --rm -v "$PWD:/app" wikibase-architecture-diagrams node_modules/.bin/mmdc -p puppeteer-config.json -i 03-context.mmd -o 03-context.svg
```
