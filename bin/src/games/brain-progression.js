import readlineSync from 'readline-sync';
import { getCorrectAnswer, getProgression } from '../index.js';


export const brainProgression = (textOfQuestion) => {
  const question = getProgression();
  const answer = Number(readlineSync.question(`${textOfQuestion}: ${question}`));
  const correctAnswer = getCorrectAnswer(question);
  const resultOfAnswer = answer === correctAnswer ? 'Correct' : 'Wrong';
  const massiveWithResultGame = [question, Number(answer), correctAnswer, resultOfAnswer];
  return massiveWithResultGame;
};
