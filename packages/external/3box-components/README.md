# 3Box React Components

[![build status](https://img.shields.io/travis/com/KamesCG/3box-components.svg)](https://travis-ci.com/KamesCG/3box-components)
[![code coverage](https://img.shields.io/codecov/c/github/KamesCG/3box-components.svg)](https://codecov.io/gh/KamesCG/3box-components)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/KamesCG/3box-components.svg)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/3box-components.svg)](https://npm.im/3box-components)

The 3Box React Hooks library helps manage frontend interactions with 3Box - decentralized identity storage.



## Table of Contents

* [Overview](#overview)
* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)

```
npm install @kames/3box-components
npm install @kames/3box-hooks
```

The 3box-components automatically read from the global application state provided via the 3box-hooks.

The components generally handle a very specific action connected to a 3Box account.

* Account: Login and Logout
* Data: Get, Set and Delete
* Space: Open and Close
* Thread: Join and Unsubscribe

## Example
```js
import {
  BoxLoginButton, BoxThreadList, BoxQuestPostCreate
} from '@kames/3box-components'

<App>
  <BoxProvider>
    <BoxLoginButton >
    <BoxSpaceManage space='mesh'>
    <BoxThreadList 
      threadAddress='orbitdb/...'
      threadName='mesh'
      variant='blue'
    >
  </BoxProvider>
</App>
```

### Component List

* BoxLoginButton
* BoxLoginProfile
* BoxMemberAdd
* BoxModeratorAdd
* BoxOpenSpace
* BoxProfile
* BoxSpaceCreate
* BoxSpaceList
* BoxSpaceManage
* BoxThreadComment
* BoxThreadCreate
* BoxThreadJoin
* BoxThreadList
* BoxThreadManage
* BoxThreadManageDetails
* BoxThreadManagePeople
* BoxThreadPost
* BoxThreadPostCreate
* BoxThreadPostDelete
* BoxThreadPostList
* BoxThreadPostRetrieve

## Install

[npm][]:

```sh
npm install 3box-components
```

[yarn][]:

```sh
yarn add 3box-components
```


## Usage

```js
const ModuleBoilerplate = require('3box-components');

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
