import "./signinS.css";
import Gif from "./logogif.gif";

export default Signin;

function Signin() {
  return (
    <>
      <div className="bodyin">
        <div className="info">
          <ul>
            <li>
              <img src={Gif} className="gifin" alt="logo" />
            </li>

            <li>
              <p className="sin">Sign In </p>
            </li>
            <form className="form">
              <label className="lin">Email</label>
              <input className="insi" type="text"></input>
              <label className="lin">Password</label>
              <input className="insi" type="password"></input>

              <br />
              <button className="inbu">Sign in</button>
            </form>
          </ul>
        </div>
      </div>
    </>
  );
}
