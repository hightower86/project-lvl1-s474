install:
	npm install htwr-brain-games
start:
	npx babel-node src/bin/calculator.js
publish:
	npm publish
lint:
	npx eslint .