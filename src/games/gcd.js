import runGame from '../engine.js';
import getRandomNumber from '../random.js';

const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
};

const getDataForDivisorGame = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const correctAnswer = String(findGcd(num1, num2));
  const question = `${num1}, ${num2}`;
  return [question, correctAnswer];
};

const task = 'Find the greatest common divisor of given numbers.';
const gcdGame = () => runGame(getDataForDivisorGame, task);
export default gcdGame;
