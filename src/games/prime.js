import readlineSync from 'readline-sync';
import launchGameRound from '../index.js';
import getRandomNum from '../utility.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

export default () => launchGameRound(gameRules, checkIsPrime);
