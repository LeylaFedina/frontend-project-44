# Makefile
install: 
npm install ci

#позволит запускать игру без глобальной установки
brain-games:
node bin/brain-games.js

publish:
npm publish --dry-runn

make lint:
npx eslint