
function Projects() {
  const projects = [
    {
      number: "01",
      title: "Job Portal",
      description:
        "A full-stack job portal application developed as part of my Full-Stack Java course, focusing on connecting job seekers and recruiters through a web-based platform.",
      technologies: ["Java", "Spring Boot", "React.js", "MySQL"],
      image: "/images/job-portal.png",
      github:
        "https://github.com/samruddhiiii23/Job-Portal-Full-Stack",
    },
    {
      number: "03",
      title: "Career Path Recommendation System",
      description:
        "A web-based project designed to help users explore career opportunities and build a clearer path toward their professional goals.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: "/images/careerpath.png",
      github: "https://github.com/samruddhiiii23/Career-Path",
    },

  ];

  const templates = [
    {
      number: "01",
      title: "Construction",
      technologies: "HTML • CSS • BOOTSTRAP",
      className: "construction-template",
      link: "https://samruddhiiii23.github.io/Responsive-Web-Templates/Construction/",
    },
    {
      number: "02",
      title: "E-Bike",
      technologies: "HTML • CSS • BOOTSTRAP",
      className: "bike-template",
      link: "https://samruddhiiii23.github.io/Responsive-Web-Templates/Bike/",
    },
    {
      number: "03",
      title: "Game",
      technologies: "HTML • CSS • BOOTSTRAP",
      className: "game-template",
      link: "https://samruddhiiii23.github.io/Responsive-Web-Templates/Game/",
    },
    {
      number: "04",
      title: "Dance",
      technologies: "HTML • CSS • BOOTSTRAP",
      className: "dance-template",
      link: "https://samruddhiiii23.github.io/Responsive-Web-Templates/Dance/",
    },
    {
      number: "05",
      title: "Hospital",
      technologies: "HTML • CSS",
      className: "hospital-template",
      link: "https://samruddhiiii23.github.io/Responsive-Web-Templates/Hospital/",
    },
    {
      number: "06",
      title: "Bank",
      technologies: "HTML • CSS",
      className: "bank-template",
      link: "https://samruddhiiii23.github.io/Responsive-Web-Templates/Bank/",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">

        <div className="section-heading">
          <p className="section-subtitle">SELECTED WORK</p>

          <h2>
            Projects <span>& Work</span>
          </h2>

          <p className="section-description">
            A collection of projects where I have applied my
            technical skills to build practical solutions.
          </p>
        </div>

        <div className="projects-list">

          {/* =====================================
              01 — JOB PORTAL
          ===================================== */}

          <div className="project-card">
            <div className="project-visual">
              <div className="project-window">

                <div className="window-header">
                  <div className="window-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <span className="window-title">
                    {projects[0].title}
                  </span>
                </div>

                <div className="project-image-wrapper">
                  <img
                    src={projects[0].image}
                    alt={`${projects[0].title} project`}
                    className="project-image"
                  />
                </div>

              </div>
            </div>

            <div className="project-info">
              <div className="project-meta">
                <span className="project-category">
                  {projects[0].category}
                </span>

                <span
                  className={`project-status ${projects[0].statusClass}`}
                >
                  {projects[0].status}
                </span>
              </div>

              <h3 className="project-title">
                {projects[0].title}
              </h3>

              <p className="project-description">
                {projects[0].description}
              </p>

              <div className="project-technologies">
                {projects[0].technologies.map(
                  (technology, techIndex) => (
                    <span
                      className="technology-pill"
                      key={techIndex}
                    >
                      {technology}
                    </span>
                  )
                )}
              </div>

              <a
                href={projects[0].github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* =====================================
              02 — RESPONSIVE WEB TEMPLATES
          ===================================== */}

          <div className="template-collection-card">

            <div className="template-collection-header">
              <div>
                <p className="project-category">
                  FRONTEND DEVELOPMENT COLLECTION
                </p>

                <h3>Responsive Web Templates</h3>

                <p className="template-collection-description">
                  A collection of responsive websites built
                  using HTML, CSS and Bootstrap, showcasing
                  different layouts and frontend development skills.
                </p>
              </div>
            </div>

            {/* ALL SIX TEMPLATES IN REQUESTED ORDER */}

            <div className="template-grid two-columns">
              {templates.map((template) => (
                <div
                  className={`template-mini-card ${template.className}`}
                  key={template.title}
                >
                  <div className="template-mini-overlay">
                    <span>{template.number}</span>
                  </div>

                  <div className="template-mini-content">
                    <span>{template.technologies}</span>

                    <h4>{template.title}</h4>

                    <a
                      href={template.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="template-project-link"
                    >
                      View Project
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* =====================================
              03, 04, 05 — REMAINING PROJECTS
          ===================================== */}

          {projects.slice(1).map((project) => (
            <div className="project-card" key={project.title}>

              <div className="project-visual">
                <div className="project-window">

                  <div className="window-header">
                    <div className="window-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <span className="window-title">
                      {project.title}
                    </span>
                  </div>

                  <div className="project-image-wrapper">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.title} project`}
                        className="project-image"
                      />
                    ) : (
                      <div className="project-placeholder">
                        <span className="project-number">
                          {project.number}
                        </span>

                        <h3>{project.title}</h3>
                        <p>Project preview</p>
                      </div>
                    )}
                  </div>

                </div>
              </div>

              <div className="project-info">
                <div className="project-meta">
                  <span className="project-category">
                    {project.category}
                  </span>

                  <span
                    className={`project-status ${project.statusClass}`}
                  >
                    {project.status}
                  </span>
                </div>

                <h3 className="project-title">
                  {project.title}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map(
                    (technology, techIndex) => (
                      <span
                        className="technology-pill"
                        key={techIndex}
                      >
                        {technology}
                      </span>
                    )
                  )}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                    <span>↗</span>
                  </a>
                )}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;
