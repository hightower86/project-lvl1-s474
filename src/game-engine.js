import readlineSync from 'readline-sync';

// greeting
const sayHello = (description) => {
  console.log(`Welcome to the Brain-Games! \n${description}\n`);
  const name = readlineSync.question('What is your name?  ');
  console.log(`Hello, ${name}`);
  return name;
};

export const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


const game = (description, askQuestion) => {
  const userName = sayHello(description);
  const attempts = 3;

  for (let i = 1; i <= attempts; i += 1) {
    const answers = askQuestion();
    const textQuestion = answers[0];
    const usersAnswer = readlineSync.question(`${textQuestion}\nYour answer: `);
    const rightAnswer = answers[1];

    if (usersAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${usersAnswer} is wrong answer ;(. 
      \nCorrect answer was ${rightAnswer}.
      \nLet's try again, ${userName}!`);
      break;
    }

    if (i === attempts) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
export default game;
