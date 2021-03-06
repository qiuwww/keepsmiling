# 发布代码
# 发布流程，在develop且分支发布
git checkout develop
git add *
git commit -m "add all v$1"
git flow release start v$1
# 语法检查
# npm run eslint
# 生成jsdoc
npm run jsdoc
# 生成压缩代码
npm run build
npm run dist
# 登录npm
npm login
npm publish

git add *
git commit -m "add all v$1, publish done"
git tag v$1
git flow release finish v$1
