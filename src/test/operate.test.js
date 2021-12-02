import operate from '../logic/operate';

describe('operate', () => {
  it('add two numbers', () => {
    expect(operate('1', '2', '+')).toBe('3');
  });

  it('subtract two numbers', () => {
    expect(operate('3', '2', '-')).toBe('1');
  });

  it('multiply two numbers', () => {
    expect(operate('3', '2', 'x')).toBe('6');
  });

  it('divide two numbers', () => {
    expect(operate('6', '2', '÷')).toBe('3');
  });

  it('calculate the percentage', () => {
    expect(operate('2', '100', '%')).toBe('2');
  });
});
