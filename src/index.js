import readlineSync from 'readline-sync';

const launchGameRound = (gameRules, eachGameFunction) => {
  const maxRoundsCount = 3;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameRules);

  for (let i = 1; i <= maxRoundsCount; i) {
    const oneGameRound = eachGameFunction();
    if (oneGameRound.userAnswer === oneGameRound.correctAnswer) {
      console.log('Correct!');
      i += 1;
      if (i > maxRoundsCount) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`${oneGameRound.userAnswer}' is wrong answer ;(. Correct answer was '${oneGameRound.correctAnswer}'. \nLet's try again, ${userName}!`);
      break;
    }
  }
};
export default launchGameRound;
