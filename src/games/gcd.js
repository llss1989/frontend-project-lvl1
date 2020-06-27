import runTheBrainGame from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';

const findGcd = (number1, number2) => {
  let [num1, num2] = [number1, number2];
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  return num1;
};

const getDataForDivisorGame = () => {
  const question = [getRandomNumber(1, 100), getRandomNumber(1, 100)];
  const [num1, num2] = question;
  const correctAnswer = String(findGcd(num1, num2));
  const gameData = [question, correctAnswer];
  return gameData;
};

const task = 'Find the greatest common divisor of given numbers.';
const gcdGame = () => runTheBrainGame(getDataForDivisorGame, task);
export default gcdGame;
