install:
	sudo npm install -g htwr-brain-games
start:
	npx babel-node src/bin/even-brain.js
publish:
	npm publish
lint:
	npx eslint .