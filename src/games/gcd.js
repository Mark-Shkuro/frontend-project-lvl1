import logic from '../index.js';
import getRandom from '../random.js';

const gcd = () => {
  const rule = 'Find the greatest common divisor of given numbers.';

  const iter = (num1, num2) => {
    if (num1 === 0) {
      return num2;
    }
    return iter(num2 % num1, num1);
  };

  const gcdLogic = () => {
    const num1 = getRandom();
    const num2 = getRandom();
    const question = `${num1} ${num2}`;
    const answer = String(iter(num1, num2));
    return [question, answer];
  };
  logic(rule, gcdLogic);
};

export default gcd;
