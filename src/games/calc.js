import runTheBrainGame from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';

const getDataForCalcGame = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, 2)];
  const [operand1, operand2] = [getRandomNumber(1, 100), getRandomNumber(1, 100)];
  const [oper1ForMulti, oper2ForMulti] = [getRandomNumber(1, 10), getRandomNumber(1, 10)];
  let correctAnswer = null;
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
  const gameData = [question, String(correctAnswer)];
  return gameData;
};

const task = 'What is the result of the expression?';
const calcGame = () => runTheBrainGame(getDataForCalcGame, task);
export default calcGame;
