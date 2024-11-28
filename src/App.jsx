import './App.css'
import Counter from './Counter';

function App() {

  function handleClick(){
    alert('btn clicked!');
  }

  return (
    <>
    
      
      <h3>React Core Concepts 2</h3>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>

    </>
  )
}

export default App
