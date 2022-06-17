import logic from '../index.js';
import getRandom from '../random.js';

const findPrime = (item) => {
  let check = true;
  if (item < 2) return check;
  for (let i = 2; i < item; i += 1) {
    if (item % i === 0) {
      check = false;
      return check;
    } check = true;
  }
  return check;
};

const primeLogic = () => {
  const question = getRandom();
  const answer = findPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const prime = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  logic(rule, primeLogic);
};

export default prime;
