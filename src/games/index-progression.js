import * as engine from '../game-engine';

export const askQuestion = () => {
  const startNumber = engine.getRndInteger(1, 5);
  const randomStep = engine.getRndInteger(2, 5);
  const randomEmpty = engine.getRndInteger(2, 10);
  let progression = '';
  let secretNumber = 0;
  let nextNumber = startNumber;
  for (let i = 0; i <= 10; i += 1) {
    nextNumber += randomStep;
    if (i === randomEmpty) {
      secretNumber = String(nextNumber);
      progression += '.. ';
    } else {
      progression += `${nextNumber} `;
    }
  }

  const textQuestion = `Question: ${progression}`;

  return [textQuestion, secretNumber];
};

export default askQuestion;
