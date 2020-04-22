//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeValue, setHome] = useState(0);
  const [awayValue, setAway] = useState(0);
  const [lifeValue, setLife] = useState(0)
  
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Humans</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeValue}</div>

            <h2 className="baby_born">Population Increase</h2>
            <div className="baby_score">{lifeValue}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Zombies</h2>
            <div className="away__score">{awayValue}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => {setHome(homeValue + 7);}}>
            INFECTED
          </button>
          <button className="homeButtons__fieldGoal" onClick={() => {setHome(homeValue + 3);}}>
            HEALED
          </button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => { setAway(awayValue + 7);}}>TURNED</button>
          <button className="awayButtons__fieldGoal" onClick={() => { setAway(awayValue + 3);}}>HUNGRY</button>
        </div>
        <div>
          <div className="bornHumans">
            <button className="humansBorn" onClick={() => { setLife(lifeValue + 1);}}>Baby Born</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
