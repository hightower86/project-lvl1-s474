import * as engine from '../game-engine';

export const askQuestion = () => {
  const randomNum = engine.getRndInteger(1, 99);

  const rightAnswer = (randomNum % 2 === 0) ? 'yes' : 'no';

  const textQuestion = `Question: ${randomNum}`;

  return [textQuestion, rightAnswer];
};

export default askQuestion;
