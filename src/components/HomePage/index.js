import logo from "../../logo.svg";
import "./style.css";
import { useState, useEffect } from "react";
import Form from "../Form";
import Card from "../Card";
import List from "../List";
import { useHistory } from "react-router-dom";

function HomePage() {
  const [listTransactions, setListTransactions] = useState([]);
  const [filter, setFilter] = useState("todos");
  const [filterTransactions, setfilterTransactions] = useState([]);

  const history = useHistory();
  const totalPrice = listTransactions.reduce((valorAnterior, valorAtual) => {
    return Number(valorAtual.value) + valorAnterior;
  }, 0);
  console.log(listTransactions, filterTransactions);

  useEffect(() => {
    if (filter === "todos") {
      setfilterTransactions([]);
    } else if (filter === "id") {
      const newList = listTransactions.filter(
        (transaction) => transaction.id !== filter
      );
      setfilterTransactions(newList);
    } else {
      const newList = listTransactions.filter(
        (transaction) => transaction.type === filter
      );
      setfilterTransactions(newList);
    }
  }, [filter, listTransactions]);

  const homePage = (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="headerElements" alt="logo" />
        <button className="buttonInicio" onClick={() => history.push("/")}>
          Início
        </button>
      </header>
      <div className="body">
        <div className="divLeft">
          <div className="formDiv">
            <Form
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
          </div>
          <div className="valorTotalDiv">
            <div>
              <h3 className="valorTotalTitle">Valor Total:</h3>
              <span className="valorTotalSpan">O valor se refere ao Saldo</span>
            </div>
            <p className="totalNum">{totalPrice}</p>
          </div>
        </div>
        <div className="divRigth">
          <div className="resumoDiv">
            <p className="titleResumFinan">Resumo Financeiro</p>
            <div className="btnsDiv">
              <button className="btnTodos" onClick={() => setFilter("todos")}>
                Todos
              </button>
              <button
                className="btnEntradas"
                onClick={() => setFilter("entrada")}
              >
                Entradas
              </button>
              <button
                className="btnDespesas"
                onClick={() => setFilter("despesa")}
              >
                Despesas
              </button>
            </div>
          </div>
          {filterTransactions.length > 0 ? (
            <List
              listTransactions={filterTransactions}
              setListTransactions={setListTransactions}
            />
          ) : (
            <List
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
          )}
        </div>
      </div>
    </div>
  );

  return homePage;
}

export default HomePage;
