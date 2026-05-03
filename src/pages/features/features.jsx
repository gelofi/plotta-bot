import "./features.css"

function Features(){
  return (
    <>
      <section className="features" id="features">
        <div className="feature" style={{ backgroundColor: "#0a224f" }}>
          <h1>Plot values to a graph</h1>
          <p>Plot values directly in the Discord chat to show your friends.</p>
        </div>
        <div className="feature" style={{ backgroundColor: "#5781ce" }}>
          <h1>Get weather data</h1>
          <p>Get real-time weather information. Powered by Open-Meteo API.</p>
        </div>
        <div className="feature" style={{ backgroundColor: "#0a224f" }}>
          <h1>99% Uptime</h1>
          <p>Plot anytime with minimal downtime.</p>
        </div>
      </section>
    </>
  )
}

export default Features;