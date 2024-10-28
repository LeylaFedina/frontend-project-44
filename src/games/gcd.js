import readlineSync from 'readline-sync';
import gameRound from '../index.js';
import getRandomNum from '../exportCode.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const findCommonDivisor = (numOne, numTwo) => {
  const minNum = Math.min(numOne, numTwo);
  for (let i = minNum; i > 0; i -= 1) {
    if (numOne % i === 0 && numTwo % i === 0) {
      return i;
    }
  }
  return 0;
};

const checkCommonDivision = () => {
  const numOne = getRandomNum();
  const numTwo = getRandomNum();
  const userAnswer = readlineSync.question(`Question: ${numOne} ${numTwo}`);
  const correctAnswer = String(findCommonDivisor(numOne, numTwo));
  return {
    userAnswer,
    correctAnswer,
  };
};
export default () => gameRound(gameRules, checkCommonDivision);
