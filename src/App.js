import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const clearInput = () => {
    setInput('');
  };

  return (
    <div className="calculator">
      <div className="input-row">
        <input type="text" value={input} disabled />
      </div>
      <div className="buttons">
        <button className="clear" onClick={clearInput}>C</button>
        <button className="operator" onClick={() => handleClick('/')}>&divide;</button>
        <button className="number" onClick={() => handleClick('7')}>7</button>
        <button className="number" onClick={() => handleClick('8')}>8</button>
        <button className="number" onClick={() => handleClick('9')}>9</button>
        <button className="operator" onClick={() => handleClick('*')}>&times;</button>
        <button className="number" onClick={() => handleClick('4')}>4</button>
        <button className="number" onClick={() => handleClick('5')}>5</button>
        <button className="number" onClick={() => handleClick('6')}>6</button>
        <button className="operator" onClick={() => handleClick('-')}>-</button>
        <button className="number" onClick={() => handleClick('1')}>1</button>
        <button className="number" onClick={() => handleClick('2')}>2</button>
        <button className="number" onClick={() => handleClick('3')}>3</button>
        <button className="operator" onClick={() => handleClick('+')}>+</button>
        <button className="number zero" onClick={() => handleClick('0')}>0</button>
        <button className="decimal" onClick={() => handleClick('.')}>.</button>
        <button className="equal" onClick={calculateResult}>=</button>
      </div>
    </div>
  );
}

export default App;
