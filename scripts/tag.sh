pnpm changelog

# 新增版本 commit# get new version
VERSION=`node -p "require('./package.json').version"`

git add .
git commit -m "v${VERSION}"
git push

# 打 tag
git tag -a "v${VERSION}"
git push origin "v${VERSION}"