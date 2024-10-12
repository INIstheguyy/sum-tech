import { React, useState } from "react";
import styles from "../../../Styles/Form.module.css";
import { Link } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth, DataBase } from "../../../packages/Firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

function RegForm() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    fullName: "",
    role: "",
    phoneNo: "",
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      await createUserWithEmailAndPassword(
        firebaseAuth,
        userDetails.email,
        userDetails.password
      );
      const user = firebaseAuth.currentUser;
      console.log(user);
      if(user){
        await setDoc(doc(DataBase, "users", user.uid),{
          email:user.email,
          fullName:userDetails.fullName,
          role:userDetails.role,
          phone_no: userDetails.phoneNo
        });
      }
      

      console.log("Sign Up Successful, Please login");
      toast.success("Sign Up Successful, Please login",{
        position:"top-left"
      })
    } catch (error) {
      console.log(error.message);
      console.log("Sign Up Successful, Please login");
      toast.error(error.message,{
        position:"top-left"
      })
    }
  };

  return (
    <form className={styles} onSubmit={onSubmit}>
      <div className={styles.input_details}>
        <div className={styles.full_name}>
          <label htmlFor="">Full name</label>
          <input
            value={userDetails.fullName}
            onChange={(e) =>
              setUserDetails({ ...userDetails, fullName: e.target.value })
            }
            type="text"
          />
        </div>
        <div className={styles.email}>
          <label htmlFor="">Email</label>
          <input
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
            type="email"
          />
        </div>
        <div className={styles.phone_no}>
          <label htmlFor="">Phone Number</label>
          <input
            value={userDetails.phoneNo}
            onChange={(e) =>
              setUserDetails({ ...userDetails, phoneNo: e.target.value })
            }
            type="text"
          />
        </div>
        <div className={styles.role}>
          <label htmlFor="">Role</label>
          <input
            value={userDetails.role}
            onChange={(e) =>
              setUserDetails({ ...userDetails, role: e.target.value })
            }
            type="text"
          />
        </div>
        <div className={styles.password}>
          <div className={styles.password_input}>
            <label htmlFor="">Password</label>
            <input
              value={userDetails.password}
              onChange={(e) =>
                setUserDetails({ ...userDetails, password: e.target.value })
              }
              type="password"
            />
          </div>
          <div className={styles.eye_icon}></div>
        </div>
      </div>
      <div className={styles.navigation_details}>
        <div className={styles}>
          <Link to="/">Sign in</Link>
        </div>
        <button className={styles.btn} type="submit">
          Register
        </button>
      </div>
    </form>
  );
}

export default RegForm;
