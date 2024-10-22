import readlineSync from 'readline-sync';
import gameRound from '../src/index.js';

const gameRules = "What is the result of the expression?";

const getRandomNum = () => Math.floor(Math.random()* 101);

const operators = ['+', '-', '*'];
const getRandomOperator = () => {
   const operatorIndex = Math.floor(Math.random() * operators.length);
   return operators[operatorIndex];
}

function calculate (num1, num2, operator){
    switch (operator){
        case('+'):
        return num1 + num2;
        case('-'):
        return num1 - num2;
        case('*'):
        return num1 * num2;
    }
}

function checkCalculation (num1, num2, operator){
    num1 = getRandomNum();
    num2 = getRandomNum();
    operator = getRandomOperator();
    let userAnswer = readlineSync.question(`Question : ${num1} ${operator} ${num2}?`);
    let correctAnswer = calculate(num1, num2, operator);
    
    return {
        userAnswer: userAnswer,
        correctAnswer: correctAnswer
      };    
}

export default gameRound(gameRules, checkCalculation);