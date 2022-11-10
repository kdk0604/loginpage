import React from "react";
import LoginPage from "./components/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Main_App } from "./styled/App_styled";

function App() {
  return (
    <>
      <Main_App>
        <LoginPage />
      </Main_App>
    </>
  );
}

export default App;
