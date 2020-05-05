---
title: keepsmiling
tags:
  - util
  - test
  - eslint
  - jsdoc
  - webpack
author: https://github.com/moonbreezee
update: 2020-3-8
---

生成自己的 js 工具包，包括打包 webpack、测试 mocha、生成文档 jsdoc、发布 npm 包的操作。

[仓库 github 地址](https://github.com/moonbreezee/keepsmiling.git)

## Installation

Install with npm:

```bash
npm install --save keepsmiling
```

Install with yarn:

```bash
yarn add keepsmiling
```

In Node：

```js
// keepsmiling the full build.
const keepsmiling = require("keepsmiling");
import keepsmiling from "keepsmiling"; // ES6
const keepsmiling = require("keepsmiling"); // CommonJS
```

在页面内直接引用：

```html
<script src="./keepsmiling.min.js"></script>
```

已全局注入`keepsmiling`与`ks`，可直接使用。

## 构建说明

[构建说明](https://github.com/moonbreezee/keepsmiling/blob/master/NOTES.md)

## 主要方法如下

- version
- description
- doc
- debounce
- objectCopyData
- deepClone
- once
- throttle
- arrayMax
- arrayMin
- arrayAverage
- arrayFibonacci
- extendObj
- digitUppercase
- formatPassTime
- formatRemainTime
- thousandsSeparator
- trim
- isUndefined
- isNull
- isNumber
- isBoolean
- isFunction
- isRegExp
- isDate
- isString
- isObject
- isArray
- getQueryString
- getExplore
- getOS
- getScrollPos
- timeTaken
- getRate
- turnToStackoverflow
- parseUrl
- getPrime
- isBrowserEnv
- isEmptyObject
- isEmail
- isIdCard
- isPhoneNum
- isUrl
- isPrime
- isPalindrome
- getKeyName
- randomColor
- randomNum
- setLocalStorage
- getLocalStorage
- removeLocalStorage
- setCookie
- getCookie
- removeCookie
- stringCapitalizeEveryWord

## 查看文档

[jsdoc 生成的文档](https://htmlpreview.github.io/?https://github.com/moonbreezee/keepsmiling/blob/master/doc/index.html)
