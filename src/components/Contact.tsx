function Contact({ section }: { section: string }) {
  return (
    <section id={section}>
      <div className="container">
        <h3>Contact Me</h3>
        <p>
          You can use this form to conveniently send me an email message, or you
          can find all my links in the side menu of this page. Thanks for
          stopping by!
        </p>
        <form method="post" action="#">
          <div className="row gtr-uniform">
            <div className="col-6 col-12-xsmall">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="col-6 col-12-xsmall">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="col-12">
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
              />
            </div>
            <div className="col-12">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows={6}
              ></textarea>
            </div>
            <div className="col-12">
              <ul className="actions">
                <li>
                  <input
                    type="submit"
                    className="primary"
                    value="Send Message"
                  />
                </li>
                <li>
                  <input type="reset" value="Reset Form" />
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
