import logic from '../index.js';
import getRandom from '../random.js';

const isEven = (num) => num % 2 === 0;

const evenLogic = () => {
  const num = getRandom();
  const question = num;
  const answer = (isEven(num) ? 'yes' : 'no');
  return [question, answer];
};

const even = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  logic(rule, evenLogic);
};

export default even;
