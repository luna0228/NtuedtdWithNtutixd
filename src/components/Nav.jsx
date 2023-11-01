import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav({ school }) {
  return (
    <nav className={styles.nav}>
      <ul>
        <div
          className={styles.a_active_box}
          style={school == "ntue" ? { right: "3px" } : { left: "3px" } }
        ></div>
        
        
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.a_active : styles.a_active_gray )}
            to="/works/ntut"
          >
            {/* {[..."NTUT"].map((ele, idx) => (
              <span key={`text-${idx}-${ele}`}>
                {ele}
              </span>
            ))} */}
            NTUT
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.a_active : styles.a_active_gray)}
            to="/works/ntue"
          >
            {/* {[..."NTUE"].map((ele, idx) => (
              <span key={`text-${idx}-${ele}`}>
                {ele}
              </span>
            ))} */}
            NTUE
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;