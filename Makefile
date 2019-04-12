install:
	npm install htwr-brain-games
start:
	npx babel-node src/bin/brain-gcd.js
publish:
	npm publish
lint:
	npx eslint .
installgsudo:
	sudo npm install -g htwr-brain-games