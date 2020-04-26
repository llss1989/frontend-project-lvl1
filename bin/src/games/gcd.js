
import readlineSync, { getRandomNumber, getCorrectAnswerForGcd } from '../index.js';


export const getArrForDivisorGame = (textOfQuestion) => {
  const question = [getRandomNumber(1, 100), getRandomNumber(1, 100)];
  const answer = readlineSync.question(`${textOfQuestion}: ${question}`);
  const correctAnswer = getCorrectAnswerForGcd(question);
  const resultOfAnswer = correctAnswer === Number(answer) ? 'Correct' : 'Wrong';
  const massiveWithResultGame = [question, answer, correctAnswer, resultOfAnswer];
  return massiveWithResultGame;
};
