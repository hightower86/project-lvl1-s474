import getRandomInteger from '../tools';

const operations = '+-*/';

const calcRightAnswer = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    case '/':
      return firstNumber / secondNumber;
    default:
      return '+';
  }
};

const getQuestionAndAnswer = () => {
  const operator = operations[getRandomInteger(0, operations.length - 1)];
  const firstNumber = getRandomInteger(1, 9);
  const secondNumber = getRandomInteger(1, 9);
  const rightAnswer = String(calcRightAnswer(firstNumber, secondNumber, operator));
  const question = `Question: ${firstNumber} ${operator} ${secondNumber}`;
  return [question, rightAnswer];
};

export default getQuestionAndAnswer;