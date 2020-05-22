import readlineSync from 'readline-sync';


const engine = (funcOfGame, textQuestionOfGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);


  let counter = 0;
  while (counter < 3) {
    const questionAndAnswer = funcOfGame();
    const question = questionAndAnswer[0];
    const correctAnswer = questionAndAnswer[1];
    const answerUser = readlineSync.question(`${textQuestionOfGame}: ${question}`);
    // const resultOfAnswer = questionAndAnswer[3];
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
export default engine;

// const resultsOfGame = [question, answer, correctAnswer, resultOfAnswer];
