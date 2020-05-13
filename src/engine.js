import readlineSync from './index.js';


const engine = (funcOfGame, textQuestionOfGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);


  let counter = 0;
  while (counter < 3) {
    const questionAndAnswer = funcOfGame(textQuestionOfGame);
    const answer = questionAndAnswer[1];
    const correctAnswer = questionAndAnswer[2];
    const resultOfAnswer = questionAndAnswer[3];
    if (resultOfAnswer === 'Wrong') {
      counter = 0;
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}  
      Let's try again, ${name}!`);
    } else if (resultOfAnswer === 'Correct') {
      counter += 1;
      console.log('Correct!');
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default engine;

// const resultsOfGame = [question, answer, correctAnswer, resultOfAnswer];
