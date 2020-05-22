
import engine from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';

const getDataForCalcGame = () => {
  const textOfQuestion = `What is the result of the expression?
  Question`;
  const dictionaryOfSymbols = ['+', '-', '*'];
  const symbol = dictionaryOfSymbols[getRandomNumber(0, 2)];
  const operand1 = getRandomNumber(1, 100);
  const operand2 = getRandomNumber(1, 100);
  const oper1ForMulti = getRandomNumber(1, 10);
  const oper2ForMulti = getRandomNumber(1, 10);
  let correctAnswer = '0';

  switch (symbol) {
    case '-':
      correctAnswer = String(operand1 - operand2);
      break;
    case '*':
      correctAnswer = String(oper1ForMulti * oper2ForMulti);
      break;
    case '+':
      correctAnswer = String(operand1 + operand2);
      break;
      // no default
  }
  const textOfExpression = symbol === '*' ? `${oper1ForMulti} ${symbol} ${oper2ForMulti}` : `${operand1} ${symbol} ${operand2}`;
  return [textOfExpression, correctAnswer, textOfQuestion];
};


const calcGame = () => engine(getDataForCalcGame);

export default calcGame;
