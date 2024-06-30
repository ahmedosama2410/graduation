import "./footerS.css";
import Logo from "./logof.png";
import Siconf from "./face.png";
import Siconw from "./wats.png";
import Siconx from "./X.png";
import Siconi from "./insta.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default Footer;

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="foo">
          <table className="tfoo">
            <tr>
              <td>
                <div className="fcol">
                  <ul>
                    <li>
                      <img src={Logo} className="logof" alt="logo" />
                    </li>
                  </ul>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="fcol">
                  <ul>
                    <li></li>
                  </ul>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="fcol">
                  <h4>Information</h4>
                  <ul>
                    <li>
                      <Link to="/about">About us</Link>
                    </li>
                    <li>
                    <Link to="/Contact">Contact us</Link>
                    </li>
                    <li>
                    <Link to="/Comments">Comments</Link>

                    </li>
                    <li>
                    <Link to="/Evaluation">Evaluation</Link>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="fcol">
                  <h4>Challenges</h4>
                  <ul>
                    <li>
                    <Link to="/AllChallenges">All Challenges</Link>
                    </li>
                    <li>
                    <Link to="/AddChallenges">Add Challenges</Link>

                    </li>
                    <li>
                    <Link to="/AllUserChallenges">User Challenges</Link>

                    </li>
                   
                  </ul>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="fcol">
                  <h4>feeling</h4>
                  <ul>
                    <li>
                    <Link to="/AllProblem">All feeling</Link>

                    </li>
                    <li>
                    <Link to="/AddProblem">Add feeling</Link>

                    </li>
                  
                  </ul>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="fcol">
                  <ul>
                    <li></li>
                  </ul>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="fcol">
                  <ul>
                    <li></li>
                  </ul>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="fcol">
                  <ul>
                    <br />
                    <li>
                      <img src={Siconf} className="sicon" alt="sicon" />
                    </li>
                    <br />
                    <br />
                    <li>
                      <img src={Siconw} className="sicon" alt="sicon" />
                    </li>
                    <br />
                    <br />
                    <li>
                      <img src={Siconx} className="sicon" alt="sicon" />
                    </li>
                    <br />
                    <br />
                    <li>
                      <img src={Siconi} className="sicon" alt="sicon" />
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <br />

            <hr className="hrf" />
            <p className="cr">
              Copyright © 2023-2024 Glow & Go . All rights reserved.
            </p>
          </table>
        </div>

        {/**
                    <table className="foo">
                        <tr>
                            <td>
                            <img src={Logo} className="logof" alt="logo"/>
                            </td>
                            <td>
                                <p className="hf">information</p>
                            </td>
                            <td>
                                <p className="hf">DashBord</p>
                            </td>
                        </tr>

                        <tr className="end">
                        <hr className="hrf"/>
                        <p className="cr">Copyright ©  2023-2024 Glow & Go . All rights reserved.</p>
                        </tr>
                    </table>
                 */}
      </div>
    </>
  );
}
