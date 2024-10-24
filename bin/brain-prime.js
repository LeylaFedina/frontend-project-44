#!/usr/bin/env node
import readlineSync from 'readline-sync';
import gameRound from '../src/index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomNum = () => Math.floor(Math.random() * 101);

const isPrime = (num) => {
  if (num > 1) {
    for (let i = 2; i < num / 2; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const checkIsPrime = () => {
  const randomNum = getRandomNum();
  const userAnswer = readlineSync.question(`Question: ${randomNum}`);
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  return {
    userAnswer,
    correctAnswer,
  };
};

export default gameRound(gameRules, checkIsPrime);
