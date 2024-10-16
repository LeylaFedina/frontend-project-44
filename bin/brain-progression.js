import gameRound from '../src/index.js';


const gameQuestion = "What number is missing in the progression?";

const getRandomNum = () => Math.floor(Math.random()* 101);
const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

const generateProgression = () => {
 const arrayLength = 10;
 const progression = []; 
 progression[0] = getRandomNum();
 const arrDiff = getRandomNum();

 for(let i = 1; i < arrayLength; i++){
    const nextArrElement = progression[i] + arrDiff;
    array.push(nextArrElement);
 }
 return progression;
}

const checkProgression = () => {
 const progressionArray = generateProgression(progressionArray);
 const randomIndex = getRandomIndex() ;
 const correctAnswer = progressionArray[randomIndex];
 progressionArray[getRandomIndex] = '..';
 const progressionArrayStr =  progressionArray.join(' ';)

 const userAnswer = readlineSync.question(`Question : ${progressionArrayStr}`);

 return correctAnswer;
}

export default gameRound(gameQuestion, checkProgression);