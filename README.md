<p align="center">
 <img src="https://raw.githubusercontent.com/swaroopar/inprogress-engineer/main/static/img/icon-light.png" width="75">
</p>

# In-progress Engineer - Personal Website

This is a personal profile website built using [Docusaurus](https://docusaurus.io/)

## Development

Install all dependencies using the below command.

```shell
npm install
```

### Local Development

```shell
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```shell
npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

This site is deployed automatically from the `main` branch using [Vercel](https://vercel.com).

## Libraries/Tools Used

1. Tailwind Gradient Generator - https://tailwindcomponents.com/gradient-generator/
2. Lucide Icons - https://lucide.dev/icons
3. Vale Linter - https://vale.sh/
4. Emojis - https://emojipedia.org/
5. Logos - https://ui-avatars.com/
6. Diagrams - https://excalidraw.com/

## Run vale linter

To run spell checks and other language rules, run the vale linter using the below command

```shell
docker run --rm -v $(pwd)/.github/vale/styles:/styles --pull=always --rm -v $(pwd):/docs -w /docs jdkato/vale .
```
