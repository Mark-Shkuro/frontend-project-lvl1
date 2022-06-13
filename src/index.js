import readlineSync from 'readline-sync';

const logic = (rules, compare) => {
  const welcome = ('Welcome to the Brain Games!');
  console.log(welcome);

  const userName = readlineSync.question('May I have your name? ');
  const greeting = `Hello, ${userName}!`;
  const gratc = `Congratulations, ${userName}!`;
  console.log(greeting);
  console.log(rules);

  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = compare();
    const currentAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (currentAnswer === answer) {
      console.log('Correct!');
    } else return console.log(`'${currentAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
  }
  console.log(gratc);
  return gratc;
};

export default logic;
