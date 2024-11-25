import { React, useState, useEffect } from "react";
import styles from "../../Styles/Staff.module.css";
import DashboardHeader from "../../components/DashboardHeader";
import StaffForm from "./StaffForm";
import MyTable from "../../components/Table";
import { FaDeleteLeft } from "react-icons/fa6";
import { collection, getDocs,  deleteDoc, doc } from "firebase/firestore";
import { DataBase } from "../../packages/Firebase";
function Staff() {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const querySnapshot = await getDocs(collection(DataBase, "staff"));
        const devicesArray = querySnapshot.docs.map((doc) => ({
          id: doc.id, // Include document ID for deletion
          ...doc.data(),
        }));
        console.log();
        setStaff(devicesArray);
        console.log(devicesArray);
      } catch (err) {
        console.error("Error fetching devices:", err);
      }
    })();
  }, []);
  const handleDelete = async (staffId) => {
    try {
      await deleteDoc(doc(DataBase, "staff", staffId)); // Delete document
      setStaff((prevStaff) =>
        prevStaff.filter((staff) => staff.id !== staffId) // Update UI
      );
    } catch (err) {
      console.error("Error deleting device:", err);
    }
  };

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
                    
                    
                    
                    
                  </div>
                </div>
                <div>
                  <MyTable
                    heading={"Staffs"}
                    data={staff}
                    itemsPerPage={10}
                    tableHeaders={[
                      { key: "first_name", value: "First Name" },
                      { key: "last_name", value: "Last Name" },
                      { key: "department", value: "Department" },
                      { key: "location", value: "Location" },
                      { key: "age", value: "Date of Birth" },
                      { key: "sex", value: "Sex" },
                    ]}
                    action={(index) => (
                      <div style={{cursor:"pointer"}} key={index}>
                        
                          <FaDeleteLeft onClick={() => handleDelete(staff[index].id)} />
                        
                      </div>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className={styles.right_section_wrapper}>
              <div className={styles.right_section}>
                <div className={styles.staff_header}>
                  <p className={styles}>Add Staff</p>
                </div>
                <div className={styles.staff_form}>
                  <StaffForm />
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
