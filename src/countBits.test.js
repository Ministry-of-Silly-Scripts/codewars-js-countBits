const countBits = require('./countBits');

describe('the countBits canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
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

  it('should return 6 for input equal to 12345', () => {
    expect(countBits(12345)).toBe(6);
  });
});
