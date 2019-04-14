import getRandomInteger from '../utils';
import gameFlow from '../game-engine';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const getQuestionAndAnswer = () => {
  const number = getRandomInteger(1, 99);

  const rightAnswer = (isPrime(number)) ? 'yes' : 'no';

  const question = `Question: ${number}`;

  return [question, rightAnswer];
};

export default () => gameFlow(description, getQuestionAndAnswer);
