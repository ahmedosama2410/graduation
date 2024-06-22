import React, { useState } from "react";
import "./alluserchallengesS.css";

export default function AllUserChallenges() {
  // State to manage the list of challenges
  const [challenges, setChallenges] = useState([
    { id: 1, name: "Reading" },
    { id: 2, name: "Coding" },
    { id: 3, name: "Sport" }
  ]);

  // Function to delete a challenge
  const deleteChallenge = (id) => {
    setChallenges(challenges.filter((challenge) => challenge.id !== id));
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
                      <button className="sbu">
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
