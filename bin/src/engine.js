import readlineSync from './index.js';


export const engine = (funcOfGame, textQuestionOfGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);

  let counter = 0;
  while (counter < 3) {
    const questionAndAnswer = funcOfGame(textQuestionOfGame);
    if (questionAndAnswer[3] === 'Wrong') {
      counter = 0;
      console.log(`${questionAndAnswer[1]} is wrong answer ;(. Correct answer was ${questionAndAnswer[2]}  
      Let's try again, ${name}!`);
    } else if (questionAndAnswer[3] === 'Correct') {
      counter += 1;
      console.log('Correct!');
    }
  }
  console.log(`Congratulations, ${name}!`);
};
