import { Component } from "react";
import "./App.css";
import Body from "./component/body";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
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

//import Signin from "./component/signin";
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import UserChallenges from "./component/pages/userChallenges";
//import Footer from "./component/footer";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />


        <table className="table">
          <tr>
            <td className="dash">
              <div className="da">
                <DashBord />
              </div>
            </td>

            <td className="pages">
              <div className="pg">

                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={AboutUs} />
                  <Route path="/Contact" component={ContactUs} />
                  <Route path="/Help" component={Help} />
                  <Route path="/login" component={Signin} />
                  <Route path="/signup" component={SignUp} />
                  <Route path="/AddChallenges" component={AddChallenges} />
                  <Route exact path="/AllChallenges" component={AllChallenges} />
                  <Route path="/AllUserChallenges" component={AllUserChallenges} />
                  <Route path="/AddProblem" component={AddFeeling} />
                  <Route exact path="/AllProblem" component={AllFeeling} />
                  <Route path="/Comments" component={Comments} />
                  <Route path="/Evaluation" component={Evaluation} />
                </Switch>
              </div>
            </td>
          </tr>
        </table>


        <Footer />

      </div>
    );
  }
}
