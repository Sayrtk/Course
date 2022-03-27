const { Calculator } = require('./calculator');

const CodeofCalculator = new Calculator();

describe('homework 15 tests', () => {
    it('add action works', async () => {
        const number = CodeofCalculator.add(1, 5);
        expect(number).toEqual(6);
    })
})

it('valid multiply action', () => {
    const number = CodeofCalculator.multiply(4, 7);
    expect(number).toEqual(28);
})

it('valid subtraction action', async () => {
    const number = CodeofCalculator.subtraction(44, 10);
    expect(number).toEqual(34);
})

it('valid divide action', async () => {
    const number = CodeofCalculator.divide(66, 2);
    expect(number).toBe(33);
})

it('valid exponentiation action', async () => {
    const number = CodeofCalculator.exponentiation(3, 4);
    expect(number).toBe(81);
})

it('valid exponentiation test with a wrong result', async () => {
    const number = CodeofCalculator.exponentiation(3, 4);
    expect(number).not.toBe(5);
})



