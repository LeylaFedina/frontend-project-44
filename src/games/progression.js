import readlineSync from 'readline-sync';
import launchGameRound from '../index.js';
import getRandomNum from '../utility.js';

const gameRules = 'What number is missing in the progression?';

const getRandomIndexOfArr = (arr) => Math.floor(Math.random() * arr.length);
const generateProgression = (arrLength = 10, start = getRandomNum(), arrStep = getRandomNum()) => {
  const progression = [];
  progression[0] = start;
  for (let i = 1; i < arrLength; i += 1) {
    const nextArrElement = progression[i - 1] + arrStep;
    progression.push(nextArrElement);
  }
  return progression;
};

const checkProgression = () => {
  const progressionArray = generateProgression();
  const randomIndex = getRandomIndexOfArr(progressionArray);
  const correctAnswer = String(progressionArray[randomIndex]);
  progressionArray[randomIndex] = '..';
  const progressionArrayStr = progressionArray.join(' ');
  const userAnswer = readlineSync.question(`Question: ${progressionArrayStr}`);

  return {
    userAnswer,
    correctAnswer,
  };
};

export default () => launchGameRound(gameRules, checkProgression);
