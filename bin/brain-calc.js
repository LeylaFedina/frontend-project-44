import gameRound from '../src/index.js';
import readlineSync from 'readline-sync';



const gameRules = "What is the result of the expression?";

const getRandomNum = () => Math.floor(Math.random()* 101);
let num1 = getRandomNum();
let num2 = getRandomNum();


const operators = ['+', '-', '*'];
const getRandomOperator = () => {
   const operatorIndex = Math.floor(Math.random() * operators.length);
   return operators[operatorIndex];
}

const operator = getRandomOperator();

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

function checkCalsulation (num1, num2, operator){

    const userAnswer = readlineSync.question(`Question : ${num}1 ${operator} ${num2}?`);
    const correctAnswer = calculate(num1, num2, operator);
    return correctAnswer;
}

export default ( ) => gameRound(gamerules, checkCalsulation());