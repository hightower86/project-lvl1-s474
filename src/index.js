import readlineSync from 'readline-sync';


export const askQuestion = () => {
    const name = readlineSync.question('What is your name?  ');
    console.log(`Welcome to the Brain-Games! ${name}`);
};