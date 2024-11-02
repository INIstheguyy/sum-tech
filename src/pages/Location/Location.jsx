import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { DataBase } from "../../packages/Firebase";
import DashboardHeader from "../../components/DashboardHeader";
import MyTable from "../../components/Table";
import styles from "../../Styles/Location.module.css";

function Location() {
  const [staff, setStaff] = useState([]);
  const [devices, setDevices] = useState([]);
  const [selectedData, setSelectedData] = useState("staff"); // "staff" or "devices"
  const [location, setLocation] = useState("all"); // Location filter

  // Fetch staff data
  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const querySnapshot = await getDocs(collection(DataBase, "staff"));
        const staffArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStaff(staffArray);
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
        const devicesArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDevices(devicesArray);
      } catch (err) {
        console.error("Error fetching devices:", err);
      }
    };
    fetchDevices();
  }, []);

  // Filter data based on selection
  const filteredData =
    selectedData === "staff"
      ? staff.filter((item) => location === "all" || item.location === location)
      : devices.filter(
          (item) => location === "all" || item.location === location
        );

  return (
    <div className={styles.location}>
      <div className={styles.content}>
        <div>
          <DashboardHeader
            header="Location"
            subheader="Managing data of systems & workers across various organisations..."
          />
        </div>
        <div className={styles.inner_content_wrapper}>
          <div className={styles.inner_content}>
            <div className={styles.left_section_wrapper}>
              <div className={styles.left_section}>
                <MyTable
                  heading={
                    selectedData === "staff" ? "Staff List" : "Device List"
                  }
                  data={filteredData}
                  itemsPerPage={10}
                  tableHeaders={
                    selectedData === "staff"
                      ? [
                          { key: "first_name", value: "First Name" },
                          { key: "last_name", value: "Last Name" },
                          { key: "department", value: "Department" },
                          { key: "location", value: "Location" },
                        ]
                      : [
                          { key: "manufacturer", value: "Manufacturer" },
                          { key: "device_type", value: "Device Type" },
                          { key: "serial_number", value: "Serial Number" },
                          { key: "location", value: "Location" },
                        ]
                  }
                />
              </div>
            </div>
            <div className={styles.right_section_wrapper}>
              <div className={styles.right_section}>
                <div className={styles.controls}>
                  <select
                    onChange={(e) => setSelectedData(e.target.value)}
                    value={selectedData}
                  >
                    <option value="staff">Staff</option>
                    <option value="devices">Devices</option>
                  </select>
                  <select
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                  >
                    <option value="all">All Locations</option>
                    <option value="ikeja">IKEJA</option>
                    <option value="lekki_phase_1">LEKKI PHASE 1</option>
                    <option value="lekki_phase_2">LEKKI PHASE 2</option>
                    <option value="ikorodu">IKORODU</option>
                    <option value="otta">OTTA</option>
                    <option value="abuja">ABUJA</option>
                    <option value="gwarinpa">GWARINPA</option>
                    <option value="abeokuta">ABEOKUTA</option>
                    <option value="ijebu">IJEBU</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
