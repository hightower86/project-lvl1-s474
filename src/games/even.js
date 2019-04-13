import getRandomInteger from '../utils';

export const getQuestionAndAnswer = () => {
  const randomNum = getRandomInteger(1, 99);

  const rightAnswer = (randomNum % 2 === 0) ? 'yes' : 'no';

  const question = `Question: ${randomNum}`;

  return [question, rightAnswer];
};

export default getQuestionAndAnswer;
