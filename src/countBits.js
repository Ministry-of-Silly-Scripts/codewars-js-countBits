function countBits(n) {
  let binStr = n.toString(2);
  let sum = 0;
  for (let i in binStr) {
    if (binStr[i] === '1') {
      sum += 1;
    }
  }
  return sum;
}

module.exports = countBits;
