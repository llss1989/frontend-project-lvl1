#!/usr/bin/env node
import { engine } from './src/engine.js';
import { getArrForCalcGame } from './src/games/brain-calc.js';

const textQuestionOfCalcGame = `What is the result of the expression?
Question:`;
console.log(engine(getArrForCalcGame, textQuestionOfCalcGame));