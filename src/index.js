import readlineSync from 'readline-sync';

const gameRound = (gameRules, configureGame) => {
  const rounds = 3;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameRules);

  for (let i = 0; i < rounds; i) {
    const check = configureGame();
    if (check.userAnswer === String(check.correctAnswer)) {
      console.log('Correct!');
      i += 1;
      if (i > 2) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`${check.userAnswer}' is wrong answer ;(. Correct answer was '${check.correctAnswer}'. \nLet's try again, ${userName}!`);
      break;
    }
  }
};
export default gameRound;
