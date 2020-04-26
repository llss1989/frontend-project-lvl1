#!/usr/bin/env node

import { getArrForDivisorGame } from './src/games/gcd.js';
import { engine } from './src/engine.js';

const textOfQuestion = `Find the greatest common divisor of given numbers.
Question: `;
console.log(engine(getArrForDivisorGame, textOfQuestion));
