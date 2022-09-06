import { useRef, useState } from 'react';

export default function Sum() {
    const a = useRef();
    const b = useRef();
    const [result, setResult] = useState([]);
    function add(){
        const c = parseInt(a.current.value) + parseInt(b.current.value);
        setResult(c);
    }
    return <>
      <input ref={a} />
      <input ref={b} />
      <button onClick={add}>Add</button>
      <h1>{result}</h1>     
      <p></p>
    </> 
}