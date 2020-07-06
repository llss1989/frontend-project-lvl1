import runGame from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';

const getProgression = (step, lengthProgression) => {
  const prog = [];
  let currentValueOfProgression = 0;
  for (let progressionMember = 1; progressionMember < lengthProgression + 1;
    progressionMember += 1) {
    currentValueOfProgression = (progressionMember - 1) * step;
    prog.push(currentValueOfProgression);
  }
  return prog;
};

const getDataForProgressionGame = () => {
  const stepProgression = getRandomNumber(1, 10);
  const lengthProgression = 10;
  const valueHiddenCell = getRandomNumber(1, lengthProgression);
  const question = getProgression(stepProgression, lengthProgression);
  const correctAnswer = String(stepProgression * valueHiddenCell);
  question[valueHiddenCell] = '..';
  return [question, correctAnswer];
};

const task = 'What number is missing in the progression?';
const progressionGame = () => runGame(getDataForProgressionGame, task);
export default progressionGame;
