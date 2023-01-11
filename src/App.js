import './index.scss';
import React,{useState} from 'react';
function App() {

  const [count,setCount] = useState(0);


  const increment = () => {
    setCount(count + 1)
  }
  const decriment = () => {
    if(count <= 0){
      setCount(0);
    }
    else{
      setCount(count - 1)
    }
   
  }

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={decriment}  className="minus">- Минус</button>
        <button onClick={increment}  className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
