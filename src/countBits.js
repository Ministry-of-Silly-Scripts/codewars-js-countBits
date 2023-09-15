function countBits(n) {
  let binStr = intToBin(n);
  let sum = 0;
  for (let i in binStr) {
    if (binStr[i] === '1') {
      sum += 1;
    }
  }
  return sum;
}

function intToBin(n) {
  let bin = [];
  let q = n;
  let r = 0;
  do {
    r = q % 2;
    q = Math.floor(q / 2);
    bin.push(r);
  } while (q != 0);

  return bin.reverse().join('');
}

module.exports = { countBits, intToBin };
