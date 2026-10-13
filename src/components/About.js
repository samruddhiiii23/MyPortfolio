function About() {
  return (
    <section id="about" className="about-section">

      <div className="container">

        {/* Section Heading */}
        <div className="section-heading text-center">

          <p className="section-subtitle">
            GET TO KNOW ME
          </p>

          <h2>
            About <span>Me</span>
          </h2>

          <p className="section-description">
            A little about my journey, interests and what I bring as a developer.
          </p>

        </div>


        <div className="row align-items-center about-content">

          {/* Left Side - Education Card */}
          <div className="col-lg-5">

            <div className="about-journey-card">

              <div className="journey-icon education-icon">
                🎓
              </div>

              <h3>
                Education
              </h3>

              <div className="education-details">

                <h4>
                  Bachelor of Engineering (B.E.)
                </h4>

                <p className="education-branch">
                  Computer
                </p>

                <p className="education-years">
                  2022 – 2026
                </p>

                <p className="education-college">
                  PDEA's College of Engineering,
                  <br />
                  Manjari, Pune
                </p>

                <p className="education-university">
                  Savitribai Phule Pune University (SPPU)
                </p>

              </div>

              <div className="journey-line"></div>

              <div className="education-result">

                <div className="education-score">
                  <span>CGPA - </span>
                  <strong>8.52 </strong>
                </div>

              </div>

            </div>

          </div>


          {/* Right Side - About Text */}
          <div className="col-lg-7">

            <div className="about-text">

              <h3>
                Building with curiosity,
                <span> learning with purpose.</span>
              </h3>

              <p>
                I’m a Computer Engineering graduate with a strong interest
                in full-stack development and a passion for turning ideas
                into practical solutions.
              </p>

              <p>
                I have completed my Full-Stack Java development training,
                gaining hands-on experience with Java, Spring, Spring Boot,
                React.js, MySQL and modern web technologies.
              </p>

              <p>
                Throughout my academic journey, I’ve worked on projects
                ranging from responsive web development to AI and IoT-based
                solutions. My final-year project, <strong>Alert Eye</strong>,
                combines computer vision, IoT and assistive technology.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;