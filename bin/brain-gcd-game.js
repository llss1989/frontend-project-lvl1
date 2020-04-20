#!/usr/bin/env node

import { engine, gcd } from './src/index.js';

const textOfQuestion = `Find the greatest common divisor of given numbers.
Question: `;
console.log(engine(gcd, textOfQuestion));
