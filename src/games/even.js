import getRandomInteger from '../utils';
import gameFlow from '../game-engine';

const description = 'Answer "yes" if number even otherwise answer "no".';

export const getQuestionAndAnswer = () => {
  const randomNum = getRandomInteger(1, 99);

  const rightAnswer = (randomNum % 2 === 0) ? 'yes' : 'no';

  const question = `Question: ${randomNum}`;

  return [question, rightAnswer];
};

const game = () => {
  gameFlow(description, getQuestionAndAnswer);
};

export default game;
