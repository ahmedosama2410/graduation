import "./footerS.css";
import Logo from "./logof.png";
import Siconf from "./face.png";
import Siconw from "./wats.png";
import Siconx from "./X.png";
import Siconi from "./insta.png";

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
                      <a href="Aboutus">About us</a>
                    </li>
                    <li>
                      <a href="contactus">Contact us</a>
                    </li>
                    <li>
                      <a href="commonquestions">Common Questions</a>
                    </li>
                    <li>
                      <a href="support">Support</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="fcol">
                  <h4>hhhh</h4>
                  <ul>
                    <li>
                      <a href="Home">Home</a>
                    </li>
                    <li>
                      <a href="Home">Home</a>
                    </li>
                    <li>
                      <a href="Home">Home</a>
                    </li>
                    <li>
                      <a href="Home">Home</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="fcol">
                  <h4>hhhh</h4>
                  <ul>
                    <li>
                      <a href="Home">Home</a>
                    </li>
                    <li>
                      <a href="Home">Home</a>
                    </li>
                    <li>
                      <a href="Home">Home</a>
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
