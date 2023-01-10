import "./Sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  return (
    <div className="sidebar">
     <Link className="sidebar__logo"><FontAwesomeIcon icon={faBook}></FontAwesomeIcon></Link>
     <nav>
     <NavLink
          exact="true"
          activeclassname="active"
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#CD8A39"></FontAwesomeIcon>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/books"
        >
          <FontAwesomeIcon icon={faBook} color="#CD8A39"></FontAwesomeIcon>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/search"
        >
          <FontAwesomeIcon icon={faSearch} color="#CD8A39"></FontAwesomeIcon>
        </NavLink>
        </nav>
    </div>
  )
}

export default Sidebar