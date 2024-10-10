import "./paycheck.styles.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { IoMdArrowBack } from "react-icons/io";
import { PiHandTap } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useState } from "react";

const PayCheck = () => {
  const [sum, setSum] = useState(0);
  const [history, setHistory] = useState([]);
  const [clicked2800, setClicked2800] = useState(0);
  const [clicked2240, setClicked2240] = useState(0);
  const [isScaled2800, setIsScaled2800] = useState(false);
  const [isScaled2240, setIsScaled2240] = useState(false);
  const [animateSum, setAnimateSum] = useState(false);

  const handleAdd2800 = () => {
    setHistory([...history, { sum, clicked2800, clicked2240 }]);
    setSum((prevSum) => prevSum + 4000);
    setClicked2800((prevClicked2800) => prevClicked2800 + 1);
    setIsScaled2800(true);
    setAnimateSum(true);
    setTimeout(() => {
      setIsScaled2800(false);
      setAnimateSum(false);
    }, 500);
  };

  const handleAdd2240 = () => {
    setHistory([...history, { sum, clicked2800, clicked2240 }]);
    setSum((prevSum) => prevSum + 3200);
    setClicked2240((prevClicked2240) => prevClicked2240 + 1);
    setIsScaled2240(true);
    setAnimateSum(true);
    setTimeout(() => {
      setIsScaled2240(false);
      setAnimateSum(false);
    }, 500);
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

  if (sum >= 38000) {
    emoji = "🤩🤑😜";
  } else if (sum >= 25000) {
    emoji = "💫😉💫";
  } else if (sum >= 15000) {
    emoji = "👷😥🤷‍♂️";
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
          Ukupan iznos:{" "}
          <span className={`rsd ${animateSum ? "animated-sum" : ""}`}>
            {sum}
          </span>{" "}
          rsd.
        </h1>
        <h2>
          4000 <PiHandTap className={isScaled2800 ? "scaled" : ""} /> ={" "}
          {clicked2800}x
        </h2>
        <h2>
          3200 <PiHandTap className={isScaled2240 ? "scaled" : ""} /> ={" "}
          {clicked2240}x
        </h2>
        <span className="emoji">{emoji}</span>
      </div>

      <div className="calculator-info-container">
        <div className="calculator">
          <button onClick={handleAdd2800}>+4000 rsd.</button>
          <button onClick={handleAdd2240}>+3200 rsd.</button>
          <button onClick={handleReset}>↺</button>
          <button onClick={handleUndo}>↩</button>
        </div>
        <span className="info">
          <p className="radni-dan">10h radni dan = 4000rsd.</p>
          <p className="subota">8h subota = 3200rsd.</p>
          <p className="ukupna-satnica">Po satu = 400rsd. ⛏ 😔 </p>
        </span>
      </div>
    </div>
  );
};

export default PayCheck;
