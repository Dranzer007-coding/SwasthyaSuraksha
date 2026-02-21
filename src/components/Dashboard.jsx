export default function Dashboard() {
  return (
      <section id="dashboard">
        <div className="glass-dashboard">
          <h2>User Health Dashboard</h2>

          <div className="dashboard-grid">
            <div className="glass-card">
              <h3>Heart Rate</h3>
              <p>78 BPM</p>
            </div>

            <div className="glass-card">
              <h3>Oxygen Level</h3>
              <p>98%</p>
            </div>

            <div className="glass-card">
              <h3>Risk Level</h3>
              <p>LOW</p>
            </div>
          </div>
        </div>
      </section>
  );
}