import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {

  const [result, setResult] = useState(null);

  let handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value) {
      axios.get(`https://powerful-stream-58542.herokuapp.com/characters/name/${e.target[0].value}`)
        .then(res => {
          if (res.data.length === 1)
            setResult(res.data)
        })
    }
  }

  return (
    <div className="app">
      <div className="logo"></div>
      <div className="input container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text"></input>
          <button>Find Character</button>
        </form>
      </div>
      <div className="output container">
        <div className="results">
          <div className="result"><b>Name:</b> {result && result[0].name}</div>
          <div className="result"><b>Description:</b> {result && result[0].description}</div>
          <div className="result"><b>Weapon:</b> {result && result[0].weapon}</div>
          <div className="result"><b>Constellation:</b> {result && result[0].constellation}</div>
          <div className="result"><b>Nation:</b> {result && result[0].nation}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
