#!/usr/bin/env node

import { question } from 'readline-sync';
import gameRound from '../src/index.js';

const gameQuestion = "What is the result of the expression?";

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
    let num1 = getRandomNum();
    let num2 = getRandomNum();
    const operator = getRandomOperator();
    const userAnswer = readlineSync.question(`Question : ${num1} ${operator} ${num2}?`);
    const correctAnswer = calculate(num1, num2, operator);
    
    return gameObject
       //return object with question and correct answer

    
}

export default ( ) => gameRound(gameQuestion, checkCalculation);