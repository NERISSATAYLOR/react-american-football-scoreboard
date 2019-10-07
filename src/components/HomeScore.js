import React, { useState } from "react";

function HomeScore() {
    const [homescore, setHomeScore] = useState(0);
    return (
        <>
            <div className="home__score">{homescore}</div>




            <section className="buttons">
                <div className="homeButtons">

                    <button className="homeButtons__touchdown" onClick={() => setHomeScore(homescore + 7)}>Home Touchdown</button>
                    <button className="homeButtons__fieldGoal" onClick={() => setHomeScore(homescore + 3)}>Home Field Goal</button>
                </div>
            </section>

        </>
    )
}
export default HomeScore;