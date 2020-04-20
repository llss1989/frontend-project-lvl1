install:
	npm install
start:
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint bin
even:
	node bin/brain-even.js
calc:
	node bin/brain-calc-game.js 
gcd:
	node bin/brain-gcd-game.js