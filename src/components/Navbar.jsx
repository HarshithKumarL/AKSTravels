import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleScrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "services",
        "clients",
        "contact",
        "quote",
      ];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    const updateActiveSectionFromRoute = () => {
      const hash = location.hash.replace("#", "") || "home";
      setActiveSection(hash);
    };

    if (!location.pathname.startsWith("/project/")) {
      window.addEventListener("scroll", handleScroll);
    }

    window.addEventListener("hashchange", updateActiveSectionFromRoute);

    updateActiveSectionFromRoute();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", updateActiveSectionFromRoute);
    };
  }, [location]);

  const navItems = [
    { label: "Home", section: "home", href: "/" },
    { label: "About", section: "about" },
    { label: "Services", section: "services" },
    { label: "Clients ", section: "clients" },
    { label: "Contact", section: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-2">
        <div className="flex-shrink-0">
          <div
            style={{
              fontFamily: '"Protest Strike", serif',
              fontSize: "24px",
              color: "white",
            }}
          >
            AKS TRAVELS
          </div>
        </div>
        <ul className="hidden md:flex justify-center space-x-8 text-[15px] flex-grow cursor-pointer">
          {navItems.map((item) => (
            <li key={item.section}>
              <button
                onClick={() => {
                  setActiveSection(item.section);
                  handleScrollToSection(item.section);
                }}
                className={`montserrat-uniquifier relative text-white tracking-wide transition duration-300 ${
                  activeSection === item.section
                    ? "after:w-full"
                    : "hover:text-[#d16002]"
                } after:block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:h-[3px] after:bg-[#d16002] after:transition-all after:duration-500`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* <button className="hidden md:block bg-[#041d56] text-white px-4 py-2 rounded-md font-urbanist">
          GET QUOTE
        </button> */}

        {/* Hamburger section */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#d15f02a8] shadow-md absolute w-full top-14 left-0">
            <ul className="flex flex-col items-center py-4 space-y-4 text-[18px] font-medium">
              {navItems.map((item) => (
                <li key={item.section}>
                  <button
                    onClick={() => {
                      setActiveSection(item.section);
                      handleScrollToSection(item.section);
                      setIsMenuOpen(false);
                    }}
                    className={`montserrat-uniquifier tracking-wide transition duration-300 ${
                      activeSection === item.section
                        ? "text-[#d16002]"
                        : "text-white hover:text-[#d16002]"
                    }`}
                    style={{ fontFamily: '"Montserrat", serif ' }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    setActiveSection("quote");
                    handleScrollToSection("quote");
                    setIsMenuOpen(false);
                  }}
                  className="montserrat-uniquifier tracking-wide transition duration-300 text-white hover:text-[#d16002]"
                >
                  Get Quote
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
