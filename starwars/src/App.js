import axios from "axios";
import React, { useEffect, useState } from "react";
import Character from "./components/Character"

const App = () => {
  const [char, setChar] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect(() => {
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
    axios.get("https://swapi.py4e.com/api/people/")
   .then(response => {
     console.log(response.data.results)
     setChar(response.data.results)
   })
    .catch(err => {console.log("something went wrong", err)})

.then(() => {console.log("success")})
}, []);
  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>

<Character characterArray ={char}/>
    </div>

  );
  }

export default App;
