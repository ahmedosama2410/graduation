import "./commentsS.css";
import Like from "../like.png";
import Dislike from "../dislike.png";
import Photoc from "../photo.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

export default Comments;

function Comments() {
  // State to manage the list of comments
  const [comments, setAllComments] = useState([]);

  // Fetch data from the API using Axios
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/posts/getAllPosts`);
        setAllComments(response.data?.posts);
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

  // Function to delete a comment
  const deleteComment = async (id) => {
    const token = localStorage.getItem('token'); // or wherever your token is stored

    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/v1/posts/delete`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        params: {
          id: id
        }
      });

    } catch (error) {
      console.error("Error deleting comment:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  };

  return (
    <>
      <div className="bodyc">
        <h1>Comments</h1>
        <br />
        {comments && comments.map((item) => (
          <div className="com" key={item.id}>
            <div className="namec">
              <ul>
                <li>
                  <img src={item.image} className="photoc" alt="icon" />
                </li>
                <li>
                  <p className="name">{item.userName}</p>
                </li>
              </ul>
            </div>
            <br />
            <p className="pc">
              {item.content}
            </p>
            <br />
            <div className="iconc">
              <ul>
                <li>
                  <button className="buc" onClick={() => deleteComment(item.id)}>Delete</button>
                </li>
                <li>
                  <img src={Dislike} className="icc" alt="icon" />
                </li>
                <li>
                  <p className="cnum">{item.disLike}</p>
                </li>
                <li>
                  <img src={Like} className="icc" alt="icon" />
                </li>
                <li>
                  <p className="cnum">{item.like}</p>
                </li>
              </ul>
            </div>
            <br />
            <hr className="hrc" />
          </div>
        ))}
      </div>
    </>
  );
}
