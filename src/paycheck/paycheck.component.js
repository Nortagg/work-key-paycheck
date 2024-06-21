import "./paycheck.styles.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

const PayCheck = () => {
  const [sum, setSum] = useState(0);
  const [history, setHistory] = useState([]);
  const [clicked2800, setClicked2800] = useState(0);
  const [clicked2240, setClicked2240] = useState(0);

  const handleAdd2800 = () => {
    setHistory([...history, { sum, clicked2800, clicked2240 }]);
    setSum((prevSum) => prevSum + 2800);
    setClicked2800((prevClicked2800) => prevClicked2800 + 1);
  };

  const handleAdd2240 = () => {
    setHistory([...history, { sum, clicked2800, clicked2240 }]);
    setSum((prevSum) => prevSum + 2240);
    setClicked2240((prevClicked2240) => prevClicked2240 + 1);
  };

  const handleReset = () => {
    setHistory([...history, { sum, clicked2800, clicked2240 }]);
    setSum(0);
    setClicked2800(0);
    setClicked2240(0);
  };

  const handleUndo = () => {
    if (history.length > 0) {
      const lastState = history[history.length - 1];
      setHistory(history.slice(0, -1));
      setSum(lastState.sum);
      setClicked2800(lastState.clicked2800);
      setClicked2240(lastState.clicked2240);
    }
  };

  let emoji = null;

  if (sum >= 40000) {
    emoji = "🤩🤑😜";
  } else if (sum >= 25000) {
    emoji = "😉";
  } else if (sum >= 15000) {
    emoji = "😥";
  }

  return (
    <div className="main-paycheck">
      <Link className="link-paycheck" to={"/"}>
        <IoMdArrowBack />
      </Link>
      <div className="calendar">
        <Calendar />
      </div>
      <div className="results">
        <h1>
          Ukupan iznos: <span className="rsd">{sum}</span> rsd. {emoji}
        </h1>
        <h2>2800 puta pritisnuto: {clicked2800}</h2>
        <h2>2240 puta pritisnuto: {clicked2240}</h2>
      </div>
      <div className="calculator-info-container">
        <div className="calculator">
          <button onClick={handleAdd2800}>+2800 rsd.</button>
          <button onClick={handleAdd2240}>+2240 rsd.</button>
          <button onClick={handleReset}>↺</button>
          <button onClick={handleUndo}>↩</button>
        </div>
        <span className="info">
          <p className="radni-dan">10h radni dan = 2800rsd.</p>
          <p className="subota">8h subota = 2240rsd.</p>
          <p className="ukupna-satnica">Po satu = 280rsd. ⛏ 😔 </p>
        </span>
      </div>
    </div>
  );
};

export default PayCheck;
