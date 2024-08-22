import React from "react";
import styles from "../../Styles/Devices.module.css";
import DashboardHeader from "../../components/DashboardHeader";
function Devices() {
  return (
    <div className={styles.Devices}>
      <div className={styles.content}>
        <div className={styles}>
          <DashboardHeader header={"Devices"} subheader={
            "Managing data of systems & workers across various organisations..."
          } />
        </div>
      </div>
    </div>
  );
}

export default Devices;
