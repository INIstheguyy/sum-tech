import React from "react";
import styles from "../../Styles/Devices.module.css";

function DeviceForm() {
  return (
    <form action="">
      <div className={styles.input_details}>
        <div className={styles.detail_wrapper}>
          <label htmlFor="">System ID</label>
          <input type="text" placeholder="System ID" />
        </div>
        <div className={styles.detail_wrapper}>
          <label htmlFor="">Manufacturer</label>
          <input type="text" placeholder="Manufacturer" />
        </div>
        <div className={styles.detail_wrapper}>
          <label htmlFor="">Serial Number</label>
          <input type="text" placeholder="Serial Number" />
        </div>
        <div className={styles.detail_wrapper}>
          <label htmlFor="">Device Type</label>
          <select name="" id="">
            <option value="male">Keyboard</option>
            <option value="female">Monitor</option>
            <option value="female">Mouse</option>
            <option value="female">Printer</option>
            <option value="female">Router</option>
          </select>
        </div>
        <div className={styles.detail_wrapper}>
          <label htmlFor="">Description</label>
          <textarea placeholder="Enter description here..." name="Description" id=""></textarea>
        </div>
      </div>
      <div className={styles.navigation_details}>
        <button>Add device</button>
      </div>
      <div className={styles}></div>
    </form>
  );
}

export default DeviceForm;
