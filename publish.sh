# 发布流程，在develop且分支发布
git checkout develop
git flow release start $0
git add *
git commit -m "add all $0"
git tag v$0
git checkout master
# 语法检查
# npm run eslint
# 生成jsdoc
npm run jsdoc
# 生成压缩代码
npm run build
npm run dist
# 登录npm
npm login
# moonbreezee
# 发布代码
npm publish
git flow release finish $0
