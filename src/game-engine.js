import readlineSync from 'readline-sync';

const attempts = 3;

const gameFlow = (description, getQuestionAndAnswer) => {
  console.log(`Welcome to the Brain-Games! \n${description}\n`);
  const user = readlineSync.question('What is your name?  ');
  console.log(`Hello, ${user}`);

  for (let i = 1; i <= attempts; i += 1) {
    const [question, rightAnswer] = getQuestionAndAnswer();
    const usersAnswer = readlineSync.question(`${question}\nYour answer: `);

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
