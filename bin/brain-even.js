#!/usr/bin/env node

import readlineSync from 'readline-sync';
import gameRound from '../src/index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomNum = () => Math.floor(Math.random() * 101);

const isEven = (num) => num % 2 === 0;

const checkEven = () => {
  const num = getRandomNum();
  const userAnswer = readlineSync.question(`Question: ${num}`);
  const correctAnswer = isEven(num) ? 'yes' : 'no';

  return {
    userAnswer,
    correctAnswer,
  };
};
export default gameRound(gameRules, checkEven);
