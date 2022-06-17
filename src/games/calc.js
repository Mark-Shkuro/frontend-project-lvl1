import logic from '../index.js';
import getRandom from '../random.js';

const calculate = (num1, sign, num2) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return NaN;
  }
};

const operators = ['+', '-', '*'];

const calcLogic = () => {
  const num1 = getRandom();
  const num2 = getRandom();
  const findOperator = getRandom(0, operators.length - 1);
  const operator = operators[findOperator];
  const question = `${num1} ${operator} ${num2}`;
  const answer = String(calculate(num1, operator, num2));
  return [question, answer];
};

const calc = () => {
  const rule = 'What is the result of the expression?';
  logic(rule, calcLogic);
};

export default calc;
