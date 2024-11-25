import React, { useEffect, useState } from "react";
import styles from "../../Styles/Overview.module.css";
import DashboardHeader from "../../components/DashboardHeader";
import MyTable from "../../components/Table";
import { collection, getDocs } from "firebase/firestore";
import { DataBase } from "../../packages/Firebase";

function Overview() {
  const [dataType, setDataType] = useState("staff"); // "staff" or "devices"
  const [staff, setStaff] = useState([]);
  const [devices, setDevices] = useState([]);
  const [staffCount, setStaffCount] = useState(0);
  const [deviceCount, setDeviceCount] = useState(0);

  // Fetch staff data
  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const querySnapshot = await getDocs(collection(DataBase, "staff"));
        const staffData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStaff(staffData);
        setStaffCount(querySnapshot.size);
        
      } catch (err) {
        console.error("Error fetching staff:", err);
      }
    };
    fetchStaff();
  }, []);

  // Fetch devices data
  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const querySnapshot = await getDocs(collection(DataBase, "devices"));
        const deviceData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDevices(deviceData);
        setDeviceCount(querySnapshot.size);
      } catch (err) {
        console.error("Error fetching devices:", err);
      }
    };
    fetchDevices();
  }, []);

  return (
    <div className={styles.overview}>
      <div className={styles.content}>
        <div>
          <DashboardHeader
            header={"Overview"}
            subheader={
              "Managing data of systems & workers across various organisations..."
            }
          />
        </div>
        <div className={styles.inner_content_wrapper}>
          <div className={styles.inner_content}>
           
              
                  <div className={styles.summary_content}>
                    <div className={styles.data}>
                      <div className={styles.data_content}>
                        <p className={styles}>Total devices</p>
                        <h1 style={{padding:"15px 5px"}}>{deviceCount}</h1>
                      </div>
                    </div>
                    <div className={styles.data}>
                      <div className={styles.data_content}>
                        <p className={styles}>Total location</p>
                        <h1 style={{padding:"15px 5px"}} className={styles}>8</h1>
                      </div>
                    </div>
                    <div className={styles.data}>
                      <div className={styles.data_content}>
                        <p className={styles}>Total staffs</p>
                        <h1  style={{padding:"15px 5px"}} >{staffCount}</h1>
                      </div>
                    </div>
                  </div>
                  <div className={styles.toggle}>
                  <button
                    className={dataType === "staff" ? styles.active : ""}
                    onClick={() => setDataType("staff")}
                  >
                    Staff
                  </button>
                  <button
                    className={dataType === "devices" ? styles.active : ""}
                    onClick={() => setDataType("devices")}
                  >
                    Devices
                  </button>
                </div>
                <div className={styles.tableWrapper}>
                  {dataType === "staff" ? (
                    <MyTable
                      heading={"Staff List"}
                      data={staff}
                      itemsPerPage={10}
                      tableHeaders={[
                        { key: "first_name", value: "First Name" },
                        { key: "last_name", value: "Last Name" },
                        { key: "department", value: "Department" },
                        { key: "location", value: "Location" },
                        { key: "age", value: "Age" },
                        { key: "sex", value: "Sex" },
                      ]}
                    />
                  ) : (
                    <MyTable
                      heading={"Device List"}
                      data={devices}
                      itemsPerPage={10}
                      tableHeaders={[
                        { key: "manufacturer", value: "Manufacturer" },
                        { key: "location", value: "Location" },
                        { key: "serial_number", value: "Serial Number" },
                        { key: "device_type", value: "Device Type" },
                      ]}
                    />
                  )}
                </div>
              </div>
            </div>
           
     

        {/* Filter Toggle */}
      </div>
    </div>
  );
}

export default Overview;
