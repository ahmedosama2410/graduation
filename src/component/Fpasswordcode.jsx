import "./FpasswordecodeS.css";
import Gif from "./logogif.gif";

export default FPasswordCode;

function FPasswordCode() {
  return (
    <>
      <div className="bodyfp2">
        <div className="info">
          <ul>
            <li>
              <img src={Gif} className="giffp2" alt="logo" />
            </li>

            <li>
              <p className="fp2">Forgot password </p>
            </li>
            <form className="form">
              <label className="lfp2">Code</label>
              <input className="fp2si" type="text"></input>

              <label className="lfp2">New Password</label>
              <input className="fp2si" type="password"></input>

              <label className="lfp2">Confirm new password</label>
              <input className="fp2si" type="password"></input>

              <br />
              <button className="fp2bu">Save</button>
            </form>
          </ul>
        </div>
      </div>
    </>
  );
}
