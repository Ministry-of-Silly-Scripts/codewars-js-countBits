const { countBits, intToBin } = require('./countBits');

describe('the countBits canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('intToBin', () => {
  it('should return 1 for input equal to 1', () => {
    expect(intToBin(1)).toBe('1');
  });

  it('should return "10" for input equal to 2', () => {
    expect(intToBin(2)).toBe('10');
  });
});

describe('countBits', () => {
  it('should return 1 for input equal to 1', () => {
    expect(countBits(1)).toBe(1);
  });
});
