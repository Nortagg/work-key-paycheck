import "./flor.styles.scss";
import { Link } from "react-router-dom";

const FlorBox = () => {
  const myFlors = [
    <Link className="Links" to={"flor-one"}>
      1
    </Link>,
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
  ];

  return (
    <div className="main-container">
      <Link className="pay" to={"paycheck"}>
        Racunaj Platu
      </Link>
      <div className="flor-container">
        {myFlors.map((flor) => (
          <div className="flor">{flor}</div>
        ))}
      </div>
    </div>
  );
};

export default FlorBox;
