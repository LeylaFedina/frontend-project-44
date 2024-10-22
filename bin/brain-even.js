import gameRound from '../src/index.js';
import readlineSync from 'readline-sync';

const gameRules = "Answer 'yes' if the number is even, otherwise answer 'no'.";

const getRandomNum = () => Math.floor(Math.random()* 101);

const isEven = (num) => num % 2 === 0;

const checkEven = () => {
  const num = getRandomNum();
  let userAnswer = readlineSync.question(`Question : ${num}?`);
  let correctAnswer = isEven(num) ? 'yes' : 'no';

  return {
    userAnswer: userAnswer,
    correctAnswer: correctAnswer
  };
}
export default gameRound(gameRules, checkEven);