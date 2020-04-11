import readlineSync from 'readline-sync';

export const hello = () => {  
  const name = readlineSync.question('May I have your name?');
  return `Hello,${name}`
}; 


