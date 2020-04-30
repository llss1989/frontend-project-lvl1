
import readlineSync from '../index.js';
import engine from '../engine.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const findCell = (num) => num === '..';

const getProgression = () => {
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

const getCorrectAnswer = (progression) => {
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

const getArrForProgressionGame = (textOfQuestion) => {
  const question = getProgression();
  const answer = Number(readlineSync.question(`${textOfQuestion}: ${question}`));
  const correctAnswer = getCorrectAnswer(question);
  const resultOfAnswer = Number(answer) === correctAnswer ? 'Correct' : 'Wrong';
  const massiveWithResultGame = [question, answer, correctAnswer, resultOfAnswer];
  return massiveWithResultGame;
};

const questionForBrainProgression = `What number is missing in the progression?
Question:`;
const progressionGame = engine(getArrForProgressionGame, questionForBrainProgression);
export default progressionGame;
