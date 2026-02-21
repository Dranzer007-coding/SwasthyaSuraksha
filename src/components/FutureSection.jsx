import futureImage from "../assets/app-idea.png";
export default function FutureSection() {
  return (
    <>
      <style>
        {`
          #future {
            background: #eae8dd;
            gap: 30px;
            margin: 30px 8%;
            padding: 10px;
            border-radius:20px;
          `}
      </style>
      <section id="future" style={{ padding: "60px 8%" }}>
        <h2><u>Future Scope</u></h2>
        <p style={{ marginTop: "20px", color: "#212529" }}>
          Future enhancements include AI-driven predictive analytics using machine learning models trained on long-term health trends, integration with hospital emergency systems, GPS-based emergency tracking, and automatic ambulance alerts. The system can also expand to monitor blood pressure, glucose levels, and sleep patterns. With further development, Swasthya Suraksha can evolve into a comprehensive personal health intelligence platform.
        </p>
        <ul style={{ marginTop: "20px", color: "#212529", listStyleType: "square" }}>
          <li>Machine Learning risk prediction</li>
          <li>Cloud health records</li>
          <li>PWA mobile deployment</li>

          <div className="future-right">
        <img src={futureImage} alt="Future Healthcare Vision" />
        </div>
        </ul>
        <br/>
        <b style={{ fontSize: "18px" }}>Feedback and User Engagement</b><br></br><br />
        <p style={{ marginTop: "10px", color: "#212529" }}>
          Collecting user feedback is essential for continuous improvement. The system will include a feedback module that allows users to report issues, suggest features, and rate their experience. This feedback loop ensures the platform evolves with user needs and maintains high usability standards.
          <br></br><br /><br />
          For any kind of feedback -&nbsp;<u><a href="https://docs.google.com/forms/d/e/1FAIpQLSf2Dm-xVhG67VN4TS5xcgQBIqp1sjrr1tM1HsUbk_Yv5pDnrA/viewform?usp=publish-editor" style={{ color: "#062e56" }}>Click Here</a></u>
        </p>
      </section>
    </>
  );
}