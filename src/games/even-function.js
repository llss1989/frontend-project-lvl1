/* eslint-env es6 */

import engine from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';


const getDataForEvenGame = () => {
  const question = getRandomNumber(1, 100);
  const textOfQuestion = `Answer "yes" if the number is even, otherwise answer "no"
Question`;
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer, textOfQuestion];
};

const evenGame = () => engine(getDataForEvenGame);
export default evenGame;
