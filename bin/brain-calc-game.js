#!/usr/bin/env node
import { engine, calcFunction } from './src/index.js';

const textQuestionOfCalcGame = `What is the result of the expression?
Question:`;
console.log(engine(calcFunction, textQuestionOfCalcGame));