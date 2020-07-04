import runGame from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';

const getProgression = (step, lengthProgression) => {
  const prog = [];
  const size = lengthProgression * step;
  for (let i = 0; i < size; i += step) {
    prog.push(i);
  }
  return prog;
};

const getDataForProgressionGame = () => {
  const stepProg = getRandomNumber(1, 10);
  const lengthProgression = 10;
  const valueHiddenCell = getRandomNumber(0, lengthProgression - 1);
  const question = getProgression(stepProg, lengthProgression);
  const correctAnswer = String(stepProg * valueHiddenCell);
  question[valueHiddenCell] = '..';
  return [question, correctAnswer];
};

const task = 'What number is missing in the progression?';
const progressionGame = () => runGame(getDataForProgressionGame, task);
export default progressionGame;
