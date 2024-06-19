import "./signupS.css";
import Gif from "./logogif.gif";
import Swal from 'sweetalert2'
import { useState } from "react";

import { useHistory } from 'react-router-dom';
export default SignUp;

function SignUp() {
  const history = useHistory();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPass: '',
    phone: '',
    role: 'ADMIN',
  });
  // State to manage loading and error messages



  // Handle change for input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/user/save`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('SignUp failed');
      }

      const data = await response.json();
      Swal.fire(data.message);
      if (data.status) {
        localStorage.setItem("token", data.accessToken)
        localStorage.setItem("admin", data.data.authorities[0].authority);
        history.push('/');
        window.location.reload()
      }

      // Handle successful login (e.g., redirect, store token, etc.)
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  };
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
              <label className="lup">UserName</label>
              <input className="inup"
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"></input>
              <label className="lup">Email</label>
              <input className="inup"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
              ></input>
              <label className="lup">Password</label>
              <input className="inup"
               name="password"
               value={formData.password}
               onChange={handleChange}
              type="password"></input>
              <label className="lup">confirm Password</label>
              <input className="inup"
               name="confirmPass"
               value={formData.confirmPass}
               onChange={handleChange}
              type="confirmPass"></input>
              <label className="lup">Phone</label>
              <input className="inup" 
               name="phone"
               value={formData.phone}
               onChange={handleChange}
              type="text"></input>
              <button className="upbu" onClick={handleSubmit}>Sign in</button>
            </form>
          </ul>
        </div>
      </div>
    </>
  );
}
