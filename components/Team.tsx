export default function Team() {
  return (
    <section className="section team">
      <div className="team-header">
        <h2>Our Team</h2>
        <p>Sample text. Click to select the Text Element.</p>
      </div>

      <div className="team-grid">
        <div className="team-card">
          <div className="team-photo"></div>
          <div className="team-overlay">
            <div className="name">Mary Hudson</div>
            <div className="icons">f t in</div>
          </div>
        </div>
        <div className="team-card">
          <div className="team-photo"></div>
          <div className="team-overlay">
            <div className="name">Linda Larso</div>
            <div className="icons">f t in</div>
          </div>
        </div>
        <div className="team-card">
          <div className="team-photo"></div>
        </div>
        <div className="team-card">
          <div className="team-photo"></div>
          <div className="team-overlay">
            <div className="name">Rick Perry</div>
            <div className="icons">f t in</div>
          </div>
        </div>
      </div>
    </section>
  );
}
