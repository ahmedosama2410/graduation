import "./FpasswordemailS.css";
import Gif from "./logogif.gif";

export default FPasswordEmail;

function FPasswordEmail() {
  return (
    <>
      <div className="bodyfp1">
        <div className="info">
          <ul>
            <li>
              <img src={Gif} className="giffp1" alt="logo" />
            </li>

            <li>
              <p className="fp1">Forgot password </p>
            </li>
            <form className="form">
              <label className="lfp1">Email</label>
              <input className="fp1si" type="text"></input>

              <br />
              <button className="fp1bu">Next</button>
            </form>
          </ul>
        </div>
      </div>
    </>
  );
}
