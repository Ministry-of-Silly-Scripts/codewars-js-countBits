const countBits = require('./countBits');

describe('the countBits canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('hello', () => {
  it('should return hello', () => {
    expect(countBits()).toBe('hello');
  });
});
