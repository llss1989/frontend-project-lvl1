/* eslint-env es6 */
import readlineSync from 'readline-sync';


const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);


export const evenFunction = (textOfQuestion) => {
  const question = getRandomNumber(1, 100);
  const answer = readlineSync.question(`${textOfQuestion}:${question}`);
  const parityOfNumber = question % 2 === 0 ? 'even' : 'add';
  const correctAnswer = parityOfNumber === 'even' ? 'yes' : 'no';
  const resultOfAnswer = answer === correctAnswer ? 'Correct' : 'Wrong';
  const massiveWithResultGame = [question, answer, correctAnswer, resultOfAnswer];
  return massiveWithResultGame;
};
