export default function About() {
  return (
    <section className="section">
      <div className="row two">
        <div>
          <div className="icon-badge">⌂</div>
          <div className="photo"></div>
        </div>
        <div className="about">
          <h2>About</h2>
          <p
            className="small-copy"
            style={{ marginTop: "12px", maxWidth: "240px" }}
          >
            Cn nibh in eu eu leo nec odio augue nibh massa at posuere penatibus.
            Fermentum non odio neque sed purus vivamus. Integer at ultrices sed
            pulvinar nunc turpis.
          </p>
          <strong>
            We are sapien quis diam posuere morbi eu eros. Of property congue
            ultrices eu vestibulum.
          </strong>
          <div className="phone">
            <span className="dot">✆</span> +1 (234) 567-8910
          </div>
        </div>
      </div>
    </section>
  );
}
