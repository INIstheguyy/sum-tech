import React from "react";
import styles from "../Styles/SideNav.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../Assets/icon/sum-tech-home.svg";
function SideNav() {
  const navaigate = useNavigate()
  return (
    <div className={styles.sidenav}>
      <div className={styles.content}>
        <div className={styles.logo_wrapper}>
          <div className={styles.logo_content}>
            <img  src={logo} alt="" />
          </div>
        </div>
        <div className={styles.menu_wrapper}>
          <div className={styles.menu_content}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.nav_link
              }
              to="/Overview"
            >
              Overview
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.nav_link
              }
              to="/Location"
            >
              Location
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.nav_link
              }
              to="/Devices"
            >
              Devices
            </NavLink>
           
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.nav_link
              }
              to="/Staff"
            >
              Staff
            </NavLink>
            <button onClick={() => navaigate("/")} className={styles.logout}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
