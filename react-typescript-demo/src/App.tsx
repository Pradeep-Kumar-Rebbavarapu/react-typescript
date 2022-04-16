import React from 'react';
import Button from './components/Button';
import Counter from './components/Counter';
import Greet from './components/Greet';


function App() {
  return (
    <div className="App">
     <Greet name={'pradeep'}/>
     <Button handleClick={(e,id)=>{
       console.log(e)
       console.log('button handle click')
     }} styles={{border:'2px solid red',padding:'1rem',cursor:'pointer'}}/>
     <Counter/>
    </div>
  );
}

export default App;
