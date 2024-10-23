#!/usr/bin/env node 

import gameRound from '../src/index.js';
import readlineSync from 'readline-sync';

const gameRules = "Find the greatest common divisor of given numbers.";

const getRandomNum = () => Math.floor(Math.random()* 101);

let numOne = getRandomNum();
let numTwo = getRandomNum();  

const findCommonDivisor = () => {
    const minNum = Math.min(numOne, numTwo);
    for (let i = minNum; i>0; i--){
        if (numOne % i === 0 && numTwo %i ===0) {
            return i;
        }
        i-= 1;
    }
};

const checkCommonDivision = () => { 
    numOne = getRandomNum();
    numTwo = getRandomNum();  
    let userAnswer = readlineSync.question(`Question: ${numOne} ${numTwo}`);
    let correctAnswer = String(findCommonDivisor(numOne, numTwo));

    return {
        userAnswer: userAnswer,
        correctAnswer: correctAnswer
      };
    }
export default gameRound(gameRules, checkCommonDivision);