// FILEPATH: /workspaces/skills-copilot-codespaces-vscode/test.test.js

const Calculator = require('./test');

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
    calculator.add(10);
    calculator.subtract(5);
    expect(calculator.getResult()).toBe(5);
  });

  test('multiply method should multiply the result by the given number', () => {
    calculator.add(5);
    calculator.multiply(2);
    expect(calculator.getResult()).toBe(10);
  });

  test('divide method should divide the result by the given number', () => {
    calculator.add(10);
    calculator.divide(2);
    expect(calculator.getResult()).toBe(5);
  });

  test('divide method should throw an error when trying to divide by zero', () => {
    calculator.add(10);
    expect(() => calculator.divide(0)).toThrow("Cannot divide by zero");
  });

  test('getResult method should return the current result', () => {
    expect(calculator.getResult()).toBe(0);
    calculator.add(5);
    expect(calculator.getResult()).toBe(5);
  });
});