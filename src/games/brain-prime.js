
import readlineSync from 'readline-sync';
import engine from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';


const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  let i = 2;
  while (i <= num / 2) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const getArrForPrimeGame = (textOfQuestion) => {
  const question = getRandomNumber(1, 100);
  const answer = readlineSync.question(`${textOfQuestion}: ${question}`);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  const resultOfAnswer = answer === correctAnswer ? 'Correct' : 'Wrong';
  const resultsOfGame = [question, answer, correctAnswer, resultOfAnswer];
  return resultsOfGame;
};

const textQuestionOfCalcGame = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const primeGame = () => engine(getArrForPrimeGame, textQuestionOfCalcGame);

export default primeGame;
