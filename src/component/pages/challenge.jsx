import "./challengeS.css";

export default Challenge;

function Challenge(){
    return( <>
     
     <div className="bodyc">
        <h1>Update Challenge</h1>
        <div className="conc">
          <br />
          <form className="formup">
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
              Save
            </button>
          </form>
        </div>
      </div>

 
        </>
    )
}
