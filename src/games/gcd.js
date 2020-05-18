
import readlineSync from 'readline-sync';
import engine from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';


const getCorrectAnswerForGcd = (question) => {
  const num1 = question[0];
  const num2 = question[1];
  const smallerNum = num1 > num2 ? num2 : num1;
  for (let i = smallerNum; i > 0; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
  return 1;
};

const getArrForDivisorGame = (textOfQuestion) => {
  const question = [getRandomNumber(1, 100), getRandomNumber(1, 100)];
  const answer = readlineSync.question(`${textOfQuestion}: ${question}`);
  const correctAnswer = getCorrectAnswerForGcd(question);
  const resultOfAnswer = correctAnswer === Number(answer) ? 'Correct' : 'Wrong';
  const resultsOfGame = [question, answer, correctAnswer, resultOfAnswer];
  return resultsOfGame;
};

const questionForGcdGame = `Find the greatest common divisor of given numbers.
Question: `;
const gcdGame = () => engine(getArrForDivisorGame, questionForGcdGame);
export default gcdGame;
