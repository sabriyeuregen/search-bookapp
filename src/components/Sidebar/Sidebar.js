import "./Sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faHome,
  faSearch,
  faBookOpen,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="sidebar">
      <Link>
        <FontAwesomeIcon className="sidebar__logo" icon={faBookOpen} />
      </Link>
      <nav className={showNav ? "mobile-show" : ""}>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#CD8A39"></FontAwesomeIcon>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/books"
          className="books-link"
        >
          <FontAwesomeIcon icon={faBook} color="#CD8A39"></FontAwesomeIcon>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/search"
          className="search-link"
        >
          <FontAwesomeIcon icon={faSearch} color="#CD8A39"></FontAwesomeIcon>
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#CD8A39"
          size="3px"
          className="close-icon"
        />
      </nav>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#cd8a39"
        size="12px"
        className="hamburger-icon"
      />
    </div>
  );
};

export default Sidebar;
