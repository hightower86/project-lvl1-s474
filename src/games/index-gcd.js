import * as engine from '../game-engine';

const calcRightAnswer = (firstNumber, secondNumber) => {
  if (firstNumber === secondNumber) {
    return firstNumber;
  }
  let bigNum = 0;
  let smallNum = 0;
  if (firstNumber > secondNumber) {
    bigNum = firstNumber;
    smallNum = secondNumber;
  } else {
    bigNum = secondNumber;
    smallNum = firstNumber;
  }
  for (let i = smallNum; i > 0; i -= 1) {
    if (smallNum % i === 0 && bigNum % i === 0) {
      return i;
    }
  }
  return 1;
};

const askQuestion = () => {
  const firstNumber = engine.getRndInteger(1, 99);
  const secondNumber = engine.getRndInteger(1, 99);
  const rightAnswer = String(calcRightAnswer(firstNumber, secondNumber));
  const textQuestion = `Question: ${firstNumber} ${secondNumber}`;
  return [textQuestion, rightAnswer];
};

export default askQuestion;
