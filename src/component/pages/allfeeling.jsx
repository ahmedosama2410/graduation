import React, { useEffect, useState } from "react";
import "./allfeelingS.css";
import axios from "axios";
import Swal from 'sweetalert2'
import { useHistory  } from 'react-router-dom';

export default AllFeeling;

function AllFeeling() {

  // State to manage the list of challenges
   // State to manage the list of challenges
   const [challenges, setChallenges] = useState([]);
   const history = useHistory ();
   // State to manage editing
   const [editId, setEditId] = useState(null);
   const [nameVal, setNameValue] = useState("");
   const [reload,setReaload] = useState(false)

   // Fetch data from the API using Axios
   useEffect(() => {
    debugger
     const fetchChallenges = async () => {
       try {
         
         const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/feelings/findAll`);
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
 
   // Function to delete a challenge
   const deleteChallenge = async (id) => {  
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/v1/feelings/delete`, {
        params: {
          feelingId: id
        }
      });
      setReaload(!reload)
      } catch (error) {
      console.error('Error deleting challenge:', error);
      // Handle error appropriately (e.g., show error message to user)
    }
  };
 
  const startEditChallenge = (id) => {
    history.push(`/feeling/${id}`);
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
        <h1>All Feeling</h1>
        <br />
        <div className="all">
          <table className="allt">
            <thead>
              <tr>
                <th className="ti">Feeling name</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {challenges.map((challenge) => (
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
                          Edit
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
