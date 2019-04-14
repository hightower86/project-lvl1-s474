import getRandomInteger from '../utils';
import play from '../game-engine';

const description = 'What is the result of the expression?';
const operators = '+-*/';

const calcRightAnswer = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    case '/':
      return firstNumber / secondNumber;
    case '+':
      return firstNumber + secondNumber;
    default:
  }
};

const getQuestionAndAnswer = () => {
  const operator = operators[getRandomInteger(0, operators.length - 1)];
  const firstNumber = getRandomInteger(1, 9);
  const secondNumber = getRandomInteger(1, 9);
  const rightAnswer = String(calcRightAnswer(firstNumber, secondNumber, operator));
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  return [question, rightAnswer];
};

export default () => play(description, getQuestionAndAnswer);
