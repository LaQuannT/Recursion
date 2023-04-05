const fibsRec = (num, seq = [0, 1]) => {
  if (seq.length >= num) return seq;
  return fibsRec(num, [...seq, seq[seq.length - 1] + seq[seq.length - 2]]);
};

console.log(fibsRec(8));
