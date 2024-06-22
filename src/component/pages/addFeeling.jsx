import React, { useState } from "react";
import "./addFeelingS.css";
import Swal from 'sweetalert2'
import axios from "axios";
import { useHistory } from 'react-router-dom';

export default function AddFeeling() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    advice: ["", ""]  // Defaulting to two empty days
  });
  const history = useHistory();


  // Function to handle changes in form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle changes in day content
  const handleDayChange = (index, value) => {
    const updatedDays = [...formData.advice];
    updatedDays[index] = value;
    setFormData({ ...formData, advice: updatedDays });
  };

  // Function to add a new day
  const addNewDay = () => {
    setFormData({ ...formData, advice: [...formData.advice, ""] });
  };

  // Function to save the form data to the API
  const handleSave = async () => {
    try {

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/feelings/save`, // Replace with your actual endpoint
        formData
      );
      Swal.fire("Saved successfully:");
      history.push('/AllProblem');
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
        <h1>Add Feeling</h1>
        <div className="conc">
          <br />
          <form className="formc">
            <label>Feeling Name</label>
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
            <input className="in"
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange} />
            <br />
            {formData.advice.map((day, index) => (
              <React.Fragment key={index}>
                <label>Advice {index + 1}</label>
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
              Add advice
            </button>
            <button onClick={handleSave} className="busa" type="button" >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
