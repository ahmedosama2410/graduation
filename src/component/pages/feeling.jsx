import "./fellingS.css";

export default Feeling;

function Feeling(){
    return( <>
     
     <div className="bodyc">
        <h1>Update Feeling</h1>
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
            <label>Advice</label>
            <br/>
            <input className="in" type="text" />
            <br />
            <label>Advice</label>
            <br/>
            <input className="in" type="text" />
            <br />
            <label>Advice</label>
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
