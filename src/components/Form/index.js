import "./style.css";
import { useState } from "react";

function Form({ listTransactions, setListTransactions }) {
  const [input, setInput] = useState([]);

  function handleForm(event) {
    event.preventDefault();
    if (event.target[2].value === "despesa") {
      event.target[1].value = event.target[1].value * -1;
    }
    const newTransaction = {
      description: event.target[0].value,
      type: event.target[2].value,
      value: Number(event.target[1].value),
      id: listTransactions.length + 1,
    };
    setListTransactions([newTransaction, ...listTransactions]);

    for (let i = 0; i < event.target.length; i++) {
      event.target[i].value = "";
    }
  }
  return (
    <form onSubmit={(event) => handleForm(event)}>
      <label htmlFor="description">Descrição</label>
      <input
        name="description"
        type="text"
        placeholder="descrição"
        onChange={(event) => setInput([event.target.value, ...input])}
      ></input>
      <span>Ex: Compra de Roupas</span>
      <div className="valueType">
        <div className="value">
          <label htmlFor="value">Valor</label>
          <input
            name="value"
            type="number"
            min={0}
            placeholder="valor"
            onChange={(event) => setInput([event.target.value, ...input])}
          ></input>
        </div>
        <div className="select">
          <label htmlFor="type">Tipo de Valor</label>
          <select
            name="type"
            onChange={(event) => setInput([event.target.value, ...input])}
          >
            <option value={"entrada"}> Entrada</option>
            <option value={"despesa"}> Despesa</option>
          </select>
        </div>
      </div>
      <button type="submit" className="btn">
        Inserir Valor
      </button>
    </form>
  );
}

export default Form;
