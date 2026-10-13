import { useState } from "react";

function Skills() {

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces.",
      skills: [
        { name: "HTML", percentage: 90 },
        { name: "CSS", percentage: 88 },
        { name: "Bootstrap", percentage: 80 },
        { name: "JavaScript", percentage: 78 },
        { name: "jQuery", percentage: 75 },
        { name: "React.js", percentage: 75 }
      ]
    },

    backend: {
      title: "Java & Backend",
      description: "Developing backend applications with Java and Spring.",
      skills: [
        { name: "Core Java", percentage: 85 },
        { name: "Advanced Java", percentage: 80 },
         { name: "OOP", percentage: 85 },
        { name: "JDBC", percentage: 78 },
        { name: "Spring Boot", percentage: 78 },
         { name: "Hibernate", percentage: 75 },
        { name: "Spring Data JPA", percentage: 75 },
         { name: "REST APIs", percentage: 80 },
      ]
    },

    database: {
      title: "Database",
      description: "Working with relational databases and data management.",
      skills: [
        { name: "MySQL", percentage: 80 }
      ]
    }
  };


  const [activeCategory, setActiveCategory] = useState("frontend");

  const [activeSkill, setActiveSkill] = useState(
    skillCategories.frontend.skills[0]
  );


  const category = skillCategories[activeCategory];


  const handleCategoryChange = (categoryName) => {

    setActiveCategory(categoryName);

    setActiveSkill(
      skillCategories[categoryName].skills[0]
    );
  };


  return (
    <section id="skills" className="skills-section">

      <div className="container">

        {/* Section Heading */}

        <div className="section-heading text-center">

          <p className="section-subtitle">
            MY TOOLKIT
          </p>

          <h2>
            Skills & <span>Technologies</span>
          </h2>

          <p className="section-description">
            Technologies I've learned and worked with throughout
            my academic and development journey.
          </p>

        </div>


        {/* Category Navigation */}

        <div className="skill-category-tabs">

          <button
            className={
              activeCategory === "frontend"
                ? "skill-tab active"
                : "skill-tab"
            }
            onClick={() => handleCategoryChange("frontend")}
          >
            Frontend
          </button>


          <button
            className={
              activeCategory === "backend"
                ? "skill-tab active"
                : "skill-tab"
            }
            onClick={() => handleCategoryChange("backend")}
          >
            Java & Backend
          </button>


          <button
            className={
              activeCategory === "database"
                ? "skill-tab active"
                : "skill-tab"
            }
            onClick={() => handleCategoryChange("database")}
          >
            Database
          </button>

        </div>


        {/* Skills Content */}

        <div className="skills-showcase">

          {/* Left - Donut */}

          <div className="skill-donut-area">

            <div
              className="skill-donut"
              style={{
                "--skill-percentage":
                  `${activeSkill.percentage * 3.6}deg`
              }}
            >

              <div className="skill-donut-inner">

                <span className="donut-percentage">
                  {activeSkill.percentage}%
                </span>

                <span className="donut-skill-name">
                  {activeSkill.name}
                </span>

              </div>

            </div>

            <p className="proficiency-label">
              Estimated proficiency
            </p>

          </div>


          {/* Right - Skill List */}

          <div className="skill-list-area">

            <h3>
              {category.title}
            </h3>

            <p className="skill-category-description">
              {category.description}
            </p>


            <div className="skill-pills">

              {category.skills.map((skill, index) => (

                <button
                  key={index}
                  className={
                    activeSkill.name === skill.name
                      ? "skill-pill active"
                      : "skill-pill"
                  }
                  onClick={() => setActiveSkill(skill)}
                >

                  <span className="skill-pill-dot"></span>

                  {skill.name}

                </button>

              ))}

            </div>


            <div className="skill-hint">
              <span>✦</span>
              Select a technology to explore its proficiency
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;