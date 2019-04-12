import getRandomInteger from '../tools';

export const getQuestionAndAnswer = () => {
  const first = getRandomInteger(1, 5);
  const step = getRandomInteger(2, 5);
  const empty = getRandomInteger(2, 10);
  let progression = '';
  let secretNumber = '';

  const maxNumbers = 10;
  for (let i = 0; i <= maxNumbers; i += 1) {
    if (i === empty) {
      secretNumber = `${first + step * i}`;
      progression += '.. ';
    } else {
      progression = `${progression}${first + step * i} `;
    }
  }

  const question = `Question: ${progression}`;

  return [question, secretNumber];
};

export default getQuestionAndAnswer;
