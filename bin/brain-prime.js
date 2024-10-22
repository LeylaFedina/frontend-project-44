import readlineSync from 'readline-sync';
import gameRound from '../src/index.js';

const gameRules = '"yes" if given number is prime. Otherwise answer "no".';

const getRandomNum = () => Math.floor(Math.random()* 101);

const isPrime = () => {
    const num = getRandomNum();
    if (num > 1){
        for (let i = 2; i < num / 2; i++ ){
            if (num % i === 0){
                return false;
            }
        }
        return true;
    }
    return true;
}

const checkIsPrime = () => {
    const randomNum = getRandomNum();
    const userAnswer = readlineSync.question(`Question : ${randomNum}?`);
    const correctAnswer = isPrime(randomNum) ? 'yes' : 'no' ;
    return {
        userAnswer: userAnswer,
        correctAnswer: correctAnswer
      };    
}

export default gameRound(gameRules, checkIsPrime);

