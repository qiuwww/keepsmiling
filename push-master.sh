git checkout develop
git add *
git commit -m "npm 发布，代码提交"
git push origin develop
git checkout master
git merge develop
git push origin master
git checkout develop
