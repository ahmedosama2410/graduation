import { useEffect } from "react";
import "./contactusS.css";
import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
export default ContactUs;

function ContactUs() {
  const [contactUs, setContactUs] = useState([]);
  const [reload, setReaload] = useState([]);

  

  // Fetch data from the API using Axios
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/contactUs/findAll`);
        setContactUs(response.data);
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
  }, [reload]);
  
  const deleteChallenge = async (id) => {  
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/v1/contactUs/delete`, {
        params: {
          id: id
        }
      });
      setReaload(!reload)
      } catch (error) {
      console.error('Error deleting ContactUs:', error);
      // Handle error appropriately (e.g., show error message to user)
    }
  };
  return (
    <>
      <div className="bodyc">
        <h1>Contact Us</h1>

        <div className="con">
          <br />
          <table className="contta">
            {
              contactUs && contactUs?.map((item) => (
                <>
                  <tr className="contname">
                    {item.name}
                  </tr>
                  <tr >
                    <p className="cont"> {item.message}</p>
                  </tr>

                  <button
                          className="dbu"
                          onClick={() => deleteChallenge(item.id)}
                        >
                          Delete
                        </button>
                  <hr className="conthr" />
                </>
              ))
            }


          </table>
        </div>
      </div>
    </>
  );
}
