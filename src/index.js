import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import Sum from './sum';
import Product from './product';

function App() {
  const [op, setOp] = useState(<Sum />);
  const [sumColor, setSumColor] = useState('red');
  const [proColor, setProColor] = useState('gray');
  function opAdd() {
    setOp(<Sum />);
    setSumColor('red');
    setProColor('gray');
  }
  function opMul() {
    setOp(<Product />);
    setSumColor('gray');
    setProColor('red');
  }
  return <>
      <p>
        <button style={{background: sumColor}} onClick={opAdd}>Sum</button>
        <button style={{background: proColor}} onClick={opMul}>Product</button>
      </p>
      <p>{op}</p>
  </>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);