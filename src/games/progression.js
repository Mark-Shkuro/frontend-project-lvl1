import logic from '../index.js';
import getRandom from '../random.js';

const getReplaceIndex = (min, max) => {
  const ceilMin = Math.ceil(min);
  const ceilmax = Math.floor(max);
  return Math.floor(Math.random() * (ceilmax - ceilMin + 1)) + ceilMin;
};

const progression = () => {
  const rule = 'What number is missing in the progression?';
  const progressionLogic = () => {
    const arr = [];
    const start = getRandom();
    const step = getRandom();
    arr[0] = start;
    for (let i = 1; i <= 9; i += 1) {
      arr[i] = arr[i - 1] + step;
    }
    const replaceIndex = getReplaceIndex(1, 9);
    const answer = String(arr[replaceIndex]);
    arr[replaceIndex] = '..';
    const question = arr.join(' ');
    return [question, answer];
  };
  logic(rule, progressionLogic);
};

export default progression;
