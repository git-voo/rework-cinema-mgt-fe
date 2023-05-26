import React from 'react'
import "../../src/styles/sidebar/sideBar.css"
import { BiMovie } from "react-icons/bi";
import { MdEventSeat, MdOutlineManageAccounts } from "react-icons/md";
import { HiTicket } from "react-icons/hi";
import { GiFlatPlatform, GiTicket } from "react-icons/gi";
import { SiCinema4D } from "react-icons/si";
import { AiOutlineCustomerService, AiOutlineInfoCircle, AiOutlineSetting } from "react-icons/ai";





const Sidebar = () => {
    return (
        <div>
            <div className="contain">

                <ul className="sideBar-container">
                    <li className="sideBar-links">
                        <BiMovie />
                        Movies
                    </li>
                </ul>


                <ul className="sideBar-container">
                    <li className="sideBar-links">
                        <MdEventSeat />
                        Events
                    </li>
                </ul>


                <ul className="sideBar-container">
                    <li className="sideBar-links">
                        <MdOutlineManageAccounts/>
                        Account
                    </li>
                </ul>


                <ul className="sideBar-container">
                    <li className="sideBar-links">
                        <HiTicket/>
                        Event Tickets
                    </li>
                </ul>


                <ul className="sideBar-container">
                    <li className="sideBar-links">
                        <GiTicket/>
                        Booking
                    </li>
                </ul>


                <ul className="sideBar-container">
                    <li className="sideBar-links">
                        <SiCinema4D/>
                        Cinema
                    </li>
                </ul>



                <ul className="sideBar-container"> 

                    <li className="sideBar-links">
                        <GiFlatPlatform/>
                        Concerts
                    </li>
                </ul>



                <ul className="sideBar-container">
                    <li className="sideBar-links">
                        <AiOutlineSetting/>
                        Settings
                    </li>
                </ul>


                <ul className="sideBar-container">
                    <li className="sideBar-links">
                        <AiOutlineInfoCircle/>
                        About
                    </li>
                </ul>




                <ul className="sideBar-container">
                    <li className="sideBar-links">
                        <AiOutlineCustomerService/>
                        Contact
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar