import readlineSync from 'readline-sync';

const askQuestion = () => {
  const name = readlineSync.question('What is your name?  ');
  console.log(`Welcome to the Brain-Games! ${name}`);
};

export default askQuestion;
