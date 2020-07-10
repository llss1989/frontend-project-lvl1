import readlineSync from 'readline-sync';

const runGame = (getDataGame, task) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);
  let counter = 0;
  const numberOfSuccessfullAttempts = 3;
  while (counter < numberOfSuccessfullAttempts) {
    const [question, correctAnswer] = getDataGame();
    const answerUser = readlineSync.question(`${task} Question: ${question}`);
    if (correctAnswer !== answerUser) {
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${name}!`);
      return;
    } if (correctAnswer === answerUser) {
      counter += 1;
      console.log('Correct!');
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default runGame;
