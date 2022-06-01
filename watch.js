import React, { useEffect, useState } from 'react';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (running) {
         interval=setInterval(() => {
                setTime(prevtime=>{prevtime+1});
            }, 1000);
        }
            else if (!running) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    } , [running]);
      const setRunningWatch=()=>{
          setRunning(true);
      }
 return (
    <div>
        <div>
            <span>{'0' + Math.floor(((time / 60000) % 60).slice(-2))}</span>
            <span>{'0' + Math.floor((time / 1000 % 60).slice(-2))}</span>
            <span>{'0' + Math.floor((time / 10 % 100).slice(-2))}</span>
        </div>
        <div>
            <button onClick={setRunningWatch }> START</button>
            <button onclick={()=>setRunning(false) }>Stop</button>
            <button onclick={()=>setTime(0) }>reset</button>
        </div>
    </div>
  );
}
export default Stopwatch;
