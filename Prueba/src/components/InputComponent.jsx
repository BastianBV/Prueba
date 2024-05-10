import React, { useState } from 'react';

function InputComponent({ onCalculate }) {
    const [input, setInput] = useState('');

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onCalculate(parseInt(input, 10));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={input} onChange={handleChange} />
            <button type="submit">Calculate</button>
        </form>
    );
}

export default InputComponent;
