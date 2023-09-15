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

  it('should return "11000000111001" for input equal to 12345', () => {
    expect(intToBin(12345)).toBe('11000000111001');
  });
});

describe('countBits', () => {
  it('should return 1 for input equal to 1', () => {
    expect(countBits(1)).toBe(1);
  });

  it('should return 1 for input equal to 2', () => {
    expect(countBits(1)).toBe(1);
  });

  it('should return 2 for input equal to 10', () => {
    expect(countBits(10)).toBe(2);
  });
});
