export default function ArchitectureSection() {
  return (
    <>
      <style>
        {`
          #architecture {
           background: #eae8dd;
            gap: 30px;
            margin: 30px 8%;
            padding: 10px;
            border-radius:20px;
        `}
      </style>
      <section id="architecture" style={{ padding: "80px 8%" }}>
        <h2>System Architecture</h2>
        <p style={{ marginTop: "20px", color: "#181919" }}>
          The system follows a modular IoT-based architecture. The wearable sensor layer collects biometric data and transmits it via Bluetooth or Wi-Fi to a mobile application. The mobile app processes the data locally and syncs it with a cloud backend for long-term storage and advanced analysis. The backend applies rule-based risk scoring and predictive logic, ensuring accurate alerts. This scalable architecture allows integration of additional sensors and AI modules in future iterations.<br></br>
          <br></br>
          <b>Hardware Layer → Data Layer → AI Decision Engine → UI Layer</b>
        </p>
      </section>
    </>
  );
}