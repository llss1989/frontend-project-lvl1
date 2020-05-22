
import engine from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';


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
    const isDivisorNum1 = num1 % i === 0;
    const isDivisorNum2 = num2 % i === 0;
    if (isDivisorNum1 && isDivisorNum2) {
      correctAnswer = String(i);
      break;
    }
  }
  return [question, correctAnswer, textOfQuestion];
};


const gcdGame = () => engine(getDataForDivisorGame);
export default gcdGame;
