#!/usr/bin/env node
import { evenFunction } from './src/games/even-function.js';
import { engine } from './src/engine.js';

console.log(engine(evenFunction, `Answer "yes" if the number is even, otherwise answer "no"
Question:`));