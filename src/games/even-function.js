/* eslint-env es6 */

import readlineSync from '../index.js';
import engine from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';


const getArrForEvenGame = (textOfQuestion) => {
  const question = getRandomNumber(1, 100);
  const answer = readlineSync.question(`${textOfQuestion}:${question}`);
  const parityOfNumber = question % 2 === 0 ? 'even' : 'add';
  const correctAnswer = parityOfNumber === 'even' ? 'yes' : 'no';
  const resultOfAnswer = answer === correctAnswer ? 'Correct' : 'Wrong';
  const resultsOfGame = [question, answer, correctAnswer, resultOfAnswer];
  return resultsOfGame;
};
const questionForBrainEven = `Answer "yes" if the number is even, otherwise answer "no"
Question:`;
const evenGame = () => engine(getArrForEvenGame, questionForBrainEven);
export default evenGame;
