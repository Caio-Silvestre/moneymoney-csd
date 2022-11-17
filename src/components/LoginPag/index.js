import React from "react";
import logo from "../../logo.svg";
import img from "../../assets/image.svg";
import "./style.css";
import { useHistory } from "react-router-dom";

function LoginPage() {
  const history = useHistory();

  return (
    <>
      <main className="mainLogin">
        <div className="textPart">
          <img src={logo} />
          <h1>Centralize o controle das suas finanças</h1>
          <p>De forma rápida e segura</p>
          <button
            className="btnLogin"
            onClick={() => history.push("/HomePage")}
          >
            Iniciar
          </button>
        </div>
        <div className="imgDiv">
          <img src={img} className="imgPart" />
        </div>
      </main>
    </>
  );
}

export default LoginPage;
