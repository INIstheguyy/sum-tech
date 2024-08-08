import React from "react";
import styles from "../../../Styles/Form.module.css";
import { Link } from "react-router-dom";

function Form() {
  return (
    <form>
      <div className={styles.input}>
        <div className={styles.email}>
          <label htmlFor=""></label>
          <input type="text" />
        </div>
        <div className={styles.password}>
          <div className={styles}>
            <label htmlFor=""></label>
            <input type="text" />
          </div>
          <div className={styles}></div>
        </div>
      </div>
      <div className={styles.navigation_details}>
        <div className={styles.navigation}>
          <Link to="/Register">Sign up</Link>
          <Link to="">Forgot Password</Link>
        </div>
        <button>Proceed</button>
      </div>
    </form>
  );
}

export default Form;
