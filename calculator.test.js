// FILEPATH: /workspaces/skills-copilot-codespaces-vscode/calculator.test.js
const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('add method should add the given number to the result', () => {
    calculator.add(5);
    expect(calculator.getResult()).toBe(5);
  });

  test('subtract method should subtract the given number from the result', () => {
    calculator.add(10).subtract(5);
    expect(calculator.getResult()).toBe(5);
  });

  test('multiply method should multiply the result by the given number', () => {
    calculator.add(5).multiply(2);
    expect(calculator.getResult()).toBe(10);
  });

  test('divide method should divide the result by the given number', () => {
    calculator.add(10).divide(2);
    expect(calculator.getResult()).toBe(5);
  });

  test('divide method should throw an error when dividing by zero', () => {
    expect(() => {
      calculator.divide(0);
    }).toThrow('Cannot divide by zero');
  });
});