import "./signinS.css";
import Gif from "./logogif.gif";
import { useState } from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default Signin;

function Signin() {
  const history = useHistory();

  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });
  // State to manage loading and error messages

  // Handle change for input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/v1/user/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      Swal.fire(data.message);
      if (data.status) {
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("admin", data.data.authorities[0].authority);
        history.push("/");
        window.location.reload();
      }

      // Handle successful login (e.g., redirect, store token, etc.)
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };
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
              <input
                className="insi"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
              ></input>
              <label className="lin">Password</label>
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="insi"
                type="password"
              ></input>

              <br />

              <br />
              <button className="inbu" onClick={handleSubmit}>
                Sign in
              </button>
            <div className="designLinks">

            <Link to="/signup">Create New Account</Link>
            <Link to="/forgetpass">Forget Password</Link>
            </div>

            </form>
          </ul>
        </div>
      </div>
    </>
  );
}
