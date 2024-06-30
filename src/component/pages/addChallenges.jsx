import React, { useState } from "react";
import "./addChallengesS.css";
import Photoc from "../photo.png";
import Swal from 'sweetalert2'
import axios from "axios";
import { useHistory } from 'react-router-dom';

export default function AddChallenges() {
  const history = useHistory();
  const [token,setToken] = useState(localStorage.getItem("token"))

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    adminCDays: ["", ""]  // Defaulting to two empty days
  });

  // Function to handle changes in form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle changes in day content
  const handleDayChange = (index, value) => {
    const updatedDays = [...formData.adminCDays];
    updatedDays[index] = value;
    setFormData({ ...formData, adminCDays: updatedDays });
  };

  // Function to add a new day
  const addNewDay = () => {
    setFormData({ ...formData, adminCDays: [...formData.adminCDays, ""] });
  };

 // Function to save the form data to the API
 const handleSave = async () => {
  const adminCDays=[
    {
        "file":"",
        "content":""
    }
]
formData.adminCDays=adminCDays;
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/adminChallenge/save`, // Replace with your actual endpoint
      formData,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json' // or 'multipart/form-data' depending on your formData
        }
      }
    );
    Swal.fire("Saved successfully:");
    history.push('/AllChallenges');

    // Optionally, perform any success handling (e.g., show a success message)
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
  }
};
  return (
    <>
      <div className="bodyc">
        <h1>Add Challenges</h1>
        <div className="conc">
          <br />
          <img src={Photoc} className="photoa" alt="icon" />
          <form className="formc">
            <label>Challenges Name</label>
            <br />
            <input
              className="in"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <br />
            <label>Brief</label>
            <br />
            <input
              className="in"
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
            <br />
            {formData.adminCDays.map((day, index) => (
              <React.Fragment key={index}>
                <label>Day {index + 1}</label>
                <br />
                <textarea
                  className="ta"
                  value={day}
                  onChange={(e) => handleDayChange(index, e.target.value)}
                ></textarea>
                <br />
              </React.Fragment>
            ))}
            <button className="buadd" type="button" onClick={addNewDay}>
              Add Day
            </button>
            <button className="busa" type="button" onClick={handleSave}>
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
