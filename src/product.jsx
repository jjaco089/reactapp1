import { useRef, useState } from 'react';

export default function Product() {
    const a = useRef();
    const b = useRef();
    const [result, setResult] = useState([]);
    function mul(){
        const c = parseInt(a.current.value) * parseInt(b.current.value);
        setResult(c);
    }
    return <>
      <input ref={a} />
      <input ref={b} />
      <button onClick={mul}>Multiply</button>
      <h1>{result}</h1>     
      <p></p>
    </> 
}