import "./aboutusS.css";
import TeamP from "../our.png";
import LogoT from "../logogif.gif";


export default AboutUs;

function AboutUs(){
    return( <>
     
            <div className="about">

                <h1>About Us</h1>
                <img src={LogoT} className="logoT" alt="logl" />
                <br/>
                <br/>
                <p className="brief">Our application contributes to making a person’s life better and easier through self-development,
                <br/> constant reminders of tasks, adding useful habits to the user’s day instead of bad habits,
                <br/>and contributes to adjusting the user’s mood and giving him advice to overcome negative feelings.
                </p>


<br/>
<br/>
                
                <h1>Our Team</h1>
                <ul>

                        <li className="member">
                        <img src={TeamP} className="our" alt="our" />
                        <br/>
                        <br/>
                           <p className="namem"><b>Tasneem Hossam</b></p>
                           <p className="track">UI/UX and Front End</p>
                        </li>

                        <li className="member">
                        <img src={TeamP} className="our" alt="our" />
                        <br/>
                        <br/>
                        <p className="namem"><b>Medhat Samy</b></p>
                           <p className="track">Flutter</p>
                        </li>

                        <li className="member">
                        <img src={TeamP} className="our" alt="our" />
                        <br/>
                        <br/>
                        <p className="namem"><b>Reham Hany</b></p>
                           <p className="track">Java Developer</p>
                        </li >

                        <li className="member">
                        <img src={TeamP} className="our" alt="our" />
                        <br/>
                        <br/>
                        <p className="namem"><b>Sara Ehab</b></p>
                           <p className="track">Flutter</p>
                        </li>

                        
                        <li className="member">
                        <img src={TeamP} className="our" alt="our" />
                        <br/>
                        <br/>
                        <p className="namem"><b>Sara Sameh</b></p>
                           <p className="track">Flutter</p>
                        </li>

                        
                        <li className="member">
                        <img src={TeamP} className="our" alt="our" />
                        <br/>
                        <br/>
                        <p className="namem"><b>Sara Mohamed</b></p>
                           <p className="track">Java Developer</p>
                        </li>

                        
                        <li className="member">
                        <img src={TeamP} className="our" alt="our" />
                        <br/>
                        <br/>
                        <p className="namem"><b>Ahmed Osama</b></p>
                           <p className="track">Front End</p>
                        </li>
                      
                    </ul>
               
            </div>

 
        </>
    )
}
