<!-- markdownlint-disable MD041 MD033-->
<p align="center">
 <img alt="logo" src="https://raw.githubusercontent.com/swaroopar/inprogress-engineer/main/static/img/icon-light.png" width="75">
</p>
<!-- markdownlint-disable MD041 MD033-->

# In-progress Engineer - Personal Website

This is a personal profile website built using [Docusaurus](https://docusaurus.io/)

## Development

Install all the dependencies with the command below.

```shell
npm install
```

### Local Development

```shell
npm start
```

This command starts a local dev server. It opens a browser window.
Most changes show live, with no restart.

### Build

```shell
npm build
```

This command builds static content into the `build` directory.
Any static host can serve it.

## Deployment

The site deploys automatically from the `main` branch using [Vercel](https://vercel.com).

## Libraries/Tools Used

1. Tailwind Gradient Generator - <https://tailwindcomponents.com/gradient-generator/>
2. Lucide Icons - <https://lucide.dev/icons>
3. Vale Linter - <https://vale.sh/>
4. Emojis - <https://emojipedia.org/>
5. Logos - <https://ui-avatars.com/>
6. Diagrams - <https://excalidraw.com/>

## Run vale linter

To run spell checks and other language rules, run the vale linter with the command below.

```shell
docker run --rm -v $(pwd)/.github/vale/styles:/styles --pull=always --rm -v $(pwd):/docs -w /docs jdkato/vale .
```
