function countBits(n) {
  let binStr = n.toString(2);
  let count = binStr.split('').filter((x) => x == 1).length;
  return count;
}

module.exports = countBits;
