import readlineSync from 'readline-sync';
import gameRound from '../index.js';
import getRandomNum from '../exportCode.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

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
export default () => gameRound(gameRules, checkEven);
