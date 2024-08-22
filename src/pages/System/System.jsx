import React from "react";
import styles from "../../Styles/System.module.css";
import DashboardHeader from "../../components/DashboardHeader";
function System() {
  return (
    <div className={styles.System}>
      <div className={styles.content}>
        <div className={styles}>
          <DashboardHeader
            header={"System"}
            subheader={
              "Managing data of systems & workers across various organisations..."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default System;
