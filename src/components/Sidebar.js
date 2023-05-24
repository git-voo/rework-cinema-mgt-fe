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

                <ul>
                    <li>
                        <BiMovie />
                        Movies
                    </li>
                </ul>


                <ul>
                    <li>
                        <MdEventSeat />
                        Events
                    </li>
                </ul>


                <ul>
                    <li>
                        <MdOutlineManageAccounts/>
                        Account
                    </li>
                </ul>


                <ul>
                    <li>
                        <HiTicket/>
                        Event Tickets
                    </li>
                </ul>


                <ul>
                    <li>
                        <GiTicket/>
                        Booking
                    </li>
                </ul>


                <ul>
                    <li>
                        <SiCinema4D/>
                        Cinema
                    </li>
                </ul>



                <ul>

                    <li>
                        <GiFlatPlatform/>
                        Concerts
                    </li>
                </ul>



                <ul>
                    <li>
                        <AiOutlineSetting/>
                        Settings
                    </li>
                </ul>


                <ul>
                    <li>
                        <AiOutlineInfoCircle/>
                        About
                    </li>
                </ul>




                <ul>
                    <li>
                        <AiOutlineCustomerService/>
                        Contact
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar