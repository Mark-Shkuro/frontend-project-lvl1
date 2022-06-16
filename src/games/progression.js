import logic from '../index.js';
import getRandom from '../random.js';

const generateProgression = () => {
  const arr = [];
  const start = getRandom();
  const step = getRandom();
  arr[0] = start;
  for (let i = 1; i <= 9; i += 1) {
    arr[i] = arr[i - 1] + step;
  }
  return arr;
};

const progressionLogic = () => {
  const arr = generateProgression();
  const replaceIndex = getRandom(1, 9);
  const answer = String(arr[replaceIndex]);
  arr[replaceIndex] = '..';
  const question = arr.join(' ');
  return [question, answer];
};

const progression = () => {
  const rule = 'What number is missing in the progression?';
  logic(rule, progressionLogic);
};

export default progression;
