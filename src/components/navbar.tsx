function NavBar() {
  type SectionId = "home" | "about" | "project" | "testimonial" | "contact";

  const scrollToSection = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full fixed flex justify-center items-center top-6 z-[9999] pointer-events-auto">
      <div className="w-[451px] h-[66px] flex flex-row rounded-xl justify-center border shadow border-white shadow-indigo-500/50 bg-[linear-gradient(90deg,#0C0E23,#04071D)] backdrop-blur-md">
        <ul className="flex gap-6 text-white font-medium items-center">
          <li 
            onClick={() => scrollToSection("home")} 
            className="cursor-pointer hover:text-indigo-300 transition"
          >
            Home
          </li>
          <li 
            onClick={() => scrollToSection("about")} 
            className="cursor-pointer hover:text-indigo-300 transition"
          >
            About
          </li>
          <li 
            onClick={() => scrollToSection("project")} 
            className="cursor-pointer hover:text-indigo-300 transition"
          >
            Project
          </li>
         
          <li 
            onClick={() => scrollToSection("contact")} 
            className="cursor-pointer hover:text-indigo-300 transition"
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;

