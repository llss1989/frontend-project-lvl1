import runTheBrainGame from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';

const getCleanProg = (step, lengthProg) => {
  const prog = [];
  const size = lengthProg * step;
  for (let i = 0; i < size; i += step) {
    prog.push(i);
  }
  return prog;
};

const getDataForProgressionGame = () => {
  const stepProg = getRandomNumber(1, 10);
  const lengthProg = 10;
  const valueHiddenCell = getRandomNumber(0, lengthProg - 1);
  const question = getCleanProg(stepProg, lengthProg);
  const correctAnswer = String(stepProg * valueHiddenCell);
  question[valueHiddenCell] = '..';
  return [question, correctAnswer];
};

const task = 'What number is missing in the progression?';
const progressionGame = () => runTheBrainGame(getDataForProgressionGame, task);
export default progressionGame;
