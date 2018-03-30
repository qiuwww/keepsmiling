# utils
utils webpack modules


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
## 指令写错，先写误了大事
指定当前编译依靠的配置文件：
```
--config webpack.config.js
```
    "build": "node ./node_modules/webpack/bin/webpack.js --config webpack.config.js --color --progress -p",
