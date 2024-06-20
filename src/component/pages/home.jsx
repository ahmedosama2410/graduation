import "./homeS.css";
import Gif from "../logogif.gif";
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from "../redux/actions";
export default Home;

function Home() {

  return (
    <>
      <div className="bodyc">
        <h1>Welcome</h1>
        <div className="home">
          <img src={Gif} className="gif" alt="logo" />
        </div>
      </div>
    </>
  );
}
