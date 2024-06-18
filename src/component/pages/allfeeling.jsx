import React, { useState } from "react";
import "./allfeelingS.css";

export default AllFeeling;

function AllFeeling() {

  // State to manage the list of challenges
  const [challenges, setChallenges] = useState([
    { id: 1, name: "Overthinking" },
    { id: 2, name: "Anger" },
    { id: 3, name: "Anger" }
  ]);
  

  // State to manage editing
  const [editId, setEditId] = useState(null);
  const [nameVal, setNameValue] = useState("");

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
