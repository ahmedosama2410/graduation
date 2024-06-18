import "./bodyS.css";

import DashBord from "./dashbord";
import Footer from "./footer";
import Header from "./header";
import ContactUs from "./pages/contactus";

//import ContactUs from "./pages/contactus";

export default Body;

function Body() {
  return (
    <>
      <div className="body">
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
                <ContactUs/>
          
              </div>
            </td>
          </tr>
        </table>
        <Footer />
      </div>
    </>
  );
}
