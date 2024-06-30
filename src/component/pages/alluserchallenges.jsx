import React, { useState, useEffect } from "react";
import "./allchallengesS.css";
import axios from "axios";
import Swal from 'sweetalert2'
import { useHistory  } from 'react-router-dom';

export default function AllChallenges() {
  // State to manage the list of challenges
  const [challenges, setChallenges] = useState([]);
  const [token,setToken] = useState(localStorage.getItem("token"))
  const [reload,setReaload] = useState(false)
  const history = useHistory ();

  // State to manage editing
  const [editId, setEditId] = useState(null);
  const [nameVal, setNameValue] = useState("");

  // Fetch data from the API using Axios
  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/UserChallengePublic/findAll`,{
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
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
  }, [reload]);

  const deleteChallenge = async (id) => {  
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/v1/userChallengePrivate/delete`, {
        params: {
          ChallengeId: id
        }
      });
      setReaload(!reload)
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });      // Handle error appropriately (e.g., show error message to user)
    }
  };


  const startEditChallenge = (id) => {
    history.push(`/userchallenge/${id}`);
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
      <h1>All User Challenges</h1>
        <br />
        <div className="all">
          <table className="allt">
            <thead>
              <tr>
              <th className="ti">User Challenge</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {challenges && challenges?.map((challenge) => (
                <React.Fragment key={challenge.id}>
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
                          Show
                        </button>
                      </td>
                    </tr>
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
