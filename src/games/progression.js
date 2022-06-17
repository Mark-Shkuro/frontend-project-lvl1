import logic from '../index.js';
import getRandom from '../random.js';

const generateProgression = (firstItem, step, arrLength) => {
  const arr = [];
  const boundaryValue = arrLength * step;
  for (let i = firstItem; i <= boundaryValue; i += step) {
    arr.push(i);
  }
  return arr;
};

const progressionLogic = () => {
  const step = getRandom();
  const start = getRandom(0, step);
  const progressionLength = 10;
  const arr = generateProgression(start, step, progressionLength);
  const replaceIndex = getRandom(1, progressionLength - 1);
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
