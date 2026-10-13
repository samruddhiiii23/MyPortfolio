function Contact() {

  return (
    <section id="contact" className="contact-section">

      <div className="container">

        {/* Section Heading */}

        <div className="section-heading text-center">

          <p className="section-subtitle">
            GET IN TOUCH
          </p>

          <h2>
            Let's <span>Connect</span>
          </h2>

          <p className="section-description">
            Interested in working together or have an opportunity
            to share? Feel free to reach out.
          </p>

        </div>


        {/* Contact Content */}

        <div className="contact-content">

          <div className="contact-intro">

            <h3>
              Let's build something
              <span> meaningful.</span>
            </h3>

            <p>
              I'm always open to exploring new opportunities,
              collaborating on interesting projects and connecting
              with people in the technology space.
            </p>

          </div>


          {/* Contact Details */}

          <div className="contact-details">

            {/* Email */}

            <a
              href="mailto:samruddhilomate500@gmail.com"
              className="contact-item"
            >

              <div className="contact-icon">
                ✉
              </div>

              <div>

                <span className="contact-label">
                  Email
                </span>

                <p>
                  samruddhilomate500@gmail.com
                </p>

              </div>

              <span className="contact-arrow">
                ↗
              </span>

            </a>


            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/samruddhi-lomate-b26552328"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >

              <div className="contact-icon">
                in
              </div>

              <div>

                <span className="contact-label">
                  LinkedIn
                </span>

                <p>
                  Connect with me on LinkedIn
                </p>

              </div>

              <span className="contact-arrow">
                ↗
              </span>

            </a>


            {/* GitHub */}

            <a
              href="https://github.com/samruddhiiii23"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >

              <div className="contact-icon">
                ◇
              </div>

              <div>

                <span className="contact-label">
                  GitHub
                </span>

                <p>
                  Explore my projects
                </p>

              </div>

              <span className="contact-arrow">
                ↗
              </span>

            </a>

          </div>

        </div>


        {/* Footer */}

        <div className="contact-footer">

          <p>
            © 2026 Samruddhi Lomate. Built with React.
          </p>

          <p>
            Designed & Developed by Samruddhi
          </p>

        </div>

      </div>

    </section>
  );
}

export default Contact;