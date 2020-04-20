import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';

const getCorrectAnswerForGcd = (question) => {
  const num1 = question[0];
  const num2 = question[1];
  const smallerNum = num1 > num2 ? num2 : num1;
  for (let i = smallerNum; i > 0; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
  return 1;
};

export const gcd = (textOfQuestion) => {
  const question = [getRandomNumber(1, 100), getRandomNumber(1, 100)];
  const answer = Number(readlineSync.question(`${textOfQuestion}: ${question}`));
  const correctAnswer = getCorrectAnswerForGcd(question);
  const resultOfAnswer = correctAnswer === answer ? 'Correct' : 'Wrong';
  const massiveWithResultGame = [question, answer, correctAnswer, resultOfAnswer];
  return massiveWithResultGame;
};
