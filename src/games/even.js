import logic from '../index.js';
import getRandom from '../random.js';

const isEven = (num) => num % 2 === 0;

const even = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

  const evenLogic = () => {
    const num = getRandom();
    const question = num;
    const answer = (isEven(num) ? 'yes' : 'no');
    return [question, answer];
  };
  logic(rule, evenLogic);
};

export default even;
