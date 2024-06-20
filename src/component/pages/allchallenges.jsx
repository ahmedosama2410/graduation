import React, { useState, useEffect } from "react";
import "./allchallengesS.css";
import axios from "axios";
import Swal from 'sweetalert2'

export default function AllChallenges() {
  // State to manage the list of challenges
  const [challenges, setChallenges] = useState([]);

  // State to manage editing
  const [editId, setEditId] = useState(null);
  const [nameVal, setNameValue] = useState("");

  // Fetch data from the API using Axios
  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/UserChallengePublic/findAll`);
        setChallenges(response.data);
      } catch (error) {
        console.error("Error fetching challenges:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      } 
    };

    fetchChallenges();
  }, []);

console.log("challenges",challenges)
  // Function to delete a challenge
  const deleteChallenge = (id) => {
    setChallenges(challenges.filter((challenge) => challenge.id !== id));
  };

  // Function to start editing a challenge
  const startEditChallenge = (id, name) => {
    setEditId(id);
    setNameValue(name);
  };

  // Function to update a challenge
  const updateChallenge = () => {
    setChallenges(
      challenges.map((challenge) =>
        challenge.id === editId ? { ...challenge, name: nameVal } : challenge
      )
    );
    setEditId(null);
    setNameValue("");
  };

  return (
    <>
      <div className="bodyc">
        <h1>All Challenges</h1>
        <br />
        <div className="all">
          <table className="allt">
            <thead>
              <tr>
                <th className="ti">Challenge name</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {challenges && challenges?.map((challenge) => (
                <React.Fragment key={challenge.id}>
                  {editId === challenge.id ? (
                    <tr>
                      <td className="alln">
                        <input
                          value={nameVal}
                          onChange={(e) => setNameValue(e.target.value)}
                        />
                      </td>
                      <td>
                        <button onClick={updateChallenge} className="dbu">
                          Save
                        </button>
                      </td>
                      <td>
                        <button onClick={() => setEditId(null)} className="ubu">
                          Cancel
                        </button>
                      </td>
                    </tr>
                  ) : (
                    <tr>
                      <td className="alln">{challenge.name}</td>
                      <td>
                        <button
                          className="dbu"
                          onClick={() => deleteChallenge(challenge.id)}
                        >
                          Delete
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => startEditChallenge(challenge.id, challenge.name)}
                          className="ubu"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  )}
                  <tr>
                    <td colSpan="3">
                      <hr className="hrall" />
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
