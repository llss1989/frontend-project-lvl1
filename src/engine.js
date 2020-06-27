import readlineSync from 'readline-sync';

const runTheBrainGame = (funcOfGame, task) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);
  let counter = 0;
  const numberOfSuccessfulAttempts = 3;
  while (counter < numberOfSuccessfulAttempts) {
    const [question, correctAnswer] = funcOfGame();
    const answerUser = readlineSync.question(`${task} Question: ${question}`);
    if (correctAnswer !== answerUser) {
      counter = 0;
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${correctAnswer}  
      Let's try again, ${name}!`);
    } else if (correctAnswer === answerUser) {
      counter += 1;
      console.log('Correct!');
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default runTheBrainGame;
