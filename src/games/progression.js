import runGame from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';

const getProgression = (step, lengthProgression) => {
  const prog = [];
  let currentValueOfProgression = 0;
  for (let i = 0; i < lengthProgression; i += 1) {
    prog.push(currentValueOfProgression);
    currentValueOfProgression += step;
  }
  return prog;
};

const getDataForProgressionGame = () => {
  const stepProgression = getRandomNumber(1, 10);
  const lengthProgression = 10;
  const valueHiddenCell = getRandomNumber(0, lengthProgression - 1);
  const question = getProgression(stepProgression, lengthProgression);
  const correctAnswer = String(stepProgression * valueHiddenCell);
  question[valueHiddenCell] = '..';
  return [question, correctAnswer];
};

const task = 'What number is missing in the progression?';
const progressionGame = () => runGame(getDataForProgressionGame, task);
export default progressionGame;
