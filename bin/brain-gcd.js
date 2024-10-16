import gameRound from '../src/index.js';


const gameQuestion = "Find the greatest common divisor of given numbers.";

const getRandomNum = () => Math.floor(Math.random()* 101);
let numOne = getRandomNum();
let numTwo = getRandomNum();

const findCommonDivisor = () => {
    const minNum = Math.min(numOne, numTwo);
    for (let i = minNum; i>0; i--){
        if (numOne % i === 0 && numTwo %i ===0) {
            return i;
        }
    }
};

const checkCommonDivision = () => {
    const userAnswer = readlineSync.question(`Question : ${numOne} ${numOne}?`);
    const correctAnswer = findCommonDivisor(numOne, numTwo);
    return correctAnswer;
}

export default () =>  gameRound(gameQuestion, checkCommonDivision);