import React from "react";
import styles from "../../../Styles/Form.module.css";
import { Link } from "react-router-dom";
function RegForm() {
  return (
    <form className={styles}>
      <div className={styles.input_details}>
        <div className={styles.full_name}>
        <label htmlFor="">Full name</label>
        <input type="text" />
        </div>
        <div className={styles.email}>
        <label htmlFor="">Email</label>
        <input type="email" />
        </div>
        <div className={styles.phone_no}>
        <label htmlFor="">Phone Number</label>
        <input type="text" />
        </div>
        <div className={styles.role}>
        <label htmlFor="">Role</label>
        <input type="text" />
        </div>
        <div className={styles.password}>
          <div className={styles.password_input}>
          <label htmlFor="">Password</label>
          <input type="text" />
          </div>
          <div className={styles.eye_icon}></div>
        </div>
      </div>
      <div className={styles.navigation_details}>
        <div className={styles}>
        <Link to="/">Sign in</Link>
        </div>
        <button className={styles.btn}>Register</button>
      </div>
    </form>
  );
}

export default RegForm;
