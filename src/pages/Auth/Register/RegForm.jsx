import React from "react";
import styles from "../../../Styles/Form.module.css";
import { Link } from "react-router-dom";
function RegForm() {
  return (
    <form className={styles}>
      <div className={styles.input_details}>
        <div className={styles.full_name}>
        <label htmlFor=""></label>
        <input type="text" />
        </div>
        <div className={styles.email}>
        <label htmlFor=""></label>
        <input type="email" />
        </div>
        <div className={styles.phone_no}>
        <label htmlFor=""></label>
        <input type="text" />
        </div>
        <div className={styles.role}>
        <label htmlFor=""></label>
        <input type="text" />
        </div>
        <div className={styles.password}>
          <div className={styles.password_input}>
          <input type="text" />
          </div>
          <div className={styles.eye_icon}></div>
        </div>
      </div>
      <div className={styles.navigation_details}>
        <div className={styles}>
        <Link to="/">Sign in</Link>
        </div>
        <button className={styles}>Register</button>
      </div>
    </form>
  );
}

export default RegForm;
