#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandom = () => {
  const num = Math.round(Math.random() * 100);
  return num;
};

const userName = readlineSync.question('May I have your name? ');
const greeting = `Hello, ${userName}!`;

const iter = (num1, sign, num2) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      break;
  }
};

const iterValue = ['+', '-', '*'];

const compare = (num1, num2) => num1 == num2;

const isCalc = () => {
  console.log(greeting);
  const rules = 'What is the result of the expression?';
  const gratc = `Congratulations, ${userName}!`;
  console.log(rules);
  let count = 0;
  for (const item of iterValue) {
    const num1 = getRandom();
    const num2 = getRandom();
    const questionAnswer = readlineSync.question(`Question: ${num1} ${item} ${num2}\nYour answer: `);
    const correctAnswer = iter(num1, item, num2);
    const result = compare(correctAnswer, questionAnswer);
    if (result) {
      count += 1;
      console.log('Correct');
    } else {
      const lose = `'${questionAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}`;
      console.log(lose);
      return lose;
    }
    if (count === 3) console.log(gratc);
  }
  return gratc;
};

isCalc();
