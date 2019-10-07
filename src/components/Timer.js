// import React, { useEffect, useCallback } from 'react';
// import useCountDown from 'react-countdown-hook';

// const initialTime = 60 * 1000;
// const interval = 1000;
// const render = () => {
//     const [timeLeft, start] = useCountDown(initialTime, interval);
//     useEffect(() => {
//         start();
//     }, []);
//     const restart = useCallback(
//         () => {
//             const newTime = 24 * 1000;
//             start(newTime);
//         }, [start]),
//     return (
//         <>
//             <p>Time left:{timeLeft}</p>
//             <button onClick={restart}>Clock</button>
//         </>
//     )
// }


// export default Timer;