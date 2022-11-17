import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPag";
import React from "react";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import logo from "./logo.svg";
import img from "./assets/image.svg";
import "./App.css";
function App() {
  return (
    <>
      <Switch>
        <Route path="/HomePage" component={HomePage} />
        <Route path="/" component={LoginPage} />
      </Switch>
    </>
  );
}

export default App;

// function filter(type) {
//   console.log("oi");
//   const newList = listTransactions.filter(
//     (transaction) => transaction.type === type
//   );
//   console.log(newList);
//   console.log(type);
//   setfilterTransactions(newList);
// }
