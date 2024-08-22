import React from "react";
import styles from "../../Styles/Location.module.css";
import DashboardHeader from "../../components/DashboardHeader";
function Location() {
  return (
    <div className={styles.location}>
      <div className={styles.content}>
        <div className={styles}>
          <DashboardHeader
            header={"Location"}
            subheader={
              "Managing data of systems & workers across various organisations..."
            }
          />
        </div>
        <div className={styles.inner_content_wrapper}>
          <div className={styles.inner_content}>
            <div className={styles.left_section_wrapper}>
              <div className={styles.left_section}>
                <div className={styles.summary}>
                  <div className={styles.summary_content}>
                    <div className={styles.data}>
                      <div className={styles.data_content}>
                        <p className={styles}>Total System</p>
                        <p className={styles}></p>
                      </div>
                    </div>
                    <div className={styles.data}>
                      <div className={styles.data_content}>
                        <p className={styles}>Total Devices</p>
                        <p className={styles}></p>
                      </div>
                    </div>
                    <div className={styles.data}>
                      <div className={styles.data_content}>
                        <p className={styles}>Total Staffs</p>
                        <p className={styles}></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.right_section_wrapper}>
              <div className={styles.right_section}>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
