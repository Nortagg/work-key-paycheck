import FlorBox from "./flors/flor.component";
import { Route, Routes } from "react-router-dom";
import FlorOne from "./flors/flor.one";
import "./app.scss";
import PayCheck from "./paycheck/paycheck.component";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<FlorBox />}></Route>
        <Route path="/flor-one" element={<FlorOne />}></Route>
        <Route path="/paycheck" element={<PayCheck />}></Route>
      </Routes>
    </div>
  );
}

export default App;
