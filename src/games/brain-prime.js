import readlineSync from '../index.js';
import engine from '../engine.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

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
  const massiveWithResultGame = [question, answer, correctAnswer, resultOfAnswer];
  return massiveWithResultGame;
};

const textQuestionOfCalcGame = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const primeGame = engine(getArrForPrimeGame, textQuestionOfCalcGame);

export default primeGame;
