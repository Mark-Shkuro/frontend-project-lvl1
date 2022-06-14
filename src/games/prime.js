import logic from '../index.js';
import getRandom from '../random.js';

const prime = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  const primeLogic = (item) => {
    let check = true;
    for (let i = 2; i < item; i += 1) {
      if (item % i === 0) {
        check = false;
        return check;
      }
    }
    const question = getRandom();
    const answer = primeLogic(`${question}`) ? 'yes' : 'no';
    return [question, answer];
  };
  logic(rule, primeLogic);
};

export default prime;
