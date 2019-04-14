import getRandomInteger from '../utils';
import play from '../game-engine';

const description = 'Find the greatest common divisor of given numbers.';

const findGCD = (firstNumber, secondNumber) => {
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

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomInteger(1, 99);
  const secondNumber = getRandomInteger(1, 99);
  const rightAnswer = String(findGCD(firstNumber, secondNumber));
  const question = `${firstNumber} ${secondNumber}`;
  return [question, rightAnswer];
};

export default () => play(description, getQuestionAndAnswer);
