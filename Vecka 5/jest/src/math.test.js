import {
    multiply,
    divide
}   from './math';

describe('math' , () => {
    it('should multiply two numbers', () => {
        expect(multiply(2,2)).toBe(4);
        expect(multiply(2, 3)).toBe(6);
    });

    it('should divide two numbers', () => {
        expect(divide(2, 2)).toBe(1);
    });

    it('should throw error when dividing by zero', () => {
        const division = () => divide(2, 0);
        expect(division).toThrow();
    });
});