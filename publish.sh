echo 清空dist
rm -rf dist/*
echo 复制tap.js
cp  utils/tap.js dist/tap.js
echo 复制package.json
cp package.json dist/package.json
echo 复制README.md
cp README.md dist/README.md
echo 开始发布
cd dist && npm publish && cd .. && rm -rf dist
echo 发布完成
