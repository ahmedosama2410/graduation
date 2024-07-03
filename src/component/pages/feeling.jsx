import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import "./challengeS.css";
import Swal from 'sweetalert2';

export default function Challenge() {
  const { id } = useParams();
  const [challenge, setChallenge] = useState({
    name: "",
    description: "",
    advice: []
  });
  const [token, setToken] = useState(localStorage.getItem("token"));
  const history = useHistory();

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/feelings/findfeeling`, {
          params: { feelingId: id },
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        debugger
        setChallenge(response?.data?.data);
      } catch (error) {
        console.error("Error fetching challenge:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    };

    fetchChallenge();
  }, [id, token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setChallenge((prevChallenge) => ({
      ...prevChallenge,
      [name]: value
    }));
  };

  const handleDayChange = (index, value) => {
    const newDays = [...challenge.advice];
    newDays[index] = value;
    setChallenge((prevChallenge) => ({
      ...prevChallenge,
      advice: newDays
    }));
  };

  const updateChallenge = async () => {
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/api/v1/feelings/update`, {
        id,
        name: challenge.name,
        description: challenge.description,
        advice: challenge.advice
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Challenge updated successfully!"
      });
      history.push("/AllProblem");
    } catch (error) {
      console.error("Error updating challenge:", error);
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
        <h1>Update Challenge</h1>
        <div className="conc">
          <br />
          <form className="formup">
            <label>Challenges Name</label>
            <br />
            <input
              className="in"
              type="text"
              name="name"
              value={challenge?.name}
              onChange={handleInputChange}
            />
            <br />
            <label>Brief</label>
            <br/>
            <input
              className="in"
              type="text"
              name="description"
              value={challenge?.description}
              onChange={handleInputChange}
            />
            <br />
            { challenge?.feelingDays && challenge?.feelingDays.map((day, index) => (
              <div key={index}>
                <label>Day {index + 1}</label>
                <br/>
                <input
                  className="in"
                  type="text"
                  value={day.advice}
                  onChange={(e) => handleDayChange(index, e.target.value)}
                />
                <br />
              </div>
            ))}
            <button
              className="busa"
              type="button"
              onClick={updateChallenge}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
