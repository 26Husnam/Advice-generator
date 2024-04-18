 import {useEffect, useState} from 'react'
import './App.css';

function App() {

const [advice, setAdvice]=useState(null)
const [loading, setLoading]=useState(true)
const fetchAdvice = async() => {
  // https://api.adviceslip.com/advice
  setLoading(true)
    var requestOptions={
      method: "GET",
      redirect: "follow"
    }
      await fetch("https://api.adviceslip.com/advice", requestOptions).then((response)=> response.json  ()).then((res)=>{console.log("Testing",res.slip.advice);
      setAdvice(res.slip.advice)
      setLoading(false)
      });
    };

  useEffect(() => {
    fetchAdvice();
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Get a Random Advice 🤯</h1>
        <p>
          {!loading ? advice : "Loading..."}
        </p>
        <button onClick={()=>{
          fetchAdvice();
        }}>
          Get new advice
        </button>
      </header>
    </div>
  );
}

export default App;
