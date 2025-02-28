import { useState } from "react";

import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import Results from "./components/Results/Results";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10 
 });

 const isDurationValid = userInput.duration > 0;

 function handleChange(inputId, newValue) {
  setUserInput(previousUserValues => {
      return {
          ...previousUserValues,
          [inputId]: Number(newValue)
      };
  });
}

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {isDurationValid ? <Results userInput={userInput} /> : <p className="center">Please enter a valid duration</p>}
    </>
  )
}

export default App;