/* eslint-disable import/extensions */
/* eslint-env es6 */
// eslint-disable-next-line import/prefer-default-export
export { calcFunction } from './games/brain-calc.js';
export { evenFunction } from './games/even-function.js';
export { hello } from './hello.js';
export { engine } from './engine.js';
export { gcd } from './games/gcd.js';


export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
export const getRandomExpression = () => {
  const counterForSymbol = getRandomNumber(1, 4);
  const operand1 = getRandomNumber(1, 100);
  const operand2 = getRandomNumber(1, 100);
  const textOfExpAndCorrectAnswer = [0, 0];

  if (counterForSymbol === 1) {
    textOfExpAndCorrectAnswer[0] = `${operand1} - ${operand2}`;
    textOfExpAndCorrectAnswer[1] = operand1 - operand2;
  } else if (counterForSymbol === 2) {
    textOfExpAndCorrectAnswer[0] = `${operand1} + ${operand2}`;
    textOfExpAndCorrectAnswer[1] = operand1 + operand2;
  } else if (counterForSymbol === 3) {
    textOfExpAndCorrectAnswer[0] = `${operand1} * ${operand2}`;
    textOfExpAndCorrectAnswer[1] = operand1 * operand2;
  }
  return textOfExpAndCorrectAnswer;
};
