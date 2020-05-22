
import engine from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';

const isDivisorNum = (n, div) => n % div === 0;
const getDataForDivisorGame = () => {
  const textOfQuestion = `Find the greatest common divisor of given numbers.
  Question: `;
  const question = [getRandomNumber(1, 100), getRandomNumber(1, 100)];
  const num1 = question[0];
  const num2 = question[1];
  const smallerNum = num1 > num2 ? num2 : num1;
  let correctAnswer = 0;
  const beginOfNaturNum = 0;
  for (let i = smallerNum; i >= beginOfNaturNum; i -= 1) {
    if (isDivisorNum(num1, i) && isDivisorNum(num2, i)) {
      correctAnswer = String(i);
      break;
    }
  }
  return [question, correctAnswer, textOfQuestion];
};


const gcdGame = () => engine(getDataForDivisorGame);
export default gcdGame;
