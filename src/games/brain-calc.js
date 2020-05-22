
import engine from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';

const getDataForCalcGame = () => {
  const dictionaryOfSymbols = {
    1: '-',
    2: '+',
    3: '*',
  };
  const symbol = dictionaryOfSymbols[getRandomNumber(1, 3)];
  const operand1 = getRandomNumber(1, 100);
  const operand2 = getRandomNumber(1, 100);
  const oper1ForMulti = getRandomNumber(1, 10);
  const oper2ForMulti = getRandomNumber(1, 10);
  const textOfExpAndCorrectAnswer = {
    textOfExpression: 0,
    correctAnswer: 0,
  };

  switch (symbol) {
    case '-':
      textOfExpAndCorrectAnswer.textOfExpression = `${operand1} - ${operand2}`;
      textOfExpAndCorrectAnswer.correctAnswer = String(operand1 - operand2);
      break;
    case '*':
      textOfExpAndCorrectAnswer.textOfExpression = `${oper1ForMulti} * ${oper2ForMulti}`;
      textOfExpAndCorrectAnswer.correctAnswer = String(oper1ForMulti * oper2ForMulti);
      break;
    case '+':
      textOfExpAndCorrectAnswer.textOfExpression = `${operand1} + ${operand2}`;
      textOfExpAndCorrectAnswer.correctAnswer = String(operand1 + operand2);
      break;
      // no default
  }
  return Object.values(textOfExpAndCorrectAnswer);
};

const textQuestionOfCalcGame = `What is the result of the expression?
Question:`;

const calcGame = () => engine(getDataForCalcGame, textQuestionOfCalcGame);

export default calcGame;
