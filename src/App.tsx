import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./components/loginPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="App">
        <LoginPage />
      </div>
    </>
  );
}

export default App;
