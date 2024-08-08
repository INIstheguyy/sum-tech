import React from "react";
import styles from "../../../Styles/Login.module.css";
import logo from "../../../Assets/icon/sumtech-logo.svg";
import Form from "./Form";

function Login() {
  return (
    <div className={styles.Login}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.content_left_wrapper}>
            <div className={styles.content_left}>
              <div className={styles.logo_wrapper}>
                <img style={{ width: "70px" }} src={logo} alt="" />
                <p>Summtech Pro</p>
              </div>
            </div>
          </div>
          <div className={styles.content_right_wrapper}>
            <div className={styles.content_right}>
              <p className={styles.welcome}>Welcome Back!</p>
              <div className={styles.admin}>
                <p className={styles.title}>Admin Login</p>
                <p className={styles.sub_title}>
                  Only for authorized admin users
                </p>
              </div>
              <Form/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
