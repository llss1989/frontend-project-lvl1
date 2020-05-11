
import readlineSync from '../index.js';
import engine from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';


const getRandomExpression = () => {
  const symbol = getRandomNumber(1, 4);
  const operand1 = getRandomNumber(1, 100);
  const operand2 = getRandomNumber(1, 100);
  const textOfExpAndCorrectAnswer = [0, 0];

  if (symbol === 1) {
    textOfExpAndCorrectAnswer[0] = `${operand1} - ${operand2}`;
    textOfExpAndCorrectAnswer[1] = operand1 - operand2;
  } else if (symbol === 2) {
    textOfExpAndCorrectAnswer[0] = `${operand1} + ${operand2}`;
    textOfExpAndCorrectAnswer[1] = operand1 + operand2;
  } else if (symbol === 3) {
    textOfExpAndCorrectAnswer[0] = `${operand1} * ${operand2}`;
    textOfExpAndCorrectAnswer[1] = operand1 * operand2;
  }
  return textOfExpAndCorrectAnswer;
};
const getArrForCalcGame = (textOfQuestion) => {
  const question = getRandomExpression();
  const answer = readlineSync.question(`${textOfQuestion}: ${question[0]}`);
  const correctAnswer = question[1];
  const resultOfAnswer = Number(correctAnswer) === Number(answer) ? 'Correct' : 'Wrong';
  const resultsOfGame = [question[1], Number(answer), Number(correctAnswer), resultOfAnswer];
  return resultsOfGame;
};

const textQuestionOfCalcGame = `What is the result of the expression?
Question:`;

const calcGame = () => engine(getArrForCalcGame, textQuestionOfCalcGame);

export default calcGame;
