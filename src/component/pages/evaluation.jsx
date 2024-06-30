import { useEffect } from "react";
import "./evaluationS.css";
import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
export default Evaluation;

function Evaluation() {
  const [Eval, setEval] = useState([]);

  // Fetch data from the API using Axios
  useEffect(() => {
    const fetchComments = async () => {
      try {
        debugger
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/evaluate/getEvaluate`);
        setEval(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    };

    fetchComments();
  }, []);
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
                        {Eval?.adminCNum}
                    </p>

                </td>

                <td>
                    <p className="ti">Feelings</p>
                <br/>

                    <p className="num">
                        {Eval?.feelingsNum}
                    </p>

                </td>
            </tr>
          

          </table>
        </div>
      </div>
    </>
  );
}
