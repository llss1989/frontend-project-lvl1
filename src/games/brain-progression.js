
import readlineSync from '../index.js';
import engine from '../engine.js';
import getRandomNumber from '../getRandomNumber.js';


const getProgression = () => {
  const dirtyProg = [];
  const cleanProg = [];
  const step = getRandomNumber(1, 10);
  const getHiddenCell = getRandomNumber(0, 9);
  let currentValue = 0;
  for (let i = 0; i < 10; i += 1) {
    if (getHiddenCell === i) {
      currentValue += step;
      dirtyProg.push('..');
      cleanProg.push(currentValue);
    } else {
      currentValue += step;
      dirtyProg.push(currentValue);
      cleanProg.push(currentValue);
    }
  }
  return [dirtyProg, cleanProg];
};

const getCorrectAnswer = (progressions) => {
  const cleanProg = progressions[1];
  const dirtyProg = progressions[0];
  const diff = cleanProg[2] - cleanProg[1];
  const size = cleanProg.length;
  for (let i = 0; i < size; i += 1) {
    if (dirtyProg[i] === '..') {
      const start = cleanProg[0];
      return start + diff * i;
    }
  }
};

const getArrForProgressionGame = (textOfQuestion) => {
  const progressions = getProgression();
  const dirtyProg = progressions[0];
  const answer = Number(readlineSync.question(`${textOfQuestion}: ${dirtyProg}`));
  const correctAnswer = getCorrectAnswer(progressions);
  const resultOfAnswer = Number(answer) === correctAnswer ? 'Correct' : 'Wrong';
  const resultsOfGame = [dirtyProg, answer, correctAnswer, resultOfAnswer];
  return resultsOfGame;
};

const questionForBrainProgression = `What number is missing in the progression?
Question:`;
const progressionGame = () => engine(getArrForProgressionGame, questionForBrainProgression);
export default progressionGame;
