import React from "react";
import styles from "../../Styles/Overview.module.css";
import DashboardHeader from "../../components/DashboardHeader";
function Overview() {
  return (
    <div className={styles.overview}>
      <div className={styles.content}>
        <div className={styles}>
          <DashboardHeader
            header={"Overview"}
            subheader={
              "Managing data of systems & workers across various organisations..."
            }
          />
        </div>
        <div className={styles.inner_content}>
          <div className={styles.summary}>
            <div className={styles.summary_content}>
              <div className={styles.data}>
                <div className={styles.data_content}>
                  <p className={styles}>Total system</p>
                  <p className={styles}></p>
                </div>
              </div>
              <div className={styles.data}>
                <div className={styles.data_content}>
                  <p className={styles}>Total devices</p>
                  <p className={styles}></p>
                </div>
              </div>
              <div className={styles.data}>
                <div className={styles.data_content}>
                  <p className={styles}>Total location</p>
                  <p className={styles}></p>
                </div>
              </div>
              <div className={styles.data}>
                <div className={styles.data_content}>
                  <p className={styles}>Total staffs</p>
                  <p className={styles}></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles}></div>
      </div>
    </div>
  );
}

export default Overview;
