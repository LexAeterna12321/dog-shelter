import React from "react";
import { NavLink, withRouter } from "react-router-dom";
const Navbar = ({ dogs }) => {
  const handleClick = e => {
    e.target.parentNode.classList.toggle("Navbar--active");
  };

  const renderLinks = dogs.map(dog => {
    return (
      <NavLink
        key={dog.name}
        activeClassName="Navbar__link--active"
        to={`/dogs/${dog.name.toLowerCase()}`}
        className="Navbar__link"
      >
        {dog.name}
      </NavLink>
    );
  });

  const renderLogo =
    window.innerWidth <= 600 ? (
      <h2 className="Navbar__h2" onClick={handleClick}>
        Dog Shelter &darr;
      </h2>
    ) : (
      <h2 className="Navbar__h2" onClick={handleClick}>
        Dog Shelter
      </h2>
    );
  return (
    <nav className="Navbar">
      {renderLogo}
      <div className="Navbar__links">
        <NavLink
          activeClassName="Navbar__link--active"
          to="/dogs/home"
          className="Navbar__link"
        >
          Home
        </NavLink>
        {renderLinks}
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
