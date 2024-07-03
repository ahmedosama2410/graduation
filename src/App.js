import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute"; // Import the ProtectedRoute component
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
      {/* <Route path="/Contact" component={ContactUs} /> */}
      <Route path="/Help" component={Help} />
      <Route path="/login" component={Signin} />
      <Route path="/signup" component={SignUp} />
      <Route path="/forgetpass" component={FPasswordEmail} />
      <Route path="/forgetpassNext" component={FPasswordCode} />
      <ProtectedRoute path="/Contact" component={ContactUs} />
      <ProtectedRoute path="/challenge/:id" component={Challenge} />
      <ProtectedRoute path="/feeling/:id" component={Feeling} />
      <ProtectedRoute path="/AddChallenges" component={AddChallenges} />
      <ProtectedRoute exact path="/AllChallenges" component={AllChallenges} />
      <ProtectedRoute path="/AllUserChallenges" component={AllUserChallenges} />
      <ProtectedRoute path="/userchallenge/:id" component={UserChallenges} />
      <ProtectedRoute path="/AddProblem" component={AddFeeling} />
      <ProtectedRoute exact path="/AllProblem" component={AllFeeling} />
      <ProtectedRoute path="/Comments" component={Comments} />
      <ProtectedRoute path="/Evaluation" component={Evaluation} />
    </Switch>
  );

  return (
    <div className="App">
      {!noHeaderFooterPaths.includes(location.pathname) && <Header />}
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
