function About({ section }: { section: string }) {
  return (
    <section id={section}>
      <div className="image main" data-position="center">
        <img src="src/images/banner.jpg" alt="" />
      </div>
      <div className="container">
        <header className="major">
          <h2>Hello World!</h2>
          <p>I'm a Software Engineer</p>
        </header>
        <p>
          I got my start writing practice management software for MacOS and iOS,
          before shifting over to a similar environment on the Windows side.
          More recently, I've dipped my toes into web applications and
          serial/USB communications with devices and robotics. I've got a firm
          grasp of Object-Oriented Programming and relational databases.
        </p>
      </div>
    </section>
  );
}

export default About;
