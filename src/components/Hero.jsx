import heroBg from "../assets/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px 8%",
        textAlign: "center",
      }}
    >
      <h1>AI-Driven Preventive Healthcare System</h1>
      <p>
        <i>National Level Innovation | AIR 27</i>
      </p>
      <br />
      <button className="btn">Explore Architecture</button>
    </section>
  );
}