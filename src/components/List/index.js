import "./style.css";
import Card from "../Card";
import noCard from "../../assets/NoCard.svg";

function List({ listTransactions, setListTransactions }) {
  // function replaceValue(value) {
  //   if (value < 0) {
  //     return value.replace([0], "");
  //   } else {
  //     return value;
  //   }
  // }
  const removeBtn = (Card) =>
    setListTransactions(
      listTransactions.filter((transaction) => transaction !== Card)
    );
  return (
    <>
      {listTransactions.length > 0 ? (
        <>
          {listTransactions.map((transaction, index) => (
            <Card
              transaction={transaction}
              key={index}
              type={transaction.type}
              description={transaction.description}
              value={transaction.value}
              id={transaction.id}
              removeBtn={removeBtn}
            />
          ))}
        </>
      ) : (
        <>
          <img src={noCard} className="noCard" />
        </>
      )}
    </>
  );
}

export default List;

/* <div className="aviso">Você ainda não possui nenhum lançamento</div>
          <div className="divSaida">
            <div className="infosLeft">
              <div className="typeSaida"> </div>
              <h3 className="descriptionNo">Descrição</h3>
              <span className="typeNo">Tipooooooooo</span>
            </div>
            <div className="infosRigth">
              <p className="valueNo">10000</p>
              <div className="btnNo">O</div>
            </div>
          </div>
          <div className="divSaida">
            <div className="infosLeft">
              <div className="typeSaida"> </div>
              <h3 className="descriptionNo">Descrição</h3>
              <span className="typeNo">Tipooooooooo</span>
            </div>
            <div className="infosRigth">
              <p className="valueNo">10000</p>
              <div className="btnNo">O</div>
            </div>
          </div>
          <div className="divSaida">
            <div className="infosLeft">
              <div className="typeSaida"> </div>
              <h3 className="descriptionNo">Descrição</h3>
              <span className="typeNo">Tipooooooooo</span>
            </div>
            <div className="infosRigth">
              <p className="valueNo">10000</p>
              <div className="btnNo">O</div>
            </div>
          </div> */
