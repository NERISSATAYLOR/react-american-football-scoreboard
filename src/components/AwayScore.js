import React, { useState } from "react";

function AwayScore() {
    const [awayscore, setAwayScore] = useState(0);
    return (
        <>
            <div className="away__score">{awayscore}</div>
            <section className="buttons">

                <div className="awayButtons">
                    <button className="awayButtons__touchdown" onClick={() => setAwayScore(awayscore + 7)}>Away Touchdown</button>
                    <button className="awayButtons__fieldGoal" onClick={() => setAwayScore(awayscore + 3)}>Away Field Goal</button>
                </div>
            </section>
        </>
    )



}
export default AwayScore;