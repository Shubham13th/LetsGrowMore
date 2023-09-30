import React, { useState } from 'react';
import './App.css';

function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setExpression(expression + value);
  };

  const handleClear = () => {
    setExpression('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(expression));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-200">
      <div className="calculator border border-gray-400 p-4 rounded-3xl bg-slate-700 shadow-2xl">
        <input
          className="outline-none text-white p-2 w-full rounded-t-lg bg-black font-semibold"
          type="text"
          value={expression}
          readOnly
        />
        <input
          className="outline-none bg-black rounded-b-lg text-white mb-4 font-semibold p-2 w-full"
          type="text"
          value={result}
          readOnly
        />
        <div className="grid grid-cols-4 gap-2 bg-slate-700 p-3 rounded-lg">
          {['7', '8', '9', '/'].map((btn) => (
            <button
              key={btn}
              onClick={() => handleButtonClick(btn)}
              className="btn bg-slate-500 px-1 py-2 rounded-full text-pink-400 font-bold"
            >
              {btn}
            </button>
          ))}
          {['4', '5', '6', '*'].map((btn) => (
            <button
              key={btn}
              onClick={() => handleButtonClick(btn)}
              className="btn bg-slate-500 px-1 py-2 rounded-full text-pink-400 font-bold shadow-lg"
            >
              {btn}
            </button>
          ))}
          {['1', '2', '3', '-'].map((btn) => (
            <button
              key={btn}
              onClick={() => handleButtonClick(btn)}
              className="btn bg-slate-500 px-1 py-2 rounded-full text-pink-400 font-bold"
            >
              {btn}
            </button>
          ))}
          {['.', '0', '=', '+'].map((btn) => (
            <button
              key={btn}
              onClick={() => (btn === '=' ? handleCalculate() : handleButtonClick(btn))}
              className={`btn bg-slate-500 px-1 py-2 rounded-full text-pink-400 font-bold shadow-lg${btn === '=' ? 'col-span-2' : ''}`}
            >
              {btn}
            </button>
          ))}
        </div>
        <button onClick={handleClear} className="btn col-span-4 px-2 py-2 bg-slate-700 text-pink-400 rounded-full mt-2 font-bold shadow-lg
">
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
