
import readlineSync from 'readline-sync';
import { getRandomExpression } from '../index.js';

export const calcFunction = (textOfQuestion) => {
  const question = getRandomExpression();
  const answer = readlineSync.question(`${textOfQuestion}: ${question[0]}`);
  const correctAnswer = question[1];
  const resultOfAnswer = Number(correctAnswer) === Number(answer) ? 'Correct' : 'Wrong';
  const massiveWithResultGame = [question[1], Number(answer), Number(correctAnswer), resultOfAnswer];
  return massiveWithResultGame;
};