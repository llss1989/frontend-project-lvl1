import runGame from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';

const getDataForCalcGame = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const operand1 = getRandomNumber(1, 100);
  const operand2 = getRandomNumber(1, 100);
  const oper1ForMulti = getRandomNumber(1, 10);
  const oper2ForMulti = getRandomNumber(1, 10);
  let correctAnswer;
  switch (operator) {
    case '-':
      correctAnswer = operand1 - operand2;
      break;
    case '*':
      correctAnswer = oper1ForMulti * oper2ForMulti;
      break;
    case '+':
      correctAnswer = operand1 + operand2;
      break;
      // no default
  }
  const question = operator === '*' ? `${oper1ForMulti} ${operator} ${oper2ForMulti}` : `${operand1} ${operator} ${operand2}`;
  return [question, String(correctAnswer)];
};

const task = 'What is the result of the expression?';
const calcGame = () => runGame(getDataForCalcGame, task);
export default calcGame;
