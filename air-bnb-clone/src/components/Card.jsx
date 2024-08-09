export default function Card() {
  return (
    <>
      <div className="card">
        <img src="https://imgmedia.lbb.in/media/2023/01/63c65e541d43b562bfdbff51_1673944660849.jpg" className="card--image" />
        <div className="card--stats">
          <img src="data:image/png;base64,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" className="card--star" />
          <span>5.0</span>
          <span className="gray">(6) • </span>
          <span className="gray">USA</span>
        </div>
        <p>Life Lessons with Katie Zaferes</p>
        <p>
          <span className="bold">From $136</span> / person
        </p>
      </div>
    </>
  );
}
