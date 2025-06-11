function Projects({ section }: { section: string }) {
  return (
    <section id={section}>
      <div className="container">
        <h3>What I'm doing on Github</h3>
        <p>
          A few of the projects you'll find me tinkering with in my free time.
        </p>
        <div className="features">
          <article>
            <a href="https://github.com/drok22/Snake" className="image">
              <img src="src/images/snake01.png" alt="" />
            </a>
            <div className="inner">
              <h4>Snake</h4>
              <p>
                The classic arcade game, Snake! Made with Python using the
                Turtle package. This inspired me to try to recreate other arcade
                games like Tetris!
              </p>
            </div>
          </article>
          <article>
            <a href="https://github.com/drok22/Tetris" className="image">
              <img src="src/images/tetris01.png" alt="" />
            </a>
            <div className="inner">
              <h4>Tetris</h4>
              <p>
                Very much still a work in progress, this is my attempt at
                recreating Tetris in Python. The game board itself is very
                simple, but the game rules have proven to be more of a challenge
                to implement here.
              </p>
            </div>
          </article>
          <article>
            <a
              href="https://github.com/drok22/guitarTuneWindows"
              className="image"
            >
              <img src="src/images/guitarBroPy01.png" alt="" />
            </a>
            <div className="inner">
              <h4>Guitar Bro</h4>
              <p>
                Silly name, helpful app. I made when I was using Visual Studio
                for the first time. A guitar-tuning and scale visualization
                tool. Not a music theory master? You can use this simple utility
                to help find a guitar tuning and hit all the right notes for
                your composition. I liked writing this app so much the first
                time I wrote it again while learning to build tkinter UIs for
                Python!
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;
