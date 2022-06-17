import readlineSync from 'readline-sync';

const logic = (rules, generate) => {
  const welcome = ('Welcome to the Brain Games!');
  console.log(welcome);

  const userName = readlineSync.question('May I have your name? ');
  const greeting = `Hello, ${userName}!`;
  const gratc = `Congratulations, ${userName}!`;
  console.log(greeting);
  console.log(rules);
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generate();
    const currentAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (currentAnswer !== answer) {
      console.log(`'${currentAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
      return;
    } console.log('Correct!');
  }
  console.log(gratc);
};

export default logic;
