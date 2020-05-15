
import readlineSync from 'readline-sync';
import engine from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';

const getRandomExpression = () => {
  const dictionaryOfSymbols = {
    1: '-',
    2: '+',
    3: '*',
  };
  const symbol = dictionaryOfSymbols[getRandomNumber(1, 3)];
  const operand1 = getRandomNumber(1, 100);
  const operand2 = getRandomNumber(1, 100);
  const textOfExpAndCorrectAnswer = {
    textOfExpression: 0,
    correctAnswer: 0,
  };

  switch (symbol) {
    case '-':
      textOfExpAndCorrectAnswer.textOfExpression = `${operand1} - ${operand2}`;
      textOfExpAndCorrectAnswer.correctAnswer = operand1 - operand2;
      break;
    case '*':
      textOfExpAndCorrectAnswer.textOfExpression = `${operand1} + ${operand2}`;
      textOfExpAndCorrectAnswer.correctAnswer = operand1 + operand2;
      break;
    case '+':
      textOfExpAndCorrectAnswer.textOfExpression = `${operand1} * ${operand2}`;
      textOfExpAndCorrectAnswer.correctAnswer = operand1 * operand2;
      break;
      // no default
  }
  return Object.values(textOfExpAndCorrectAnswer);
};
const getArrForCalcGame = (textOfQuestion) => {
  const question = getRandomExpression();
  const textOfExpression = question[0];
  const answer = readlineSync.question(`${textOfQuestion}: ${textOfExpression}`);
  const correctAnswer = question[1];
  const resultOfAnswer = Number(correctAnswer) === Number(answer) ? 'Correct' : 'Wrong';
  const resultsOfGame = [correctAnswer, Number(answer), Number(correctAnswer), resultOfAnswer];
  return resultsOfGame;
};

const textQuestionOfCalcGame = `What is the result of the expression?
Question:`;

const calcGame = () => engine(getArrForCalcGame, textQuestionOfCalcGame);

export default calcGame;
