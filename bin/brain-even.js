import greeting from '../src/cli.js';
import readlineSync from 'readline-sync';

greeting ();

console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");

const getRandomNum = () => Math.floor(Math.random()* 101);

for (let i = 0; i<=4; i++) {
    const num = getRandomNum();
    const isEven = (num) => num % 2 === 0;
    const correctAnswer = isEven(num) ? 'yes' : 'no';
    
    let userAnswer = readlineSync.question(`Question : ${num}?`);

  if (userAnswer == correctAnswer){
    console.log("Correct!");    
    i++;
    if (i >= 4){
      console.log(`Congratulations, ${global.userName} !`);
    } 
  }
   
  else{
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again ${global.userName}`);
    break;
  }
}

