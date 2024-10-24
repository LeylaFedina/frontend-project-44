#!/usr/bin/env node 
import readlineSync from 'readline-sync';
import gameRound from '../src/index.js';


const gameRules = "Find the greatest common divisor of given numbers.";

const getRandomNum = () => Math.floor(Math.random() * 101);

let numOne = getRandomNum();
let numTwo = getRandomNum();  

const findCommonDivisor = () => {
  const minNum = Math.min(numOne, numTwo);
  for (let i = minNum; i>0; i-1){
    if (numOne % i === 0 && numTwo %i ===0) {
      return i;
    };
  };
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