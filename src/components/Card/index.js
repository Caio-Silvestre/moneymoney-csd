import "./style.css";
import { BsFillTrashFill } from "react-icons/bs";

function Card({ transaction, description, type, value, id, removeBtn }) {
  function isNegative(value) {
    return value * -1;
  }

  return (
    <div className={type === "entrada" ? "divEntrada" : "divSaida"}>
      <div className="infosLeft">
        <div className="typeSaida"></div>
        <h3 className="description">{description}</h3>
        <span className="type">{type}</span>
      </div>
      <div className="infosRigth">
        <p className="value">
          R$ {type === "despesa" ? isNegative(value) : value}
        </p>
        <BsFillTrashFill
          className="btnExluir"
          id={id}
          onClick={(event) => removeBtn(transaction)}
        />
      </div>
    </div>
  );
}

export default Card;
