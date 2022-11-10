import React from "react";
import LoginPage from "./components/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { MainApp } from "./styled/App_styled";

function App() {
  return (
    <>
      <MainApp>
        <LoginPage />
      </MainApp>
    </>
  );
}

export default App;
