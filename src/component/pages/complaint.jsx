import "./complaintS.css";

export default Complaint;

function Complaint(){
    return( <>
     
            <div className="bodyc">

                <h1>Complaint</h1>

              
                        <div className="con">

                        <br/>
                            <form className="form">
                                <label>Name</label>
                                <br/>
                                <input className="in1" type="text"></input>
                                <br/>
                                <label>Email</label>
                                <br/>
                                <input className="in1" type="text"></input>
                                <br/>
                                <label>Your Complaint</label>
                                <br/>
                                <textarea className="ta1"></textarea>
                                <br/>
                            </form>
                        </div>
               
            </div>

 
        </>
    )
}
