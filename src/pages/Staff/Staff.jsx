import React from "react";
import styles from "../../Styles/Staff.module.css";
import DashboardHeader from "../../components/DashboardHeader";
import StaffForm from "./StaffForm";
function Staff() {
  return (
    <div className={styles.System}>
      <div className={styles.content}>
        <div className={styles}>
          <DashboardHeader
            header={"staff"}
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
                        <p className={styles}>Total staffs</p>
                        <p className={styles}></p>
                      </div>
                    </div>
                    <div className={styles.data}>
                      <div className={styles.data_content}>
                        <p className={styles}>Contract staffs</p>
                        <p className={styles}></p>
                      </div>
                    </div>
                    <div className={styles.data}>
                      <div className={styles.data_content}>
                        <p className={styles}>Active staffs</p>
                        <p className={styles}></p>
                      </div>
                    </div>
                    <div className={styles.data}>
                      <div className={styles.data_content}>
                        <p className={styles}>Inactive staffs</p>
                        <p className={styles}></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.right_section_wrapper}>
              <div className={styles.right_section}>
                <div className={styles.staff_header}>
                  <p className={styles}>Add Staff</p>
                </div>
                <div className={styles.staff_form}>
                <StaffForm/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staff;
