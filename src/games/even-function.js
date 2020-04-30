/* eslint-env es6 */

import readlineSync from '../index.js';
import engine from '../engine.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const getArrForEvenGame = (textOfQuestion) => {
  const question = getRandomNumber(1, 100);
  const answer = readlineSync.question(`${textOfQuestion}:${question}`);
  const parityOfNumber = question % 2 === 0 ? 'even' : 'add';
  const correctAnswer = parityOfNumber === 'even' ? 'yes' : 'no';
  const resultOfAnswer = answer === correctAnswer ? 'Correct' : 'Wrong';
  const massiveWithResultGame = [question, answer, correctAnswer, resultOfAnswer];
  return massiveWithResultGame;
};
const questionForBrainEven = `Answer "yes" if the number is even, otherwise answer "no"
Question:`;
const EvenGame = engine(getArrForEvenGame, questionForBrainEven);
export default EvenGame;
