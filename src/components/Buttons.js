import React from 'react'
import "../styles/buttons/buttons.css"
import { BsSearch} from "react-icons/bs";
// import {BiCalendar} from 'react-icons/bi'

const Buttons = () => {
  return (
    <div>
              <div className="nav-bar">
        <h5>nav bar</h5>
        <button className="signup">Sign up</button>
        <button className="login">Login</button>
      </div>

      <div></div>

      <div className="upcoming">
        <h5>upcoming events</h5>
        <button className="search">
          <BsSearch />
        </button>
        
        <div className='lme-btn'>
        <button className="lme">Load More Events</button>
        </div>
      </div>

      <div className="bkr">
        <h5>calender</h5>
        <button className="Book-now">Book Now (Free) </button>
        <button className="Promoter">Promoter Program</button>
      </div>

      <div className="tags">
        <h5>Tags</h5>
        <button className="sub-tags">Indonesia Events</button>
        <button className="sub-tags">Jakatar Events</button>
        <button className="sub-tags">UI</button>
        <button className="sub-tags">Thing to do in Jakatar</button>
        <button className="sub-tags">Jakatar Seminar</button>
      </div>

      <div className="signuppage">
        <h5>sign up page</h5>
        <button className="signin">Sign In</button>
        <button className="signupp">Sign up</button>
      </div>      <div className="nav-bar">
        <h5>nav bar</h5>
        <button className="signup">Sign up</button>
        <button className="login">Login</button>
      </div>

      <div></div>

      <div className="upcoming">
        <h5>upcoming events</h5>
        <button className="search">
          <BsSearch />
        </button>
        <button className="lme">Load More Events</button>
      </div>

      <div className="bkr">
        <h5>calender</h5>
        <button className="Book-now">Book Now (Free) </button>
        <button className="Promoter">Promoter Program</button>
      </div>

      <div className="tags">
        <h5>Tags</h5>
        <button className="sub-tags">Indonesia Events</button>
        <button className="sub-tags">Jakatar Events</button>
        <button className="sub-tags">UI</button>
        <button className="sub-tags">Thing to do in Jakatar</button>
        <button className="sub-tags">Jakatar Seminar</button>
      </div>

      <div className="signuppage">
        <h5>sign up page</h5>
        <button className="signin">Sign In</button>
        <button className="signupp">Sign up</button>
      </div>
    </div>
  )
}

export default Buttons