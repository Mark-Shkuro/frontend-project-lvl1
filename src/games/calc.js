import logic from '../index.js';
import getRandom from '../random.js';

const iter = (num1, sign, num2) => {
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

const iterValue = ['+', '-', '*'];

const calc = () => {
  const rule = 'What is the result of the expression?';

  const calcLogic = () => {
    const num1 = getRandom();
    const num2 = getRandom();
    const findOperator = Math.floor(Math.random() * iterValue.length);
    const operator = iterValue[findOperator];
    const question = `${num1} ${operator} ${num2}`;
    const answer = String(iter(num1, operator, num2));
    return [question, answer];
  };
  logic(rule, calcLogic);
};

export default calc;
