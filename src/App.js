import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Body from "./component/body";
import AboutUs from "./component/pages/aboutus";
import Home from "./component/pages/home";
import AddChallenges from "./component/pages/addChallenges";
import AllChallenges from "./component/pages/allchallenges";
import AllUserChallenges from "./component/pages/alluserchallenges";
import AddFeeling from "./component/pages/addFeeling";
import AllFeeling from "./component/pages/allfeeling";
import Comments from "./component/pages/comments";
import Evaluation from "./component/pages/evaluation";
import ContactUs from "./component/pages/contactus";
import Help from "./component/pages/Help/Help";
import Signin from "./component/signin";
import SignUp from "./component/signup";
import Header from "./component/header";
import Footer from "./component/footer";
import DashBord from "./component/dashbord";
import Challenge from "./component/pages/challenge";
import Feeling from "./component/pages/feeling";
import UserChallenges from "./component/pages/userchallenges";
import FPasswordCode from "./component/Fpasswordcode";
import FPasswordEmail from "./component/Fpasswordemail";

function App() {
  const location = useLocation();

  // List of paths that should not show the header, footer, and sidebar
  const noHeaderFooterPaths = ["/login", "/signup", "/forgetpass", "/forgetpassNext"];

  const renderContent = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={AboutUs} />
      <Route path="/Contact" component={ContactUs} />
      <Route path="/Help" component={Help} />
      <Route path="/login" component={Signin} />
      <Route path="/challenge/:id" component={Challenge} />
      <Route path="/feeling/:id" component={Feeling} />
      <Route path="/signup" component={SignUp} />
      <Route path="/AddChallenges" component={AddChallenges} />
      <Route exact path="/AllChallenges" component={AllChallenges} />
      <Route path="/AllUserChallenges" component={AllUserChallenges} />
      <Route path="/userchallenge" component={UserChallenges} />
      <Route path="/AddProblem" component={AddFeeling} />
      <Route exact path="/AllProblem" component={AllFeeling} />
      <Route path="/Comments" component={Comments} />
      <Route path="/Evaluation" component={Evaluation} />
      <Route path="/forgetpass" component={FPasswordEmail} />
      <Route path="/forgetpassNext" component={FPasswordCode} />
    </Switch>
  );

  return (
    <div className="App">
    <Header />
      <table className="table">
        <tbody>
          <tr>
            {!noHeaderFooterPaths.includes(location.pathname) && (
              <td className="dash">
                <div className="da">
                  <DashBord />
                </div>
              </td>
            )}
            <td className="pages">
              <div className="pg">
                {renderContent()}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      {!noHeaderFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
