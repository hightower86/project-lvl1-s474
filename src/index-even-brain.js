import readlineSync from 'readline-sync';

const game = () => {
  const name = readlineSync.question('What is your name?  ');
  console.log(`Welcome to the Even-Brain-Game! ${name}\n`);
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  for (let i = 1; i <= 3; i += 1) {
    const num = Math.floor(Math.random(0, 200) * 1000);
    const answer = readlineSync.question(`Question: ${num} \nYour answer: `);
    if ((answer === 'yes' && num % 2 === 0)
      || (answer === 'no' && num % 2 !== 0)) {
      console.log('Correct!');
    }
    if (answer === 'yes' && num % 2 !== 0) {
      console.log(`'yes' is wrong answer ;(. 
      \nCorrect answer was 'no'.
      \nLet's try again, ${name}!`);
      i = 4;
    }
    if (answer === 'no' && num % 2 === 0) {
      console.log(`'no' is wrong answer ;(. 
      \nCorrect answer was 'yes'.
      \nLet's try again, ${name}!`);
      i = 4;
    }
    if (answer !== 'yes' && answer !== 'no') {
      console.log("YOUR ANSWER must be 'yes' or 'no' ! BYE!");
      i = 4;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default game;
