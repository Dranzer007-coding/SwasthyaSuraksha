export default function ProblemSection() {
  return (
    <>
      <style>
        {`
          #problem {
             background: #eae8dd;
            gap: 30px;
            margin: 30px 8%;
            padding: 10px;
            border-radius:20px;
          }
        `}
      </style>
      <section id="problem" style={{ padding: "80px 8%" }}>
        <h2>Problem Statement</h2>
        <p style={{ marginTop: "20px", color: "#0e0e0e" }}>
          Millions of individuals, especially elderly citizens and patients with chronic conditions, lack continuous health monitoring outside hospitals. Sudden cardiac events, oxygen drops, and unnoticed irregularities often go undetected until it is too late. Traditional health checkups are periodic and reactive, leaving large monitoring gaps. There is a clear need for an affordable, real-time, preventive monitoring system that can alert users and caregivers instantly when health metrics cross safe thresholds.
        </p>
        <ul style={{ marginTop: "20px", color: "#151515" }}>
          <li>Reactive healthcare systems</li>
          <li>No continuous monitoring</li>
          <li>Delayed emergency alerts</li>
        </ul>
      </section>
    </>
  );
}