import "./userchallengesS.css";

export default UserChallenges;

function UserChallenges(){
    return( <>
     
            <div className="bodyc">

                <h1>User Challenges</h1>

                <div className="conc">
          <br />
          <form className="formuser">
            <label>Challenges Name</label>
            <br />
            <input className="in" type="text" />
            <br />
            <label>Brief</label>
            <br/>
            <input className="in" type="text" />
            <br />
            <label>Day 1</label>
            <br/>
            <input className="in" type="text" />
            <br />
            <label>Day 2</label>
            <br/>
            <input className="in" type="text" />
            <br />
            <label>Day 3</label>
            <br/>
            <input className="in" type="text" />
            <br />
          
               
            <button className="busa" type="button">
            Publish
            </button>
          </form>
        </div>
            </div>

 
        </>
    )
}
