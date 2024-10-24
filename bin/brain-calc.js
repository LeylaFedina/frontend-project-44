#!/usr/bin/env node

import readlineSync from 'readline-sync';
import gameRound from '../src/index.js';

const gameRules = 'What is the result of the expression?';

const getRandomNum = () => Math.floor(Math.random() * 101);

const operators = ['+', '-', '*'];
const getRandomOperator = () => {
  const operatorIndex = Math.floor(Math.random() * operators.length);
  return operators[operatorIndex];
};

let num1 = getRandomNum();
let num2 = getRandomNum();
let operator = getRandomOperator();

const calculate = () => {
  switch (operator) {
    case ('+'):
      return num1 + num2;
    case ('-'):
      return num1 - num2;
    case ('*'):
      return num1 * num2;
  }
  return;
};

const checkCalculation = () => {
  num1 = getRandomNum();
  num2 = getRandomNum();
  operator = getRandomOperator();
  const userAnswer = readlineSync.question(`Question: ${num1} ${operator} ${num2}`);
  const correctAnswer = calculate(num1, num2, operator);
  return {
    userAnswer,
    correctAnswer,
  };
};
export default gameRound(gameRules, checkCalculation);
