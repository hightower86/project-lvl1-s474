import getRandomInteger from '../utils';
import gameFlow from '../game-engine';

const description = 'What number is missing in the progression?';

export const getQuestionAndAnswer = () => {
  const first = getRandomInteger(1, 5);
  const step = getRandomInteger(2, 5);
  const progressionLength = 10;
  const emptyElementPosition = getRandomInteger(2, progressionLength);
  let progression = '';
  let secretNumber = 0;

  for (let i = 0; i <= progressionLength; i += 1) {
    if (i === emptyElementPosition) {
      secretNumber = first + step * i;
      progression += ' ..';
    } else {
      progression = `${progression} ${first + step * i}`;
    }
  }

  const question = `Question: ${progression}`;
  const rightAnswer = String(secretNumber);

  return [question, rightAnswer];
};

const game = () => {
  gameFlow(description, getQuestionAndAnswer);
};

export default game;
