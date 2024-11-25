import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import styles from "../../Styles/Staff.module.css";
import { DataBase } from "../../packages/Firebase";

// Initial state for the form
const initialFormState = {
  first_name: "",
  last_name: "",
  age: "",
  department: "",
  sex: "male", // Default selection
  location: "ikeja", // Default selection
};

function StaffForm() {
  const [formData, setFormData] = useState(initialFormState); // Form state
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on submit
    setLoading(true);
    try {
      const docRef = await addDoc(collection(DataBase, "staff"), formData);
      console.log("Document written with ID: ", docRef.id);
      setFormData(initialFormState); // Clear form on success
    } catch (e) {
      console.error("Error adding document: ", e);
      setError("Failed to add staff. Please try again."); // Handle errors
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={styles.input_details}>
        <div className={styles.detail_wrapper}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            value={formData.first_name}
            onChange={handleChange}
          />
        </div>

        <div className={styles.detail_wrapper}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="last_name"
            placeholder="Last name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>

        <div className={styles.detail_wrapper}>
          <label htmlFor="age">Date of Birth</label>
          <input
            type="text"
            name="age"
            placeholder="date of birth"
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        <div className={styles.detail_wrapper}>
          <label htmlFor="department">Department</label>
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
          />
        </div>

        <div className={styles.detail_wrapper}>
          <label htmlFor="sex">Sex</label>
          <select
            name="sex"
            value={formData.sex}
            onChange={handleChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className={styles.detail_wrapper}>
          <label htmlFor="location">Location</label>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
          >
            <option value="ikeja">IKEJA</option>
            <option value="lekki1">LEKKI 1</option>
            <option value="lekki2">LEKKI 2</option>
            <option value="ikorodu">IKORODU</option>
            <option value="otta">OTTA</option>
            <option value="abuja">ABUJA</option>
            <option value="gwarinpa">GWARINPA</option>
            <option value="abeokuta">ABEOKUTA</option>
            <option value="ijebu">IJEBU</option>
          </select>
        </div>
      </div>

      {error && <p className={styles.error}>{error}</p>} {/* Show error if any */}

      <div className={styles.navigation_details}>
        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Staff"}
        </button>
      </div>
    </form>
  );
}

export default StaffForm;

