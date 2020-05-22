/* eslint-env es6 */

import readlineSync from 'readline-sync';
import engine from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';


const getDataForEvenGame = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  const resultsOfGame = [question, correctAnswer];
  return resultsOfGame;
};
const questionForBrainEven = `Answer "yes" if the number is even, otherwise answer "no"
Question`;
const evenGame = () => engine(getDataForEvenGame, questionForBrainEven);
export default evenGame;
