const fibs = (num) => {
  const seq = [0, 1];
  if (num < 2) return 0;
  for (let i = 2; i < num; i++) {
    seq[i] = seq[i - 1] + seq[i - 2];
  }
  return seq;
};

console.log(...fibs(8));
