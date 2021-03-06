import getRandomInteger from '../utils';
import play from '../game-engine';

const description = 'What is the result of the expression?';
const operators = '+-*/';

const calcRightAnswer = (firstNumber, secondNumber, operator) => {
  let correctAnswer = 0;
  switch (operator) {
    case '-':
      correctAnswer = firstNumber - secondNumber;
      break;
    case '*':
      correctAnswer = firstNumber * secondNumber;
      break;
    case '/':
      correctAnswer = firstNumber / secondNumber;
      break;
    case '+':
      correctAnswer = firstNumber + secondNumber;
      break;
    default:
  }
  return correctAnswer;
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
