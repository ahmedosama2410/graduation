import { Link } from "react-router-dom";
import "./headerS.css";
import Logo from "./logoh.png";
export default Header;

function Header() {
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
                    <li>
                    </li>
                    <li>
                    <Link to="/login">Login   </Link>

                        {/* <a href="Log in">
                            Sign in
                        </a> */}
                    </li>
                </ul>
            </nav>
        </div>




    </>
    )
}

