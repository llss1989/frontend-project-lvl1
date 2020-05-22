
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

const getDataForPrime = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  const resultsOfGame = [question, correctAnswer];
  return resultsOfGame;
};

const textQuestionOfPrimeGame = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const primeGame = () => engine(getDataForPrime, textQuestionOfPrimeGame);

export default primeGame;
