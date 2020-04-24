/* eslint-disable import/extensions */
/* eslint-env es6 */
// eslint-disable-next-line import/prefer-default-export
import readlineSync from 'readline-sync';

export default readlineSync;


export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
export const getRandomExpression = () => {
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


export const findCell = (num) => num === '..';

export const getCorrectAnswer = (progression) => {
  const getIndexNeededNum = progression.findIndex(findCell);
  let answer = 0;
  let step = 0;
  if (getIndexNeededNum === 0) {
    step = progression[2] - progression[1];
    answer = progression[1] - step;
  } else if (getIndexNeededNum === 9) {
    step = progression[8] - progression[7];
    answer = progression[8] + step;
  } else {
    step = (progression[getIndexNeededNum + 1] - progression[getIndexNeededNum - 1]) / 2;
    answer = progression[getIndexNeededNum - 1] + step;
  }
  return answer;
};

export const getProgression = () => {
  const result = [];
  const step = getRandomNumber(1, 11);
  const getHiddenCell = getRandomNumber(0, 10);
  let currentValue = 0;
  for (let i = 0; i < 10; i += 1) {
    if (getHiddenCell === i) {
      currentValue += step;
      result.push('..');
    } else {
      currentValue += step;
      result.push(currentValue);
    }
  }
  return result;
};

export const getCorrectAnswerForGcd = (question) => {
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

export const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  let i = 2;
  while (i <= num / 2) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};
