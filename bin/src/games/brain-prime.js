import readlineSync, { getRandomNumber, isPrime } from '../index.js';


export const getArrForPrimeGame = (textOfQuestion) => {
  const question = getRandomNumber(1, 100);
  const answer = readlineSync.question(`${textOfQuestion}: ${question}`);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  const resultOfAnswer = answer === correctAnswer ? 'Correct' : 'Wrong';
  const massiveWithResultGame = [question, answer, correctAnswer, resultOfAnswer];
  return massiveWithResultGame;
};
