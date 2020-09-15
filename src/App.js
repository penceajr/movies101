import React from "react";
import "./App.css";
// import { HomePage } from "./Pages/HomePage";
import { LogIn } from "./Pages/LogIn";
import { CreateAccount } from "./Pages/CreateAccount"

function App() {
  return (
    <div className="App">
    {/* < HomePage /> */}
    < LogIn />
    < CreateAccount />
    </div>
  );
}

export default App;


