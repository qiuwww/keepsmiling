# keepsmiling说明

一些常用的函数集合，主要用到的技术如下：

- `ES6`的包处理方式；
- `webpack`打包方式；
- `BDD测试`用例，只写了部分；
- 使用`jsdoc`生成注释文档；
- 你用`eslint`优化代码格式；

主要在于学习相关的技术与在平时的开发中总结一些常用的技巧，当然很多的函数是借用前辈经验。

## 项目运行

### 下载及查看

node 需要 6.0 以上版本。
```
$ https://github.com/moonbreezee/keepsmiling.git

$ cd keepsmiling

$ npm i 或者 yarn

$ npm run dev
```

### 目录说明
```
keepsmiling
  |—— lib // 源文件目录
  |   |—— index.js // 入口文件
  |   |—— *.js // 其他相关文件
  |—— dist // 生成文件目录，modules引用文件
  |—— doc // 生成的jsdoc说明文档，点击index.html可以本地查看
  |—— scripts // 用到的脚本文件及相关配置
  |—— static // index.html本地调试page
  |—— test // 测试用例
```
### 常用命令
```
$ npm run dev 开发模式

$ npm run build 生成可用非压缩文件

$ npm run dep 生成可用压缩文件, 用于部署到npm

$ npm run test 测试函数

$ npm run eslint 测试代码规范
```

## publish操作
需要发布[npm](https://www.npmjs.com)上，需要如下操作:
修改package的version，说明CHANGELOG，然后登录与发布，需要本地执行`$ npm run beforePublish`，提交之后执行。
```
$ npm login
npm publish
```
### npm包说明
npm包实际是一个存档文件，即一个目录直接打包为.zip或tar.gz格式的文件，安装后解压还原为目录。
完全符合CommonJS规范的包目录应该包含如下这些文件:

- package.json : 包描述文件。
- bin: 用于存放可执行二进制文件的目录。
- lib：用于存放javascript代码的目录。
- doc：用于存放文档的目录。
- test: 用于存放单元测试用例的代码。

开发npm包模块的时候，就可以按照以上目录结构，进行开发：

1. lib目录下存放业务逻辑文件
2. test目录下存放单元测试用例
3. .npmignore记录哪些文件不需要被发布到npmjs.org
4. .travis.yml是持续集成服务travis的描述文件
5. index.js是入口文件
6. makefile方便我们用make test进行测试
7. README.md是此module的描述和使用方法

## JSDoc生成文档的说明
- [JSDoc官网文档](https://www.css88.com/doc/jsdoc/index.html)
- [在线预览文档](http://htmlpreview.github.io/?https://github.com/moonbreezee/keepsmiling/blob/master/doc/index.html)

## eslint配置
全局安装`eslint`，然后初始化配置文件，目前使用版本`^4.19`，可以依据需要选择选择修改：
修改的部分规则
```
no-useless-escape 不允许在字符串和正则表达式中使用无意义的换行符
"no-useless-escape": "off",
```

## 单体测试（BDD测试，Behavior Driven Development）

测试脚手架：karam
测试框架：mocha
断言库：power-assert

## 后续说明
后续还要不断的完善
