export default function Contact() {
  return (
    <section className="section">
      <div className="contact-grid">
        <div className="form-panel">
          <div className="field">
            <div className="field-row">
              <label>Name</label>
              <input type="text" placeholder="Enter your Name" />
            </div>
          </div>
          <div className="field">
            <div className="field-row">
              <label>Email</label>
              <input type="email" placeholder="Enter a valid email address" />
            </div>
          </div>
          <div className="field">
            <div className="field-row" style={{ alignItems: "start" }}>
              <label style={{ paddingTop: "10px" }}>Message</label>
              <textarea placeholder="Enter your message"></textarea>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "8px" }}>
            <button
              className="btn"
              style={{ width: "100%", maxWidth: "190px" }}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="contact-copy">
          <p>
            Condimentum do dignissim hendrerit vulputate eleifend leo. Et nibh
            in eu eu leo nec odio augue nibh donec eu. Condimentum do nibh in eu
            eu leo nec odio augue sed.
          </p>
          <p>
            Fermentum suspendisse nisi. In egestas et feugiat nisi. Proin vel
            eget amet ultrices donec sapien, ornare in. Enim fermentum sed diam
            ut vestibulum dui feugiat feugiat.
          </p>
        </div>
      </div>
    </section>
  );
}
