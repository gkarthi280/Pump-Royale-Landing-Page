import './App.css';

function App() {
  return (
    <div className="landing-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="app-title">Pump Royale</h1>
          <p className="tagline">Compete globally & monetize your fitness journey!</p>
          <button className="download-button">Download Now</button>
        </div>
      </header>

      <section className="features-section">
        <h2 className="section-title">Why Pump Royale?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Compete Globally</h3>
            <p>Challenge players from around the world in intense fitness battles.</p>
          </div>
          <div className="feature-card">
            <h3>Monetize Your Fitness</h3>
            <p>Earn rewards and cash prizes as you progress on your fitness journey.</p>
          </div>
          <div className="feature-card">
            <h3>Track Progress</h3>
            <p>Track your workouts, see your gains, and stay motivated.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Pump Royale. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
