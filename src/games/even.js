import getRandomInteger from '../utils';
import play from '../game-engine';

const description = 'Answer "yes" if number even otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const randomNum = getRandomInteger(1, 99);

  const rightAnswer = (randomNum % 2 === 0) ? 'yes' : 'no';

  return [randomNum, rightAnswer];
};

export default () => play(description, getQuestionAndAnswer);
