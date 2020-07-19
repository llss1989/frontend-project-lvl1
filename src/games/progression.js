import runGame from '../engine.js';
import getRandomNumber from '../random.js';

const getProgression = (startingNumber, step, lengthProgression) => {
  const prog = [];

  for (let i = 1; i <= lengthProgression; i += 1) {
    const currentValueOfProgression = startingNumber + i * step;
    prog.push(currentValueOfProgression);
  }
  return prog;
};

const getDataForProgressionGame = () => {
  const stepProgression = getRandomNumber(1, 10);
  const lengthProgression = 10;
  const indexOfHiddenCell = getRandomNumber(0, lengthProgression - 1);
  const valueOfHiddenCell = indexOfHiddenCell + 1;
  const startingNumber = getRandomNumber(0, 10);
  const question = getProgression(startingNumber, stepProgression, lengthProgression);
  const correctAnswer = String(startingNumber + (stepProgression * valueOfHiddenCell));
  question[indexOfHiddenCell] = '..';
  return [question, correctAnswer];
};

const task = 'What number is missing in the progression?';
const progressionGame = () => runGame(getDataForProgressionGame, task);
export default progressionGame;
