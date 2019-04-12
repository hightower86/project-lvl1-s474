import * as engine from '../game-engine';

const operations = '+-*/';

const calcRightAnswer = (firstNumber, oper, secondNumber) => {
  switch (oper) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    case '/':
      return firstNumber / secondNumber;
    default:
      return 0;
  }
};

const askQuestion = () => {
  const oper = operations[engine.getRndInteger(0, operations.length - 1)];
  const firstNumber = engine.getRndInteger(1, 9);
  const secondNumber = engine.getRndInteger(1, 9);
  const rightAnswer = String(calcRightAnswer(firstNumber, oper, secondNumber));
  const textQuestion = `Question: ${firstNumber} ${oper} ${secondNumber}`;
  return [textQuestion, rightAnswer];
};

export default askQuestion;
// export const checkAnswer = (rightAnswer, usersAnswer) => {
//   console.log(`User answer is ${usersAnswer}  Good answer ${rightAnswer}`);
// };
