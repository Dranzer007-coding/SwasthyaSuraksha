export default function Hero() {
  return (
    <>
      <style>
        {`
          #hero {
            background-image: url('../images/hero-bg.jpg');
            padding: 80px 8%;
            text-align: center;
          }
        
        `}
      </style>
      <section id="hero" className="hero">
        <h1>AI-Driven Preventive Healthcare System</h1>
        <p>
         <i>National Level Innovation | AIR 27</i>
        </p><br></br>
        <button className="btn">Explore Architecture</button>
      </section>
    </>
  );
}