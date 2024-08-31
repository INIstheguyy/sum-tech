import React from "react";
import styles from "../../Styles/Staff.module.css";
function StaffForm() {
  return (
    <form action="">
      <div className={styles.input_details}>
        <div className={styles.detail_wrapper}>
          <label htmlFor="">First Name</label>
          <input type="text" placeholder="first name" />
        </div>
        <div className={styles.detail_wrapper}>
          <label htmlFor="">Last Name</label>
          <input type="text" placeholder="last name" />
        </div>
        <div className={styles.detail_wrapper}>
          <label htmlFor="">Age</label>
          <input placeholder="Age" type="number" name="" id="" />
        </div>
        <div className={styles.detail_wrapper}>
          <label htmlFor="">Department</label>
          <input type="text" placeholder="department" />
        </div>
        <div className={styles.detail_wrapper}>
          <label htmlFor="">Job title</label>
          <input type="text" placeholder="job title" />
        </div>
        <div className={styles.detail_wrapper}>
          <label htmlFor="">Sex</label>
          <select name="" id="">
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
        <div className={styles.detail_wrapper}>
          <label htmlFor="">Staff Type</label>
          <select name="" id="">
            <option value="male">Active</option>
            <option value="female">Inactive</option>
            <option value="female">Contract</option>
          </select>
        </div>
        <div className={styles.detail_wrapper}>
          <label htmlFor="">Location</label>
          <select name="location" id="">
            <option value="ikeja">IKEJA</option>
            <option value="ikeja">LEKKI PHASE 1</option>
            <option value="ikeja">LEKKI PHASE 2</option>
            <option value="ikeja">IKORODU</option>
            <option value="ikeja">OTTA</option>
            <option value="ikeja">ABUJA</option>
            <option value="ikeja">GWARINPA</option>
            <option value="ikeja">ABEOKUTA</option>
            <option value="ikeja">IJEBU</option>
          </select>
        </div>
      </div>
      <div className={styles.navigation_details}>
        <button>Add staff</button>
      </div>
    </form>
  );
}

export default StaffForm;
