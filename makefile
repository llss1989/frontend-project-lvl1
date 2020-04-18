install:
	npm install
start:
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint bin
start2:
	node bin/brain-even.js
even:
	node bin/src/even-function.js
engine:
	node bin/src/engine.js
index:
	node bin/src/index.js