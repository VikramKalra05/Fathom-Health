import { Link, useLocation } from "react-router-dom";
import styles from "./navbar.module.css";

export default function Navbar() {
  const location = useLocation();

  const isPageActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navLogo}>
        <Link to="/">
          <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5ee401ee1f08215e6dbf0661_color-lettermark.svg" alt="Fathom" />
        </Link>
      </div>
      <div className={styles.navPages}>
        <NavLink to="/services" isActive={isPageActive("/services")}>SERVICES</NavLink>
        <NavLink to="/security" isActive={isPageActive("/security")}>SECURITY</NavLink>
        <NavLink to="/team" isActive={isPageActive("/team")}>TEAM</NavLink>
        <NavLink to="/careers" isActive={isPageActive("/careers")}>CAREERS</NavLink>
        <NavLink to="/insights" isActive={isPageActive("/insights")}>INSIGHTS</NavLink>
        <NavLink to="/contact" isActive={isPageActive("/contact")}>CONTACT</NavLink>
      </div>
    </div>
  );
}

function NavLink({ to, isActive, children }) {
  return (
    <Link to={to} className={isActive ? styles.activePage : ""}>
      {children}
    </Link>
  );
}

// import {Link, NavLink} from "react-router-dom";
// import styles from "./navbar.module.css"

// export default function Navbar(){

//     return (
//         <div className={styles.navbar}>
//             <div className={styles.navLogo}>
//                 <Link to="/">
//                     <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5ee401ee1f08215e6dbf0661_color-lettermark.svg" alt="Fathom" />
//                 </Link>
//             </div>
//             <div className={styles.navPages}>
//                 <NavLink to="/services" activeClassName={styles.activePage}>SERVICES</NavLink>
//                 <NavLink to="/security" activeClassName={styles.activePage}>SECURITY</NavLink>
//                 <NavLink to="/team" activeClassName={styles.activePage}>TEAM</NavLink>
//                 <NavLink to="/careers" activeClassName={styles.activePage}>CAREERS</NavLink>
//                 <NavLink to="/insights" activeClassName={styles.activePage}>INSIGHTS</NavLink>
//                 <NavLink to="/contact" activeClassName={styles.activePage}>CONTACT</NavLink>
//             </div>
//         </div>
//     )
// }
