#!/usr/bin/env node 

import gameRound from '../src/index.js';
import readlineSync from 'readline-sync';

const gameRules = "What number is missing in the progression?";

const getRandomNum = () => Math.floor(Math.random()* 101);
const getRandomIndexOfArr = (arr) => Math.floor(Math.random() * arr.length);

const generateProgression = () => {
 const arrLength = 10;
 const progression = []; 
 progression[0] = getRandomNum();
 const arrDiff = getRandomNum();

 for(let i = 1; i < arrLength; i++){
    const nextArrElement = progression[i - 1] + arrDiff;
    progression.push(nextArrElement);
 }
 return progression;
}

const checkProgression = () => {
 const progressionArray = generateProgression();
 const randomIndex = getRandomIndexOfArr(progressionArray) ;
 const correctAnswer = progressionArray[randomIndex];
 progressionArray[randomIndex] = '..';
 const progressionArrayStr =  progressionArray.join(' ');

 const userAnswer = readlineSync.question(`Question: ${progressionArrayStr}`);

 return {
   userAnswer: userAnswer,
   correctAnswer: correctAnswer
 };
}

export default gameRound(gameRules, checkProgression);