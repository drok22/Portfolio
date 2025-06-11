function NonProfessional({ section }: { section: string }) {
  return (
    <section id={section}>
      <div className="container">
        <h3>Non-Professional</h3>
        <p>Some things I do while not writing code</p>
        <div className="features">
          <article>
            <a
              href="https://www.strava.com/athletes/108866081"
              className="image"
            >
              <img src="src/images/halfsy01.jpg" alt="" />
            </a>
            <div className="inner">
              <h4>Running</h4>
              <p>
                I began running in 2020 when my access to the gym became
                limited, and really fell in love with it. You'll find me on the
                trails in the early mornings or if I can squeak some time in
                during my lunch break. My favorite race is the half marathon.
                Long enough to need some serious training for, but short enough
                to keep the rest of my life in balance. Check out my Strava!
              </p>
            </div>
          </article>
          <article>
            <iframe
              width="366"
              height="225"
              src="https://www.youtube.com/embed/XZSNdmmXyGM?si=6nVNystf0QoMo8QA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen={true}
            ></iframe>
            <div className="inner">
              <h4>The World Without Us</h4>
              <p>
                I started playing in a band called The World Without Us with
                Drew, Cole, Brett and Isaac in 2021. We're a blend of metalcore
                with intimate moments and deeply soul-searching lyrics. Check us
                out on YouTube or wherever you stream your music!
              </p>
            </div>
          </article>
          <article>
            <a href="" className="image">
              <img src="src/images/emmett_zoe01.jpg" alt="" />
            </a>
            <a href="" className="image">
              <img src="src/images/dustin_jenny01.jpg" alt="" />
            </a>
            <div className="inner">
              <h4>The Fam</h4>
              <p>
                I met my wife Jenny in 2012 at Concordia University in NE and we
                have a 6 year old dachsund (Zoe), and a 6 month old son(Emmett)!
                Being a new dad has been quite the adventure, but as most would
                say, totally worth it!
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default NonProfessional;
