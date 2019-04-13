import getRandomInteger from '../utils';

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const getQuestionAndAnswer = () => {
  const randomNum = getRandomInteger(1, 99);

  const rightAnswer = (isPrime(randomNum)) ? 'yes' : 'no';

  const question = `Question: ${randomNum}`;

  return [question, rightAnswer];
};

export default getQuestionAndAnswer;
