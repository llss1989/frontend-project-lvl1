install:
	npm install
start:
	node bin/hello.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
even:
	node bin/even.js
calc:
	node bin/calc-game.js 
gcd:
	node bin/gcd-game.js
progression:
	node bin/progression-game.js
test:
	node src/games/calc.js
proverka:
	node src/engine.js
prime:
	node bin/prime-game.js
