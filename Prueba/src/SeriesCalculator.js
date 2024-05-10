class SeriesCalculator {
    static fibonacci(n) {
        let [a, b] = [0, 1];
        for (let i = 0; i < n; i++) {
            [a, b] = [b, a + b];
        }
        return a;
    }

    static triangular(n) {
        return n * (n + 1) / 2;
    }

    static isPrime(num) {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++)
            if (num % i === 0) return false;
        return num > 1;
    }

    static term(n) {
        if (n === 10) throw new Error("Cannot compute term for n=10 (division by zero)");
        const fibonacciTerm = this.fibonacci(n);
        const triangularTerm = this.triangular(n - 1);
        const isPrime = this.isPrime(n + 2);
    
        const part1 = 3 * fibonacciTerm;
        const part2 = 3 * triangularTerm;
        const part3 = n - 10;
        const part4 = isPrime ? 1 : 0;
    
        const result = (part1 - part2) / part3 + part4;
        return result;
    }
    
    
    
}

export default SeriesCalculator;
