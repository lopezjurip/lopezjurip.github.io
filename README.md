# lopezjuri.com

[![dependencies][dependencies-image]][dependencies-url] [![dev-dependencies][dev-dependencies-image]][dev-dependencies-url] [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Professional website built with [GatsbyJS](https://www.gatsbyjs.org/).

## Develop

Clone this repository:

```sh
git clone https://github.com/mrpatiwi/mrpatiwi.github.io.git lopezjuri
cd lopezjuri
```

Install dependencies

```sh
yarn
```

Start at http://localhost:8000 with:

```sh
yarn run dev
```

## Production

Setup enviroment variables:

```text
GOOGLE_TAGMANAGER_ID=GTM-XXXXXXX
```

Then run to create and deploy the `master` branch to Github Pages:

```sh
yarn run deploy
```

[dependencies-image]: https://david-dm.org/mrpatiwi/mrpatiwi.github.io.svg
[dependencies-url]: https://david-dm.org/mrpatiwi/mrpatiwi.github.io
[dev-dependencies-image]: https://david-dm.org/mrpatiwi/mrpatiwi.github.io/dev-status.svg
[dev-dependencies-url]: https://david-dm.org/mrpatiwi/mrpatiwi.github.io#info=devDependencies
