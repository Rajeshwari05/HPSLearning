import './App.css';
import { useState } from 'react';

function formComponent() {
  const [value, setvalue] = useState(" ");
  return (
    <form action="">
      <div className='display'>
        <input type='text' value={value}></input>
      </div>
      <div>
        <input type="button" value="AC" onClick={e => setvalue(" ")} />
        <input type='button' value="DE" onClick={e => setvalue(value.slice(0, -1))} />
        <input type='button' value="." onClick={e => setvalue(value + e.target.value)} />
        <input type='button' value="/" onClick={e => setvalue(value + e.target.value)} />
      </div>
      <div>
        <input type='button' value="7" onClick={e => setvalue(value + e.target.value)} />
        <input type='button' value="8" onClick={e => setvalue(value + e.target.value)} />
        <input type='button' value="9" ocClick={e => setvalue(value + e.target.value)} />
        <input type='button' value="*" onClick={e => setvalue(value + e.target.value)} />
      </div>
      <div>
        <input type='button' value="4" onClick={e => setvalue(value + e.target.value)} />
        <input type='button' value="5" onClick={e => setvalue(value + e.target.value)} />
        <input type='button' value="6" onClick={e => setvalue(value + e.target.value)} />
        <input type='button' value="+" onClick={e => setvalue(value + e.target.value)} />
      </div>
      <div>
        <input type='button' value="1" onClick={e => setvalue(value + e.target.value)} />
        <input type='button' value="2" onClick={e => setvalue(value + e.target.value)} />
        <input type='button' value="3" onClick={e => setvalue(value + e.target.value)} />
        <input type='button' value="-" onClick={e => setvalue(value + e.target.value)} />
      </div>
      <div>
        <input type='button' value="00" onClick={e => setvalue(value + e.target.value)} />
        <input type='button' value="0" onClick={e => setvalue(value + e.target.value)} />
        <input type='button' value="=" className='equal' onClick={e => setvalue(eval(value))} />
      </div>
    </form>
  )
}


export default formComponent