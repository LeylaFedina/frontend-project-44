import readlineSync from 'readline-sync';
import launchGameRound from '../index.js';
import getRandomNum from '../utility.js';

const gameRules = 'What is the result of the expression?';

const calculate = (num1, num2, operators) => {
  switch (operators) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: ${operators}`);
  }
};

const operators = ['+', '-', '*'];

const getRandomOperator = () => {
  const operatorIndex = getRandomNum(0, operators.length - 1);
  return operators[operatorIndex];
};

const checkCalculation = () => {
  const operator = getRandomOperator();
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const userAnswer = readlineSync.question(`Question: ${num1} ${operator} ${num2}`);
  const correctAnswer = String(calculate(num1, num2, operator));
  return {
    userAnswer,
    correctAnswer,
  };
};
export default () => launchGameRound(gameRules, checkCalculation);
