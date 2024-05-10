import SeriesCalculator from './SeriesCalculator';

describe('SeriesCalculator', () => {
    test('should correctly calculate the series term for n=1', () => {
        expect(SeriesCalculator.term(1)).toBeCloseTo(-1);
    });

    test('should correctly calculate the series term for n=2', () => {
        expect(SeriesCalculator.term(2)).toBeCloseTo(-1.5);
    });

    test('should correctly calculate the series term for n=3', () => {
        expect(SeriesCalculator.term(3)).toBeCloseTo(-2);
    });

    test('should correctly calculate the series term for n=4', () => {
        expect(SeriesCalculator.term(4)).toBeCloseTo(-2.3333333333333335);
    });

    test('should correctly calculate the series term for n=5', () => {
        expect(SeriesCalculator.term(5)).toBeCloseTo(-2.75);
    });

    test('should correctly calculate the series term for n=6', () => {
        expect(SeriesCalculator.term(6)).toBeCloseTo(-3);
    });

    test('should correctly calculate the series term for n=7', () => {
        expect(SeriesCalculator.term(7)).toBeCloseTo(-3.5);
    });

    test('should correctly calculate the series term for n=8', () => {
        expect(SeriesCalculator.term(8)).toBeCloseTo(-4);
    });

    test('should correctly calculate the series term for n=9', () => {
        expect(SeriesCalculator.term(9)).toBeCloseTo(-4.5);
    });

    test('should throw an error for n=10', () => {
        expect(() => SeriesCalculator.term(10)).toThrow('Cannot compute term for n=10 (division by zero)');
    });
});
