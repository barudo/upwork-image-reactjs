export default function Plans() {
  return (
    <section className="section soft">
      <div className="plans">
        <div className="plan-card">
          <div className="icon-badge dark">☼</div>
          <div className="price">$0</div>
          <div className="period">Per Month</div>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
          <a href="#" className="btn dark">
            GET PLAN
          </a>
        </div>
        <div className="plan-card">
          <div className="icon-badge">⌂</div>
          <div className="price">$29</div>
          <div className="period">Per Month</div>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
          <a href="#" className="btn">
            GET PLAN
          </a>
        </div>
      </div>
    </section>
  );
}
