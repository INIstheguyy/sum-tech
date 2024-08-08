import React from "react";
import styles from "../../../Styles/Register.module.css";
import logo from "../../../Assets/icon/sumtech-logo.svg"
import RegForm from "./RegForm";
function Register() {
  return (
    <div className={styles.register}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.content_left_wrapper}>
            <div className={styles.content_left}>
              <div className={styles.logo_wrapper}>
                <img style={{width:"70px"}} src={logo} alt="" />
                <p>Summtech Pro</p>
              </div>
            </div>
          </div>
          <div className={styles.content_right_wrapper}>
            <div className={styles.content_right}>
              <p className={styles.welcome}>
                {" "}
                Welcome! Register to transform your business.
              </p>
              <div className={styles}>
              <RegForm/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
