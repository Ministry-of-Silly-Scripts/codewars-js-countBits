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
});
