import { useState } from "react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" }
  ];


  const handleScroll = (id) => {

    const section = document.getElementById(id);

    if (section) {

      section.scrollIntoView({
        behavior: "smooth"
      });

    }

    // Close mobile menu after clicking
    setMenuOpen(false);
  };


  return (

    <nav className="navbar fixed-top">

      <div className="container">

        {/* Logo */}

        <button
          className="navbar-brand"
          onClick={() => handleScroll("home")}
        >
          <span>S</span>amruddhi
        </button>


        {/* Desktop Navigation */}

        <div className="navbar-links">

          {navItems.map((item, index) => (

            <button
              key={index}
              className="nav-link-custom"
              onClick={() => handleScroll(item.id)}
            >
              {item.name}
            </button>

          ))}

        </div>


        {/* Mobile Menu Button */}

        <button
          className={`mobile-menu-button ${
            menuOpen ? "active" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >

          <span></span>
          <span></span>
          <span></span>

        </button>


        {/* Mobile Navigation */}

        <div
          className={`mobile-nav ${
            menuOpen ? "mobile-nav-open" : ""
          }`}
        >

          {navItems.map((item, index) => (

            <button
              key={index}
              className="mobile-nav-link"
              onClick={() => handleScroll(item.id)}
            >
              {item.name}
            </button>

          ))}

        </div>

      </div>

    </nav>

  );
}

export default Navbar;