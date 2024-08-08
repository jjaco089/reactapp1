import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import Sum from './sum';
import Product from './product';

function App() {
  const [op, setOp] = useState(<Sum />);
  function opAdd() {
    setOp(<Sum />)
  }
  function opMul() {
    setOp(<Product />)
  }
  return <>
    <button onClick={opAdd}>Sum</button>
    <button onClick={opMul}>Product</button>
    {op}
  </>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);