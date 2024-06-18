import "./evaluationS.css";

export default Evaluation;

function Evaluation() {
  return (
    <>
      <div className="bodyc">
        <h1>Evaluation</h1>

        <div className="eva">
          <br />
          <table className="evata">
            <tr>
                <td>
                    <p className="ti">Challenges</p>
                <br/>

                    <p className="num">
                        8
                    </p>

                </td>

                <td>
                    <p className="ti">Feelings</p>
                <br/>

                    <p className="num">
                        10
                    </p>

                </td>
            </tr>
          

          </table>
        </div>
      </div>
    </>
  );
}
