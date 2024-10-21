import readlineSync from 'readline-sync';

const gameRound = (gameRules, configureGame)  => { 
  const rounds = 3;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameRules);

 //let checkEvenReturn = configureGame();
 //console.log(checkEvenReturn);

for (let i = 0; i<rounds; i) {
   const checkEvenReturn = configureGame();

    if (checkEvenReturn.userAnswer === checkEvenReturn.correctAnswer){
        console.log("Correct!");
        i++;
    }
    else{
        console.log(`'${checkEvenReturn.userAnswer}' is wrong answer ;(. 
        Correct answer was '${checkEvenReturn.correctAnswer}'. 
        \nLet's try again ${userName}`);
    }
}
console.log(`Congratulations, ${userName} !`);
};


export default gameRound;