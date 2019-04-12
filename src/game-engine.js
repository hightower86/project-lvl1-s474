import readlineSync from 'readline-sync';

const gameFlow = (description, getQuestionAndAnswer) => {
  console.log(`Welcome to the Brain-Games! \n${description}\n`);
  const user = readlineSync.question('What is your name?  ');
  console.log(`Hello, ${user}`);

  const attempts = 3;

  for (let i = 1; i <= attempts; i += 1) {
    const params = getQuestionAndAnswer();
    const question = params[0];
    const usersAnswer = readlineSync.question(`${question}\nYour answer: `);
    const rightAnswer = params[1];

    if (usersAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${usersAnswer} is wrong answer ;(. 
      \nCorrect answer was ${rightAnswer}.
      \nLet's try again, ${user}!`);
      break;
    }

    if (i === attempts) {
      console.log(`Congratulations, ${user}!`);
    }
  }
};
export default gameFlow;
