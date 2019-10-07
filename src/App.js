//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import HomeScore from "./components/HomeScore";
import AwayScore from "./components/AwayScore";
// import Timer from './components/Timer';

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.


  return (

    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">CowBoys</h2>



            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}


            <HomeScore />

          </div>
          <div className="timer">
            <Timer />
          </div>
          <div className="away">
            <h2 className="away__name">Redskins</h2>
            <AwayScore />

          </div>
        </div>
        <BottomRow />

      </section>

    </div>
  );
}

export default App;
