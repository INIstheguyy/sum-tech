import React from "react";
import styles from "../../../Styles/Form.module.css";
import { Link, useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  return (
    <form>
      <div className={styles.input}>
        <div className={styles.email}>
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Enter your email..." />
        </div>
        <div className={styles.password}>
          <div className={styles}>
            <label htmlFor="">Password</label>
            <input type="text" placeholder="Enter your Password..." />
          </div>
          <div className={styles}></div>
        </div>
      </div>
      <div className={styles.navigation_details}>
        <div className={styles.navigation}>
          <Link to="/Register">Sign up</Link>
          <Link to="">Forgot Password</Link>
        </div>
        <button
          onClick={() => {
            navigate("/overview");
          }}
          className={styles.btn}
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default Form;
