import readlineSync from 'readline-sync';


const gameRound = (gameRules, configureGame)  => { 
  const rounds = 3;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameRules);

for (let i = 0; i<rounds; i++) {
   // const correctAnswer = configureGame();
    let answer = global.userAnswer;
    if (answer === String(global.correctAnswer)){
        console.log("Correct!");
    }
    else{
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${global.correctAnswer}'. \nLet's try again ${userName}`);
    }
}
console.log(`Congratulations, ${userName} !`);
};


export default gameRound();