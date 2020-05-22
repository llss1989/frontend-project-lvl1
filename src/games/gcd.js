
import engine from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';


const getDataForDivisorGame = () => {
  const question = [getRandomNumber(1, 100), getRandomNumber(1, 100)];
  const num1 = question[0];
  const num2 = question[1];
  const smallerNum = num1 > num2 ? num2 : num1;
  let correctAnswer = 0;
  for (let i = smallerNum; i > 0; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      correctAnswer = String(i);
      break;
    }
  }
  return [question, correctAnswer];
};


const questionForGcdGame = `Find the greatest common divisor of given numbers.
Question: `;
const gcdGame = () => engine(getDataForDivisorGame, questionForGcdGame);
export default gcdGame;
