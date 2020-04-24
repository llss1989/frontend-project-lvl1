#!/usr/bin/env node

import { gcd } from './src/games/gcd.js';
import { engine } from './src/engine.js';

const textOfQuestion = `Find the greatest common divisor of given numbers.
Question: `;
console.log(engine(gcd, textOfQuestion));
