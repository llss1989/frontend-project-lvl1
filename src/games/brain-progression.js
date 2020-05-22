
import engine from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';

const getCleanProg = (start, step, lengthProg) => {
  const prog = [];
  let currCell = start;
  for (let i = 0; i <= lengthProg; i += 1) {
    currCell += step;
    prog.push(currCell);
  }
  return prog;
};

const getDataForProgressionGame = () => {
  const startProg = getRandomNumber(1, 10);
  const stepProg = getRandomNumber(1, 10);
  const valueHiddenCell = getRandomNumber(0, 9);
  const valueHidCellForMathOper = valueHiddenCell + 1;
  const lengthProg = 9;
  const progression = getCleanProg(startProg, stepProg, lengthProg);
  const correctAnswer = String(startProg + stepProg * (valueHidCellForMathOper));
  progression[valueHiddenCell] = '..';
  return [progression, correctAnswer];
};

const questionForBrainProgression = `What number is missing in the progression?
Question:`;
const progressionGame = () => engine(getDataForProgressionGame, questionForBrainProgression);
export default progressionGame;
