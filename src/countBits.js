function countBits(n) {
  return 1;
}

function intToBin(n) {
  let bin = [];
  let q = n;
  let r = 0;
  do {
    r = q % 2;
    q = Math.floor(q / 2);
    bin.push(r);
    console.log(q, r, bin);
  } while (q != 0);

  return bin.reverse().join('');
}

module.exports = { countBits, intToBin };
