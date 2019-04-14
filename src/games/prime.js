import getRandomInteger from '../utils';
import play from '../game-engine';

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

const getQuestionAndAnswer = () => {
  const number = getRandomInteger(1, 99);

  const rightAnswer = (isPrime(number)) ? 'yes' : 'no';

  return [number, rightAnswer];
};

export default () => play(description, getQuestionAndAnswer);
