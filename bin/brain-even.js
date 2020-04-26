#!/usr/bin/env node
import { getArrForEvenGame } from './src/games/even-function.js';
import { engine } from './src/engine.js';

console.log(engine(getArrForEvenGame, `Answer "yes" if the number is even, otherwise answer "no"
Question:`));