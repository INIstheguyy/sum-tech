import React, { useEffect, useState } from "react";
import styles from "../../Styles/Devices.module.css";
import DashboardHeader from "../../components/DashboardHeader";
import DeviceForm from "./DeviceForm";
import MyTable from "../../components/Table";
import { FaDeleteLeft } from "react-icons/fa6";
import { collection, getDocs, deleteDoc, doc  } from "firebase/firestore";
import { DataBase } from "../../packages/Firebase";

function Devices() {
  const [devices, setDevices] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const querySnapshot = await getDocs(collection(DataBase, "devices"));
        const devicesArray = querySnapshot.docs.map((doc) => ({
          id: doc.id, // Include document ID for deletion
          ...doc.data(),
        }));
        setDevices(devicesArray); // Set as an array
      } catch (err) {
        console.error("Error fetching devices:", err);
      }
    })();
  }, []);

  const handleDelete = async (deviceId) => {
    try {
      await deleteDoc(doc(DataBase, "devices", deviceId)); // Delete document
      setDevices((prevDevices) =>
        prevDevices.filter((device) => device.id !== deviceId) // Update UI
      );
    } catch (err) {
      console.error("Error deleting device:", err);
    }
  };

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
                   
                  </div>
                </div>
                <div>
                  <MyTable
                    heading={"Devices"}
                    data={devices}
                    itemsPerPage={10}
                    tableHeaders={[
                      { key: "manufacturer", value: "Manufacturer" },
                      { key: "location", value: "Location" },
                      { key: "serial_number", value: "Serial Number" },
                      { key: "device_type", value: "Device Type" },
                      { key: "description", value: "Description" },
                    ]}
                    action={(index) => (
                      <div style={{cursor:"pointer"}} key={index}>
                        
                          <FaDeleteLeft onClick={() => handleDelete(devices[index].id)} />
                        
                      </div>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className={styles.right_section_wrapper}>
              <div className={styles.right_section}>
                <div className={styles.device_header}>
                  <p>Add devices</p>
                </div>
                <div>
                  <DeviceForm />
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
