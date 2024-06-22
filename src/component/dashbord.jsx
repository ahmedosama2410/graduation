import { Link } from "react-router-dom";
import "./dashbordS.css";

export default DashBord;

function DashBord() {
  return (
    <>
      <div className="body">
        <div className="da">
          <h2>dashboard</h2>

          <ul>
            <li>
              <Link to="/AllChallenges">All Challenges </Link>
              {/* <a href="AllChallenges">All Challenges</a> */}
            </li>
            <hr className="hr" />

            <li>
            <Link to="/AddChallenges">Add Challenges </Link>

              {/* <a href="AddChallenges">Add Challenges</a> */}
            </li>
            <hr className="hr" />
           
            <li>
            <Link to="/AllUserChallenges"> All User Challenges </Link>

              {/* <a href="All UserChallenges">All User Challenges</a> */}
            </li>
            <hr className="hr" />
            <li>
            <Link to="/AllProblem">All feeling</Link>

              {/* <a href="AddProblem">All feeling</a> */}
            </li>
            <hr className="hr" />
            <li>
            <Link to="/AddProblem">Add feeling</Link>

              {/* <a href="AddProblem">Add feeling</a> */}
            </li>
            <hr className="hr" />
            <li>
            <Link to="/Comments">Comments</Link>

              {/* <a href="Comments">Comments</a> */}
            </li>
            <hr className="hr" />
            <li>
            <Link to="/Evaluation">Evaluation</Link>

              {/* <a href="Evaluation">Evaluation</a> */}
            </li>
            <hr className="hr" />
           
          </ul>
        </div>
      </div>
    </>
  );
}
