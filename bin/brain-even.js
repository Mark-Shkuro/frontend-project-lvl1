#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandom = () => {
  const num = Math.round(Math.random() * 100);
  return num;
};

const userName = readlineSync.question('May I have your name? ');
const greeting = `Hello, ${userName}!`;

const isEven = (num) => num % 2 === 0;

const isEvenGame = () => {
  console.log(greeting);
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gratc = `Congratulations, ${userName}!`;
  console.log(rules);
  let count = 0;
  for (let i = 1; i <= 3; i += 1) {
    const randomNum = getRandom();
    const questionAnswer = readlineSync.question(`Question: ${randomNum}\nYour answer: `);
    const compareAnswer = isEven(randomNum) ? 'yes' : 'no';
    if (compareAnswer === questionAnswer) count += 1;
    else return console.log(`'${questionAnswer}' is wrong answer ;(. Correct answer was '${compareAnswer}'.`);
    if (count === 3) console.log(gratc);
  }
  return gratc;
};

isEvenGame();
