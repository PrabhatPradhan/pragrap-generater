import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {data} from './constent'

function App() {
  const [count, setCount] = useState(0)

  const [text , setText]=useState([]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    let amount =parseInt(count);
    if(amount <0) amount=1;
    if(amount > 10) amount=10;

    setText(data.slice(0,amount));
    return;
  };
  return (
    <>
     <h1 id='h1'>TIRED OF BORING LOREM IPSUM?</h1>
     <form action="" id='div' onSubmit={handleSubmit}>
      <p>Paragraphs:</p>
      <input type="number"  id='intput' value={count}
      onChange={(e) => setCount(e.target.value)} />
      <button id='btn'>Generate</button>
     </form>
     <article id='pragrap'>
      {text.map((data,index)=>(
        <p key={index}>{data}</p>
      ))}
     </article>
    </>
  )
}

export default App
