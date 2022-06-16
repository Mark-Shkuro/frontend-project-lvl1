const getRandom = (min = 0, max = 100) => {
  const ceilMin = Math.ceil(min);
  const ceilMax = Math.floor(max);
  return Math.floor(Math.random() * (ceilMax - ceilMin + 1) + ceilMin);
};

export default getRandom;
