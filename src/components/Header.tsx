import { useState } from "react";

function Header() {
  const [activeColumn, setActiveColumn] = useState("one");

  function rowClicked(event: React.MouseEvent<HTMLAnchorElement>) {

    // grab the string after the # in the url
    const clickedRow = event.currentTarget.href.split("#")[1];
    setActiveColumn(clickedRow);
    console.log("row " + clickedRow + " clicked");
  }

  return (
    <section id="header">
      <header>
        <span className="image avatar">
          <img src="src/images/dustin.jpg" width="279" alt="" />
        </span>
        <h1 id="logo">
          <a href="#">Dustin Johns</a>
        </h1>
        <p>
          Software Engineer
          <br />
          Father, Musician, Adventurer
        </p>
      </header>
      <nav id="nav">
        <ul>
          <li>
            <a
              href="#one"
              className={activeColumn === "one" ? "active" : ""}
              onClick={rowClicked}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#two"
              className={activeColumn === "two" ? "active" : ""}
              onClick={rowClicked}
            >
              Professional Skills
            </a>
          </li>
          <li>
            <a
              href="#three"
              className={activeColumn === "three" ? "active" : ""}
              onClick={rowClicked}
            >
              Side Projects
            </a>
          </li>
          <li>
            <a
              href="#four"
              className={activeColumn === "four" ? "active" : ""}
              onClick={rowClicked}
            >
              Non-Professional
            </a>
          </li>
          <li>
            <a
              href="#five"
              className={activeColumn === "five" ? "active" : ""}
              onClick={rowClicked}
            >
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
      <footer>
        <ul className="icons">
          <li>
            <a
              href="https://www.instagram.com/dustin.johns1"
              className="icon brands fa-instagram"
            >
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/drok22"
              className="icon brands fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/dustin-w-johns"
              className="icon brands fa-linkedin"
            >
              <span className="label">LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:dustinjohns1@gmail.com"
              className="icon solid fa-envelope"
            >
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
}

export default Header;
