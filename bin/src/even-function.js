/* eslint-env es6 */
import readlineSync from 'readline-sync';


const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const evenFunction = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);

  let counter = 0;
  while (counter < 3) {
    const randomNumber = getRandomNumber(1, 100);
    const answer = readlineSync.question(`Answer "yes" if the number is even, otherwise answer "no". /n Question:${randomNumber}`);
    const parityOfNumber = randomNumber % 2 === 0 ? 'even' : 'add';
    const correctAnswer = parityOfNumber === 'even' ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
      counter += 1;
    } else if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.
        Let's try again, ${name}!`);
      counter = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
