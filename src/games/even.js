/* eslint-env es6 */
import runTheBrainGame from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';

const getDataForEvenGame = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

const task = 'Answer "yes" if the number is even, otherwise answer "no"';
const evenGame = () => runTheBrainGame(getDataForEvenGame, task);
export default evenGame;
