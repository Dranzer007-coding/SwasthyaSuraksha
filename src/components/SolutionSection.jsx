export default function SolutionSection() {
  return (
    <>
      <style>
        {`
          #solution {
              gap: 30px;
              margin: 30px 8%;
              padding: 10px;
              border-radius:20px;
          }
        `}
      </style>
      <section id="solution" style={{ padding: "80px 8%" }}>
        <h2>Solution Overview</h2>
        <p style={{ marginTop: "20px", color: "#090909" }}>
          Swasthya Suraksha addresses this gap by integrating wearable biometric sensors with an intelligent cloud-based analysis engine. The wearable device continuously collects vital parameters, which are processed using risk assessment algorithms to calculate a dynamic health score. When abnormal patterns are detected, the system immediately notifies users and emergency contacts. This transforms healthcare from hospital-dependent to home-based preventive monitoring.<br/><br />
          <b>Wearable Sensor → Data Processing → AI Risk Engine → Real-Time Alert System</b>
        </p>
      </section>
    </>
  );
}