import "./commentsS.css";
import Like from "../like.png";
import Dislike from "../dislike.png";
import Photoc from "../photo.png";

export default Comments;

function Comments() {
  return (
    <>
      <div className="bodyc">
        <h1>Comments</h1>
        <br />

        <div className="com">
          <div className="namec">
            <ul>
              <li>
                <img src={Photoc} className="photoc" alt="icon" />
              </li>
              <li>
                <p className="name">Ali Ali</p>
              </li>
            </ul>
          </div>

          <br />
          <p className="pc">
            Our project contains the possibility of writing daily habits that
            the user wants to add and setting their alerts to commit to doing
            them daily. There are also habits or we can call them tasks at
            specific times.
          </p>

          <br />

          <div className="iconc">
            <ul>
              <li>
                <button className="buc">Delete</button>
              </li>

             

              <li>
                <img src={Dislike} className="icc" alt="icon" />
              </li>
              <li>
                <p className="cnum">3</p>
              </li>

              <li>
                <img src={Like} className="icc" alt="icon" />
              </li>

              <li>
                <p p className="cnum">7</p>
              </li>
            </ul>
          </div>
          <br />
          <hr className="hrc" />
        </div>
        {/*********************************************************************** */}
        <div className="com">
          <div className="namec">
            <ul>
              <li>
                <img src={Photoc} className="photoc" alt="icon" />
              </li>
              <li>
                <p className="name">Ali Ali</p>
              </li>
            </ul>
          </div>
          <br />
          <p className="pc">
            The application aims to help the user to be regular in his work and
            tasks and to establish the positive habits that he wants to adhere
            to instead of the negative habits that he returns to whenever he
            wants to stay away from them.
          </p>

          <br />

          <div className="iconc">
            <ul>
              <li>
                <button className="buc">Delete</button>
              </li>

             
              <li>
                <img src={Dislike} className="icc" alt="icon" />
              </li>
              <li>
                <p p className="cnum">0</p>
              </li>
             
              <li>
                <img src={Like} className="icc" alt="icon" />
              </li>

              <li>
                <p p className="cnum">9</p>
              </li>
            </ul>
          </div>
          <br />
          <hr className="hrc" />
        </div>
        {/*********************************************************************** */}
        <div className="com">
          <div className="namec">
            <ul>
              <li>
                <img src={Photoc} className="photoc" alt="icon" />
              </li>
              <li>
                <p className="name">Ali Ali</p>
              </li>
            </ul>
          </div>
          <br />
          <p className="pc">I like this App</p>

          <br />

          <div className="iconc">
            <ul>
              <li>
                <button className="buc">Delete</button>
              </li>

             
             
              <li>
                <img src={Dislike} className="icc" alt="icon" />
              </li>
              <li>
                <p p className="cnum">0</p>
              </li>
             
              <li>
                <img src={Like} className="icc" alt="icon" />
              </li>

              <li>
                <p p className="cnum">3</p>
              </li>
            </ul>
          </div>
          <br />
          <hr className="hrc" />
        </div>
        {/*********************************************************************** */}
        <div className="com">
          <div className="namec">
            <ul>
              <li>
                <img src={Photoc} className="photoc" alt="icon" />
              </li>
              <li>
                <p className="name">Ali Ali</p>
              </li>
            </ul>
          </div>
          <br />
          <p className="pc">I like this App</p>

          <br />

          <div className="iconc">
            <ul>
              <li>
                <button className="buc">Delete</button>
              </li>

           
              <li>
                <img src={Dislike} className="icc" alt="icon" />
              </li>
              <li>
                <p p className="cnum">8</p>
              </li>
            
              <li>
                <img src={Like} className="icc" alt="icon" />
              </li>

              <li>
                <p p className="cnum">9</p>
              </li>
            </ul>
          </div>
          <br />
          <br/>
        </div>
      </div>
    </>
  );
}
