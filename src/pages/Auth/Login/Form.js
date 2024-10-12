import {React, useState} from "react";
import styles from "../../../Styles/Form.module.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../../packages/Firebase";
import { toast } from "react-toastify";
function Form() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({email:"", password:""})

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(
        firebaseAuth,
        userDetails.email,
        userDetails.password
      );

      console.log("Sign In Successful, Please login");
      toast.success("Sign In Successful, Welcome back! ",{
        position:"top-left"
      })
      navigate("/Overview");
    } catch (error) {
      console.log(error.message);
      console.log("Sign In Failed, Please Try again!");
      toast.error("Sign In Failed, Please Try again!",{
        position:"top-left"
      })
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={styles.input}>
        <div className={styles.email}>
          <label htmlFor="">Email</label>
          <input value={userDetails.email} onChange={(e) => setUserDetails({...userDetails, email:e.target.value})} type="email" placeholder="Enter your email..." />
        </div>
        <div className={styles.password}>
          <div className={styles}>
            <label htmlFor="">Password</label>
            <input type="text" value={userDetails.password} onChange={(e) => setUserDetails({...userDetails, password: e.target.value})} placeholder="Enter your Password..." />
          </div>
          <div className={styles}></div>
        </div>
      </div>
      <div className={styles.navigation_details}>
        <div className={styles.navigation}>
          <Link to="/Register">Sign up</Link>
          <Link to="">Forgot Password</Link>
        </div>
        <button
          type="submit"
          className={styles.btn}
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default Form;
