# utils
utils webpack modules

## 项目



## 运行命令

`npm run dev` 开发模式
`npm run build` 生成可用非压缩文件
`npm run update` 更新当前的 readme 与 package
`npm run test` 测试函数


    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-polyfill": "^6.26.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-stage-0": "^6.24.1",
    "css-loader": "^0.28.7",
    "extract-text-webpack-plugin": "^3.0.2",
    "fs": "0.0.1-security",
    "style-loader": "^0.19.1",
    "stylus": "^0.54.5",
    "stylus-loader": "^3.0.1",
    "url-loader": "^0.6.2",
    "webpack": "^3.10.0",
    "webpack-dev-server": "^2.9.7"


    "plugins": ["transform-runtime"],
  "comments": true
## 指令写错，险些误了大事
指定当前编译依靠的配置文件：
```
--config webpack.config.js
```
    "build": "node ./node_modules/webpack/bin/webpack.js --config webpack.config.js --color --progress -p",


## lib文件夹保存发布的内容


## 包发布/更新

```
npm login

npm publish

更新操作：
修改version，然后npm publish
```
## npm包
　　npm包实际是一个存档文件，即一个目录直接打包为.zip或tar.gz格式的文件，安装后解压还原为目录。完全符合CommonJS规范的包目录应该包含如下这些文件。

　　package.json : 包描述文件。

　　bin: 用于存放可执行二进制文件的目录。

　　lib：用于存放javascript代码的目录。

　　doc：用于存放文档的目录。

　　test: 用于存放单元测试用例的代码。

　　我们开发npm包模块的时候，就可以按照以上目录结构，进行开发。

1. lib目录下存放业务逻辑文件
2. test目录下存放单元测试用例
3. .npmignore记录哪些文件不需要被发布到npmjs.org
4. .travis.yml是持续集成服务travis的描述文件
5. index.js是入口文件
6. makefile方便我们用make test进行测试
7. README.md是此module的描述和使用方法


## 代码构建方式


## test

初始化karma的配置文件
```
$ cd scripts

$ node ../node_modules/karma/bin/karma init

$ npm run test

```

查看测试

```
http://localhost:9877/#
```


## 代码审查eslint

npm i -g eslint

这句命令从 npm 仓库安装了 ESLint CLI。使用以下格式运行 ESLint：

eslint [options] [file|dir|glob]*

eslint file1.js file2.js
