import "../styles/components/navigation.scss"
import logo from "../assets/icons/logo.jpeg";
import { BsSearch } from "react-icons/bs";

export default function Navigation() {
  return (
    <div className="navigation-container">
      <center>
        {" "}
        <h1>MAIN NAVIGATION</h1>
      </center>
      <nav className="main-nav">
        <div className="logo-section">
          <img src={logo} alt="logo" />
        </div>
        <div className="links-section">
          <button>Help center</button>
          <button>Login</button>
          <button>Sign up</button>
        </div>
      </nav>

      <center>
        {" "}
        <h1>SEARCH NAVIGATION</h1>
      </center>

      <nav className="search-nav">
        <div className="item-section">
          <p>Looking for</p>
          <div className="input">
            <input type="text" placeholder="The Avengers" />
          </div>
        </div>

        <div className="item-section">
          <p>In</p>
          <div className="input">
            <select name="" id="">
              <option value="">Event location</option>
            </select>{" "}
          </div>
        </div>

        <div className="item-section">
          <p>Where</p>
          <div className="input">
            <select name="" id="">
              <option value="">Today</option>
              <option value="">Any Date</option>
              <option value="">Date 3</option>
            </select>
          </div>
        </div>

        <div className="item-section search">
          <BsSearch className="icon" />
        </div>
      </nav>

      <center>
        {" "}
        <h1>OTHER NAVIGATION</h1>
      </center>

      <nav className="other-nav">
        <div className="item">
          <h5>Upcoming Events</h5>
        </div>
        <div className="options">
          <select name="" id="">
            <option value="">Weekdays</option>
          </select>
          <select name="" id="">
            <option value="">Event Type</option>
          </select>
          <select name="" id="">
            <option value="">Any Category</option>
          </select>
        </div>
      </nav>
    </div>
  );
}
