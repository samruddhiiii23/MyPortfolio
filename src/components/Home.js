import profile from "../assets/images/profile.png";

function Home() {
  return (
    <section id="home" className="home-section">

      {/* Background Glow */}
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      <div className="container">
        <div className="row align-items-center min-vh-100">

          {/* Left Side */}
          <div className="col-lg-7 hero-content">

            <p className="hero-greeting">
              Hi, I'm
            </p>

            <h1 className="hero-name">
              Samruddhi <span>Lomate</span>
            </h1>

            <h2 className="hero-title">
              Java Full Stack Developer
              
              
            </h2>

            <p className="hero-description">
              Passionate about building practical, user-focused applications
              and turning ideas into meaningful digital solutions.
            </p>

            {/* Buttons */}
           <div className="hero-buttons">

  <a
    href="#projects"
    className="btn-primary-custom"
  >
    View Projects
    <span className="button-arrow">→</span>
  </a>

  <a
    href="/Samruddhi_Lomate_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-resume"
  >
    View Resume
    <span className="button-arrow">↗</span>
  </a>

</div>

            {/* Highlights */}
            <div className="hero-highlights">

              <div className="highlight-item">
                <h4>5+</h4>
                <p>Projects</p>
              </div>

              <div className="highlight-item">
                <h4>2</h4>
                <p>Internships</p>
              </div>

              <div className="highlight-item">
                <h4>8.52</h4>
                <p>CGPA</p>
              </div>

              <div className="highlight-item">
                <h4>2026</h4>
                <p>Graduate</p>
              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="col-lg-5 text-center">

            <div className="profile-wrapper">

              <div className="profile-ring"></div>

              <div className="profile-container">

                <img
                  src={profile}
                  alt="Samruddhi Lomate"
                  className="profile-image"
                />

              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

export default Home;