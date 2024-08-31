import React from "react";
import styles from "../../Styles/Devices.module.css";
import DashboardHeader from "../../components/DashboardHeader";
import DeviceForm from "./DeviceForm";
function Devices() {
  return (
    <div className={styles.Devices}>
      <div className={styles.content}>
        <div className={styles}>
          <DashboardHeader
            header={"Devices"}
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
                        <p className={styles}>Mouses</p>
                        <p className={styles}></p>
                      </div>
                    </div>
                    <div className={styles.data}>
                      <div className={styles.data_content}>
                        <p className={styles}>Printers</p>
                        <p className={styles}></p>
                      </div>
                    </div>
                    <div className={styles.data}>
                      <div className={styles.data_content}>
                        <p className={styles}>Monitors</p>
                        <p className={styles}></p>
                      </div>
                    </div>
                    <div className={styles.data}>
                      <div className={styles.data_content}>
                        <p className={styles}>Routers</p>
                        <p className={styles}></p>
                      </div>
                    </div>
                    <div className={styles.data}>
                      <div className={styles.data_content}>
                        <p className={styles}>Keyboards</p>
                        <p className={styles}></p>
                      </div>
                    </div>
                    <div className={styles.data}>
                      <div className={styles.data_content}>
                        <p className={styles}>Systems</p>
                        <p className={styles}></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.right_section_wrapper}>
              <div className={styles.right_section}>
                <div className={styles.device_header}>
                  <p>Add devices</p>
                </div>
                <div>
                <DeviceForm/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Devices;
