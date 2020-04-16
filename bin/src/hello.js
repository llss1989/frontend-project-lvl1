/* eslint-env es6 */
import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export const hello = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  return `Hello,${name}`;
};
