import React from "react";
import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";
import NavLinks from "./NavLinks";
function Navbar() {
  const { openSidebar, setPageId } = useGlobalContext();
  const handleSubmenu = (e) => {
    if(!e.target.classList.contains('nav-link')){
      setPageId(null);
    }
  };

  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
}

export default Navbar;
