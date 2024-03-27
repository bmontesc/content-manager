import React, { useState } from 'react';
import "./NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="navbar">
      <Link to="/" className="title">
        <img src="rankia-logo.png" alt="Logo rankia" />
        <h1>Content Manager</h1>
      </Link>
      <div className="links">
        <Link to="/content"><h3>Parent Content</h3></Link>
        <Link to="/translatedContent"><h3>Translated Content</h3></Link>
        {/* Implementación del menú desplegable respetando estilos existentes */}
        <div className="dropdown" onClick={toggleDropdown}>
          <h3>Content Planning</h3>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/newcontent"><h3>Plan Content</h3></Link>
              <Link to="/planification"><h3>Planification</h3></Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
