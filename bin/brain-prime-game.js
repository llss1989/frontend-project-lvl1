#!/usr/bin/env node
import { engine } from './src/engine.js';
import { getArrForPrimeGame } from './src/games/brain-prime.js';

const textQuestionOfCalcGame = 'Answer "yes" if given number is prime. Otherwise answer "no"';
console.log(engine(getArrForPrimeGame, textQuestionOfCalcGame));