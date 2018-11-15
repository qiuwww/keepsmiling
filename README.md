# keepsmiling

utils webpack modules

## 运行命令

```
npm install 

npm run dev 开发模式

npm run build 生成可用非压缩文件

npm run update 更新当前的 readme 与 package

npm run test 测试函数
```

## lib

源文件目录（还需要整理）

分类整理，统一引用

## dist

保存生成的文件

## scripts

保存当前的脚本

## static

开发过程中需要用到的静态文件

## test

测试用例目录

查看测试：

```
http://localhost:9877/#
```

## 代码审查eslint

```
npm run eslint
```

## 包发布/更新

www.npmjs.com

```
npm login

npm publish

更新操作： 修改version，然后npm publish
```
## npm包
npm包实际是一个存档文件，即一个目录直接打包为.zip或tar.gz格式的文件，安装后解压还原为目录。

完全符合CommonJS规范的包目录应该包含如下这些文件:

- package.json : 包描述文件。
- bin: 用于存放可执行二进制文件的目录。
- lib：用于存放javascript代码的目录。
- doc：用于存放文档的目录。
- test: 用于存放单元测试用例的代码。

### 我们开发npm包模块的时候，就可以按照以上目录结构，进行开发。

1. lib目录下存放业务逻辑文件
2. test目录下存放单元测试用例
3. .npmignore记录哪些文件不需要被发布到npmjs.org
4. .travis.yml是持续集成服务travis的描述文件
5. index.js是入口文件
6. makefile方便我们用make test进行测试
7. README.md是此module的描述和使用方法

## 包地址
https://www.npmjs.com/package/keepsmiling

## 单个函数 需要包括如下
1. 函数注释
2. 关键点的说明
3. 使用举例，写在test内

## 开发过程说明  blog

## JSDoc生成文档的操作
JSDoc官网：https://www.css88.com/doc/jsdoc/index.html
jsdoc的配置文档的地址：https://www.css88.com/doc/jsdoc/about-configuring-jsdoc.html
生成文档的线上访问地址：http://htmlpreview.github.io/?https://github.com/moonbreezee/keepsmiling/blob/master/docs/index.html


## eslint配置
### 规则
```
no-useless-escape 不允许在字符串和正则表达式中使用无意义的换行符
"no-useless-escape": "off",
```

## test（BDD测试，Behavior Driven Development）
测试脚手架：karam 
测试框架：mocha
断言库：power-assert

### 断言语法
1. 如下判断第一个参数是否为真，`assert`与`assert.ok`一个意思，后边的信息是在第一个参数为假的时候展示的。
```
assert(keepsmiling.isEmptyObject({}) == false, 'THIS IS AN ASSERTION MESSAGE');
```
2. 需要判断为false，就使用
