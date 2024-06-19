import React, { useState } from "react";
import "./userChallengesS.css";
import Swal from 'sweetalert2'
import axios from "axios";
import { useHistory } from 'react-router-dom';

export default UserChallenges;

function UserChallenges() {
  const history = useHistory();

  const [formData, setFormData] = useState({
    name: "",
    brief: "",
    days: ["", ""]  // Defaulting to two empty days
  });


  // Function to handle changes in form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle changes in day content
  const handleDayChange = (index, value) => {
    const updatedDays = [...formData.days];
    updatedDays[index] = value;
    setFormData({ ...formData, days: updatedDays });
  };

  // Function to add a new day
  const addNewDay = () => {
    setFormData({ ...formData, days: [...formData.days, ""] });
  };

  // Function to save the form data to the API
  const handleSave = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/UserChallengePublic/save`, // Replace with your actual endpoint
        formData
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


  return (<>

    <div className="bodyc">

      <h1>User Challenges</h1>

      <div className="conc">
        <br />
        <form className="formuser">
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
              name="brief"
              value={formData.brief}
              onChange={handleInputChange}
            />
          <br />
          {formData.days.map((day, index) => (
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
          <button  onClick={handleSave} className="busa" type="button">
            Publish
          </button>
        </form>
      </div>
    </div>


  </>
  )
}
