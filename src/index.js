import readlineSync from 'readline-sync';

const gameRound = (gameQuestion, configureGame)  => { 
  const rounds = 3;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameQuestion);

for (let i = 0; i<rounds; i++) {
   const gameKeys = configureGame();
    let answer = readlineSync.question(`{   }`)
    if (answer === String(correctAnswer)){
        console.log("Correct!");
    }
    else{
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${global.correctAnswer}'. \nLet's try again ${userName}`);
    }
}
console.log(`Congratulations, ${userName} !`);
};


export default gameRound();