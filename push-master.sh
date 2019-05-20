git add *
git commit -m "npm 发布，代码提交"
git push

git checkout master
git merge develop
git push origin master
