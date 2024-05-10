import React, { useState } from 'react';
import InputComponent from './components/InputComponent';
import ResultComponent from './components/ResultComponent';
import SeriesCalculator from './SeriesCalculator';

function App() {
    const [result, setResult] = useState('');

    const handleCalculate = (n) => {
        try {
            const calcResult = SeriesCalculator.term(n);
            setResult(calcResult.toString());
        } catch (error) {
            setResult(error.message);
        }
    };

    return (
        <div>
            <InputComponent onCalculate={handleCalculate} />
            <ResultComponent result={result} />
        </div>
    );
}

export default App;
