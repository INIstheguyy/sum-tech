import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import styles from "../../Styles/Devices.module.css";
import { DataBase } from "../../packages/Firebase";

// Initial state for the form
const initialFormState = {
  manufacturer: "",
  location: "",
  serial_number: "",
  device_type: "",
  description: "",
};

function DeviceForm() {
  const [formData, setFormData] = useState(initialFormState); // State to manage form data
  const [loading, setLoading] = useState(false); // Optional: for loading state
  const [error, setError] = useState(null); // Optional: for error handling

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const onSubmit = async () => {
    setLoading(true); // Start loading
    try {
      const docRef = await addDoc(collection(DataBase, "devices"), formData);
      console.log("Document written with ID: ", docRef.id);
      setFormData(initialFormState); // Clear form on success
    } catch (e) {
      console.error("Error adding document: ", e);
      setError("Failed to add device. Please try again."); // Handle errors
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <form>
      <div className={styles.input_details}>
        <div className={styles.detail_wrapper}>
          <label htmlFor="location">Location</label>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
          >
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

        <div className={styles.detail_wrapper}>
          <label htmlFor="manufacturer">Manufacturer</label>
          <input
            type="text"
            name="manufacturer"
            placeholder="Manufacturer"
            value={formData.manufacturer}
            onChange={handleChange}
          />
        </div>

        <div className={styles.detail_wrapper}>
          <label htmlFor="serial_number">Serial Number</label>
          <input
            type="text"
            name="serial_number"
            placeholder="Serial Number"
            value={formData.serial_number}
            onChange={handleChange}
          />
        </div>

        <div className={styles.detail_wrapper}>
          <label htmlFor="device_type">Device Type</label>
          <select
            name="device_type"
            value={formData.device_type}
            onChange={handleChange}
          >
            <option value="keyboard">Keyboard</option>
            <option value="monitor">Monitor</option>
            <option value="mouse">Mouse</option>
            <option value="printer">Printer</option>
            <option value="router">Router</option>
          </select>
        </div>

        <div className={styles.detail_wrapper}>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            placeholder="Enter description here..."
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>

      {error && <p className={styles.error}>{error}</p>} {/* Display error if any */}
      
      <div className={styles.navigation_details}>
        <button type="button" onClick={onSubmit} disabled={loading}>
          {loading ? "Adding..." : "Add Device"}
        </button>
      </div>
    </form>
  );
}

export default DeviceForm;

