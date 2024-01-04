import { useState } from "react";
import * as math from 'mathjs';

const App = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('0');

  const handleClearClick = () => {
    setInput('');
    setOutput('0');
  };

  const handleEqualsClick = () => {

    if (String(input).slice(-2) === '+-' || String(input).slice(-2) === '--' || String(input).slice(-2) === '*-' || String(input).slice(-2) === '/-') {
      const expression = String(input).slice(0, -2); 
      console.log('Expression:', expression); 

      try {
        const res = math.evaluate(expression); 
        setOutput(String(res)); 
        setInput(String(res)); 
      } catch (error) {
        console.error('Error evaluating expression:', error); 
        setOutput('Error'); 
      }
    } else if (String(input).slice(-1) === '+' || String(input).slice(-1) === '-' || String(input).slice(-1) === '*' || String(input).slice(-1) === '/') {
      const expression = String(input).slice(0, -1); 
      console.log('Expression:', expression); 

      try {
        const res = math.evaluate(expression); 
        setOutput(String(res)); 
        setInput(String(res)); 
      } catch (error) {
        console.error('Error evaluating expression:', error); 
        setOutput('Error'); 
      }
      
    } else {

      const expression = input;
      console.log('Expression:', expression); 

      try {
        const res = math.evaluate(expression); 
        setOutput(String(res)); 
        setInput(String(res));
      } catch (error) {
        console.error('Error evaluating expression:', error); 
        setOutput('Error'); 
      }
       
    }

    
  };

  const handleNumberClick = (value) => {
    setInput(input + value);
    const number = String(input).match(/\d+$/);
    if (number) {
      setOutput(String(number) + value);
    } else {
      setOutput(value);
    }
  };

  const handleZeroClick = (value) => {
    const number = input.match(/\d+$/);
    if (number) {
      const lastDigits = number[0];
      if (lastDigits === '0') {

      } else {
        setInput(input + value);
        setOutput(number + value);
      }
    } else {
      setInput(input + value);
      setOutput(value);
    }
  };

  const handleDecimalClick = (value) => {
    const number = String(input).match(/(\d+)?\.?\d+?$/);
    if (number) {
      const matchDecimal = number[0].match(/\./);
      if (matchDecimal) {

      } else {

        setInput(input + value);
        setOutput(number[0] + value);
      }
    } else {
      if (input[input.length - 1] === '.') {

      } else {   
        setInput(input + '0' + value);
        setOutput('0' + value);
      }

    }
      
  
    
  };

  const handleOperationClick = (value) => {
    if (String(input).slice(-2) === '+-' || String(input).slice(-2) === '--' || String(input).slice(-2) === '*-' || String(input).slice(-2) === '/-') {
      setInput(String(input).slice(0, -2) + value);
      setOutput(value);
    } else if (input[input.length - 1] === '+' || input[input.length - 1] === '-' || input[input.length - 1] === '*' || input[input.length - 1] === '/' || input[input.length - 1] === '.') {
      setInput(String(input).slice(0, -1) + value);
      setOutput(value);
    }
    else {
      setInput(input + value);
      setOutput(value);
    }
    
  };

  const handleSubtractClick = (value) => {
    if (input[input.length - 1] === '-' && (input[input.length - 2] === '+' || input[input.length - 2] === '-' || input[input.length - 2] === '*' || input[input.length - 2] === '/' )) {

    } else {
      setInput(input + value);
      setOutput(value);
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="inputScreen">{input}</div>
        <div className="outputScreen" id="display">{output}</div>
        <div>
          <button id="clear" onClick={handleClearClick}>AC</button>
          <button id="divide" onClick={() => handleOperationClick('/')}>/</button>
          <button id="multiply" onClick={() => handleOperationClick('*')}>*</button>
          <button id="seven" onClick={() => handleNumberClick('7')}>7</button>
          <button id="eight" onClick={() => handleNumberClick('8')}>8</button>
          <button id="nine" onClick={() => handleNumberClick('9')}>9</button>
          <button id="subtract" onClick={() => handleSubtractClick('-')}>-</button>
          <button id="four" onClick={() => handleNumberClick('4')}>4</button>
          <button id="five" onClick={() => handleNumberClick('5')}>5</button>
          <button id="six" onClick={() => handleNumberClick('6')}>6</button>
          <button id="add" onClick={() => handleOperationClick('+')}>+</button>
          <button id="one" onClick={() => handleNumberClick('1')}>1</button>
          <button id="two" onClick={() => handleNumberClick('2')}>2</button>
          <button id="three" onClick={() => handleNumberClick('3')}>3</button>
          <button id="zero" onClick={() => handleZeroClick('0')}>0</button>
          <button id="decimal" onClick={() => handleDecimalClick('.')}>.</button>
          <button id="equals" onClick={handleEqualsClick}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
