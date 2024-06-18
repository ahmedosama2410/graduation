import "./signupS.css";
import Gif from "./logogif.gif";

export default SignUp;

function SignUp() {
  return (
    <>
      <div className="bodyup">
        <div className="info">
          <ul>
            <li>
              <img src={Gif} className="gifup" alt="logo" />
            </li>

            <li>
              <p className="sup">Sign Up </p>
            </li>
            <form className="form">
            <label className="lup">User Name</label>
              <input className="inup" type="text"></input>
              <label className="lup">Email</label>
              <input className="inup" type="text"></input>
              <label className="lup">Password</label>
              <input className="inup" type="password"></input>
              <label className="lup">confirm Password</label>
              <input className="inup" type="password"></input>

              <button className="upbu">Sign in</button>
            </form>
          </ul>
        </div>
      </div>
    </>
  );
}
