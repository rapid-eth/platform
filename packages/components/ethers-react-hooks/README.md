# Ethers React Hooks

[![build status](https://img.shields.io/travis/com/KamesCG/react-context-portal.svg)](https://travis-ci.com/KamesCG/react-context-portal)
[![code coverage](https://img.shields.io/codecov/c/github/KamesCG/react-context-portal.svg)](https://codecov.io/gh/KamesCG/react-context-portal)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/KamesCG/react-context-portal.svg)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/react-context-portal.svg)](https://npm.im/react-context-portal)

The 3Box React Hooks library helps manage frontend interactions with 3Box - decentralized identity storage.

```
npm install @kames/3box-hooks


```

### Example
```js
import { BoxProvider } from '@kames/3box-hooks/dist'

<App>
  <BoxProvider>
    ...
  </BoxProvider>
</App>
```

The package pairs with the `3box-components` library. The design system library hooks into the state system to help manage user logins, connecting to spaces, posting to threads, etc.... 


Add Linting back to package.json
"lint": "xo && remark . -qfo",

## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)


## Install

[npm][]:

```sh
npm install react-context-portal
```

[yarn][]:

```sh
yarn add react-context-portal
```


## Usage

```js
const ModuleBoilerplate = require('react-context-portal');

const moduleBoilerplate = new ModuleBoilerplate();

console.log(moduleBoilerplate.renderName());
// script
```


## Contributors

| Name      | Website                   |
| --------- | ------------------------- |
| **Kames** | <https://www.kamescg.com> |


## License

[MIT](LICENSE) © [Kames](https://www.kamescg.com)


## 

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/
