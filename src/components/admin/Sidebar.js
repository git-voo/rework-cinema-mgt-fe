import React, { useContext, useState } from 'react';
// import { MyContext } from '../../context/Context';
import '../../styles/admins/sidebar.scss'
import "../../styles/admins/dashboard.scss"


import Logo from '../../assets/images/2N-Logo-Transparent.png'
import Profile from '../../assets/images/pexels-megan-ruth-16642703.jpg'
import { Link } from 'react-router-dom'

export default function Sidebar() {

    const [noItem, setNoItem] = useState(false)

    window.onload = function () {
        const sidebar = document.querySelector('.sidebar');
        const closeBtn = document.querySelector('#btn');

        closeBtn.addEventListener('click', function () {
            sidebar.classList.toggle("open")
            menuBtnChange()
        })

        function menuBtnChange() {
            if (sidebar.classList.contains("open")) {
                setNoItem(true)
            } else {
                setNoItem(false)
            }
        }
    }
// const updateData ={}
//     // const { updateData } = useContext(MyContext);

//     const handleOpen = () => {
//         updateData('open');
//     };

//     const handleClose = () => {
//         updateData('close');
//     };

    return (
        <div>
            <div class="sidebar">
                <div class="logo_details">
                    {/* <i class="bx bxl-audible icon"></i> */}
                    <img src={Logo} alt="" className='icon' />
                    <div class="logo_name">Zephyr </div>
                    {!noItem ? <i class="bx bx-menu" id="btn" 
                    // onClick={handleClose}
                    ></i> :
                        <i class="bx bx-menu-alt-right" id="btn" 
                        // onClick={handleOpen}
                        ></i>
                        }
                </div>
                <ul class="nav-list p-0 ">
                    <li>
                        <Link to="/admin/">
                            <i class="bx bx-grid-alt"></i>
                            <span class="link_name">Dashboard</span>
                        </Link>
                        <span class="tooltip">Dashboard</span>
                    </li>
                    <li>
                        <Link to="/admin/">
                            <i class="bx bx-user"></i>
                            <span class="link_name">User</span>
                        </Link>
                        {/* <span class="tooltip">User</span> */}
                    </li>
                    <li>
                        <Link to="/admin/">
                            <i class="bx bx-chat"></i>
                            <span class="link_name">Message</span>
                        </Link>
                        <span class="tooltip">Message</span>
                    </li>
                    <li>
                        <Link to="/admin/">
                            <i class="bx bx-pie-chart-alt-2"></i>
                            <span class="link_name">Analytics</span>
                        </Link>
                        <span class="tooltip">Analytics</span>
                    </li>
                    <li>
                        <Link to="/admin/">
                            <i class="bx bx-folder"></i>
                            <span class="link_name">File Manager</span>
                        </Link>
                        <span class="tooltip">File Manager</span>
                    </li>
                    <li>
                        <Link to="/admin/">
                            <i class="bx bx-cart-alt"></i>
                            <span class="link_name">Order</span>
                        </Link>
                        <span class="tooltip">Order</span>
                    </li>
                    <li>
                        <Link to="/admin/">
                            <i class="bx bx-cog"></i>
                            <span class="link_name">Settings</span>
                        </Link>
                        <span class="tooltip">Settings</span>
                    </li>
                    <li class="profile">
                        <div class="profile_details">
                            <img src={Profile} alt="Profile Image" />
                            <div class="profile_content">
                                <div class="name">John Doe</div>
                                <div class="designation">Admin</div>
                            </div>
                        </div>
                        <div className="">
                            <i class="bx bx-log-out" id="log_out"></i>
                        </div>

                    </li>
                </ul>
            </div>
        </div>
    )
}

