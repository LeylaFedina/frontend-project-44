import gameRound from '../src/index.js';


const gameRules = "Answer 'yes' if the number is even, otherwise answer 'no'.";

const getRandomNum = () => Math.floor(Math.random()* 101);

const isEven = (num) => num % 2 === 0;

const checkEven = () => {
  const num = getRandomNum();
 global.userAnswer = readlineSync.question(`Question : ${num}?`);
  //console.log(`Question : ${num}?`);
  global.correctAnswer = isEven(num) ? 'yes' : 'no';
  return correctAnswer;
}
export default ( ) => gameRound(gamerules, checkEven());