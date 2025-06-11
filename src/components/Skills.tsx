function Skills({ section }: { section: string }) {
  return (
    <section id={section}>
      <div className="container">
        <h3>Professional Skills</h3>
        <p>
          Some of the Languages/Frameworks/Techs I've used to build projects
          with:
        </p>
        <ul className="feature-icons">
          <li className="icon solid fa-code">C#</li>
          <li className="icon brands fa-python">Python</li>
          <li className="icon brands fa-apple">Objective-C</li>
          <li className="icon brands fa-apple">Swift</li>
          <li className="icon brands fa-js">JavaScript</li>
          <li className="icon brands fa-html5">HTML</li>
          <li className="icon solid fa-code">SQL</li>
          <li className="icon solid fa-code">ASP.NET</li>
          <li className="icon solid fa-code">VB.NET</li>
          <li className="icon solid fa-file-code">CSS</li>
          <li className="icon solid fa-robot">AI (Training to Code)</li>
          <li className="icon brands fa-react">React</li>
          <li className="icon solid fa-flask">Flask</li>
          <li className="icon solid fa-code-branch">Git</li>
          <li className="icon solid fa-laptop-code">Visual Studio</li>
          <li className="icon solid fa-laptop-code">VSCode</li>
          <li className="icon brands fa-apple">XCode</li>
          <li className="icon solid fa-cubes">MSSQL</li>
          <li className="icon solid fa-cubes">MySQL</li>
          <li className="icon solid fa-cubes">PostgresSQL</li>
          <li className="icon brands fa-docker">Docker</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
