# Architecture diagrams

## [mermaidjs](https://github.com/mermaid-js/mermaid)

You can use this tool for live editing: https://mermaid-js.github.io/mermaid-live-editor

### Generating

Fetch the needed npm dependencies:

```sh
npm install
```

If you don't want to use docker you'll need the mermaid build dependencies too:

```sh
sudo apt-get install -y libnss3 libatk-bridge2.0 libx11-xcb1 libdrm2 libxkbcommon0 libgtk-3-0 libasound2
```

Generate SVGs from diagrams on local system:

```sh
npm run build:diagrams
```

OR build them in a docker container:

```sh
npm run build-docker:diagrams
```
