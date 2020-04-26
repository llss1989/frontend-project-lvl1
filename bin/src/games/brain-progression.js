
import readlineSync, { getCorrectAnswer, getProgression } from '../index.js';


export const getArrForProgressionGame = (textOfQuestion) => {
  const question = getProgression();
  const answer = Number(readlineSync.question(`${textOfQuestion}: ${question}`));
  const correctAnswer = getCorrectAnswer(question);
  const resultOfAnswer = Number(answer) === correctAnswer ? 'Correct' : 'Wrong';
  const massiveWithResultGame = [question, answer, correctAnswer, resultOfAnswer];
  return massiveWithResultGame;
};
