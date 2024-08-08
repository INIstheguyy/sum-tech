import React from "react";
import styles from "../Styles/SideNav.module.css";
import { NavLink } from "react-router-dom";
import logo from "../Assets/icon/sumtech-logo.svg"
function SideNav() {
  return (
    <div className={styles.sidenav}>
      <div className={styles.content}>
        <div className={styles.logo_wrapper}>
          <div className={styles.log_content}>
          <img style={{width:"30px"}} src={logo} alt="" />
          <p>Summtech Pro</p>
          </div>
        </div>
        <div className={styles.menu_wrapper}>
          <div className={styles.menu_content}>
            <NavLink></NavLink>
            <NavLink></NavLink>
            <NavLink></NavLink>
            <NavLink></NavLink>
            <NavLink></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
