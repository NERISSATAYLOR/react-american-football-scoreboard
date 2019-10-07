import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
  const [quarter, setQuarter] = useState(0);
  const [down, setDown] = useState(10);
  const [ballOn, setBallOn] = useState(21);
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
        <button className="down_value" onClick={() => setDown(down + 1)}>DOWN</button>
        <button className="down_value" onClick={() => setDown(down - 1)}>LOSE DOWN</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOn}</div>
        <button className="ballOn_value" onClick={() => setBallOn(ballOn + 1)}>Ball On</button>
      </div>
      <div>
        <div className="quarter">
          <h3 className="quarter__title">Quarter</h3>
          <div className="quarter__value">{quarter}</div>


          <button className="quarter_value" onClick={() => setQuarter(quarter + 1)}>Quarter</button>
        </div>
      </div>
    </div>

  );
};

export default BottomRow;
