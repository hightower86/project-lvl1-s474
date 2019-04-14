import getRandomInteger from '../utils';
import play from '../game-engine';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const getQuestionAndAnswer = () => {
  const first = getRandomInteger(1, 5);
  const step = getRandomInteger(2, 5);
  const emptyElementPosition = getRandomInteger(2, progressionLength);
  let progression = '';

  for (let i = 0; i <= progressionLength; i += 1) {
    if (i === emptyElementPosition) {
      progression += ' ..';
    } else {
      progression = `${progression} ${first + step * i}`;
    }
  }

  const question = `${progression}`;
  const rightAnswer = String(first + step * emptyElementPosition);

  return [question, rightAnswer];
};

export default () => play(description, getQuestionAndAnswer);
