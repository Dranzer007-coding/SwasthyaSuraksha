import { useEffect, useState } from "react";

function Counter({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    let duration = 2000;
    let incrementTime = 20;
    let step = end / (duration / incrementTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, incrementTime);

  }, [target]);

  return <h2>{count}</h2>;
}

export default function StatsSection() {
  return (
    <section id="stats" style={{ padding: "80px 8%" }}>
      <b><h2 style={{textAlign:"center",marginBottom:"40px" , fontSize:"24px"}}>IMPACT METRICS</h2></b>
      <br></br>
      <br></br>
      <div className="stats">
        <div>
          <Counter target="24" />
          <p>Hours Monitoring</p>
        </div>
        <div>
          <Counter target="70" />
          <p>% Preventable Risks</p>
        </div>
        <div>
          <Counter target="1000" />
          <p>Data Points / Day</p>
        </div>
      </div>
    </section>
  );
}