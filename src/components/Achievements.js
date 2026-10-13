
function Achievements() {
  const achievements = [
    {
      icon: "◈",
      title: "SAP Certified - Back-End Developer - ABAP Cloud",
      type: "SAP Certification • Apr 2026 – Apr 2027",
      description:
        "Certified in ABAP, RESTful application development (RAP), and Clean Core principles for SAP S/4HANA.",
      certificate: "/images/certificates/sap-abap-cloud.pdf",
      verificationLink:
        "https://www.credly.com/badges/95006000-d4d9-42d7-80e9-368f5b8effd7",
    },

    {
      icon: "★",
      title: "SAP Code Unnati Innovation Marathon",
      type: "National Level • Top 5 Finalist • 2026",
      description:
        "Achieved Top 5 finalist recognition for SafeRail Vision, an AI-IoT railway safety solution.",
    },

    {
      icon: "✦",
      title: "EPAM India Scholarship for Women in Tech",
      type: "Scholarship • 2026",
      description:
        "Selected for the EPAM India Women in Tech Scholarship after successfully clearing the selection interview.",
    },

    {
      icon: "✧",
      title: "Generative AI for Software Developers",
      type: "Microsoft • November 2025",
      description:
        "Learned to use Generative AI and GitHub Copilot for coding, code reviews, and documentation.",
      certificate:
        "/images/certificates/microsoft-generative-ai.pdf",
      verificationLink:
        "https://coursera.org/verify/MSMO4R56BIPY",
    },

    {
      icon: "☕",
      title: "Full Stack Java Development",
      type: "TechFusion • Jan–Aug 2026",
      description:
        "Completed practical training in Java, Spring Boot, frontend development, databases, and REST APIs.",
    },

    {
      icon: "⌘",
      title: "Introduction to Software Engineering",
      type: "IBM • November 2025",
      description:
        "Learned software engineering fundamentals and structured software development practices.",
      certificate:
        "/images/certificates/ibm-software-engineering.pdf",
      verificationLink:
        "https://coursera.org/verify/KQOEDEGSDOJG",
    },

    {
      icon: "▤",
      title: "Introduction to Software, Programming, and Databases",
      type: "IBM • November 2025",
      description:
        "Covered programming fundamentals, software concepts, and database basics.",
      certificate:
        "/images/certificates/ibm-software-programming-databases.pdf",
      verificationLink:
        "https://coursera.org/verify/90TE0HYZG5OM",
    },
  ];

  return (
    <section
      id="achievements"
      className="achievements-section"
    >
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading text-center">
          <p className="section-subtitle">
            MILESTONES
          </p>

          <h2>
            Achievements & <span>Certifications</span>
          </h2>

          <p className="section-description">
            Certifications, achievements, and learning
            experiences that have shaped my technical journey.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div
              className="achievement-card"
              key={achievement.title}
            >
              {/* Icon */}
              <div className="achievement-icon">
                {achievement.icon}
              </div>

              {/* Number */}
              <span className="achievement-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <h3>
                {achievement.title}
              </h3>

              <p className="achievement-type">
                {achievement.type}
              </p>

              <p className="achievement-description">
                {achievement.description}
              </p>

              {/* View Certificate */}
              {achievement.certificate && (
                <div className="certificate-actions">
                  <a
                    href={achievement.certificate}
                    className="certificate-view-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate <span>↗</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
