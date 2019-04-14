import readlineSync from 'readline-sync';

const attemptsCount = 3;

const play = (description, getQuestionAndAnswer) => {
  console.log('\nWelcome to the Brain-Games!');
  console.log(description);
  const user = readlineSync.question('\nMay I have your name?  ');
  console.log(`Hello, ${user}\n`);

  for (let i = 1; i <= attemptsCount; i += 1) {
    const [question, rightAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const usersAnswer = readlineSync.question('Your answer: ');

    if (usersAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${usersAnswer} is wrong answer ;(.`);
      console.log(`Correct answer was ${rightAnswer}`);
      console.log(`\nLet's try again, ${user}!`);
      return;
    }
  }
  console.log(`\nCongratulations, ${user}!`);
};

export default play;
