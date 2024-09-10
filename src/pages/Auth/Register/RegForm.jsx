import React from "react";
import styles from "../../../Styles/Form.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiEndpoints } from "../../../Constants";

function RegForm() {
  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(apiEndpoints.auth.register, {
        name: "Test Test Test",
        email: "test@example.com",
        password: "1111",
      });

      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className={styles} onSubmit={onSubmit}>
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
        <button className={styles.btn} type="submit">
          Register
        </button>
      </div>
    </form>
  );
}

export default RegForm;
