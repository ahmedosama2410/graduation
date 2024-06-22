import { Link } from "react-router-dom";
import "./headerS.css";
import Logo from "./logoh.png";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
export default Header;

function Header() {
    const [token,setToken] = useState(localStorage.getItem("token"))
    const logout=()=>{
     localStorage.removeItem("token")
     localStorage.removeItem("admin")
 
     window.location.reload()
    }
    return (<>

        <div className="header">
            <nav>
                <img src={Logo} className="logoh" alt="logo" />

                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        {/* 
                            <a href="Home">
                                Home
                            </a> */}
                    </li>
                    <li>
                    <Link to="/about">About us</Link>
                        {/* <a href="About us">
                            About us
                        </a> */}
                    </li>
                    <li>
                    <Link to="/Contact">Contact US</Link>
                        {/* <a href="Contact us">
                            Contact us
                        </a> */}
                    </li>
                   
                    <li>
                    </li>
              
               

                    {
                        token ? <div style={{display:"flex"}}>
                            <FaRegUserCircle  style={{margin:"28px 0" , cursor:"pointer",color:"#e5e5e5"}} className="hovered"/>
                            <button  onClick={logout} style={{background: "none", border: "none",color:"#fff", margin: "20px 15px"}} className="hovered">Logout</button>
                        </div> : <li>
                            <Link to="/login">Login   </Link>
                        </li>
                    }
               
                </ul>
            </nav>
        </div>




    </>
    )
}

