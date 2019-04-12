import getRandomInteger from '../tools';

export const getQuestionAndAnswer = () => {
  const randomNum = getRandomInteger(1, 99);

  const rightAnswer = (randomNum % 2 === 0) ? 'yes' : 'no';

  const textQuestion = `Question: ${randomNum}`;

  return [textQuestion, rightAnswer];
};

export default getQuestionAndAnswer;
