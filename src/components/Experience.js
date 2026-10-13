function Experience() {

  const experiences = [
    {
      year: "July 2025 – Aug 2026",
      title: "Java Full-Stack Developer Intern",
      company: "TechFusion Computer Training Institute LLP",
      description:
        "Worked on full-stack web development with hands-on experience in frontend technologies, Java, databases, API integration and software development practices. Worked with HTML5, CSS3, Bootstrap, JavaScript, jQuery, React.js, Core Java, Advanced Java, JDBC, Spring, Spring Boot, Spring Data JPA and MySQL.",
      technologies: [
        "Java",
        "Spring Boot",
        "React.js",
        "MySQL"
      ]
    },

    {
      year: "Jan 2025 – Feb 2025",
      title: "Front-End Web Developer Intern",
      company: "Cordon Technologies Pvt Ltd, Pune",
      description:
        "Implemented responsive user interfaces using HTML5, CSS3, JavaScript and Bootstrap, ensuring compatibility across various browsers and devices. Utilized Git and GitHub for version control and gained practical experience in problem-solving, debugging and SDLC principles.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "Git",
        "GitHub"
      ]
    }
  ];


  return (
    <section id="experience" className="experience-section">

      <div className="container">

        {/* Section Heading */}

        <div className="section-heading text-center">

          <p className="section-subtitle">
            MY JOURNEY
          </p>

          <h2>
            Experience & <span>Growth</span>
          </h2>

          <p className="section-description">
            Experiences that have helped me grow as a developer.
          </p>

        </div>


        {/* Experience Timeline */}

        <div className="experience-timeline">

          {experiences.map((experience, index) => (

            <div
              className="experience-item"
              key={index}
            >

              {/* Timeline Marker */}

              <div className="experience-marker">

                <span>
                  0{index + 1}
                </span>

              </div>


              {/* Experience Card */}

              <div className="experience-card">

                <div className="experience-top">

                  <span className="experience-year">
                    {experience.year}
                  </span>

                </div>


                <h3>
                  {experience.title}
                </h3>


                <h4>
                  {experience.company}
                </h4>


                <p>
                  {experience.description}
                </p>


                {/* Technologies */}

                <div className="experience-technologies">

                  {experience.technologies.map(
                    (technology, techIndex) => (

                      <span key={techIndex}>
                        {technology}
                      </span>

                    )
                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;