install:
	npm install
start:
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint src
even:
	node bin/brain-even.js
calc:
	node bin/brain-calc-game.js 
gcd:
	node bin/brain-gcd-game.js
progression:
	node bin/brain-progression-game.js
test:
	node src/games/brain-calc.js
proverka:
	node src/engine.js
prime:
	node bin/brain-prime-game.js
