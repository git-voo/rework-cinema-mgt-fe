
import React from 'react'
import "../styles/table/table.css"
import img1 from "../assets/images/logo.jpeg"



export default function Table() {
    return (
        <div>Table

            <div class="main-table-content">
                <div class="table-container">
                    <h1>Cinema Table UI</h1>
                    <br />
                   
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Patient</th>
                                <th>Status</th>
                                <th>Appointment</th>
                                <th>Phone</th>
                                <th>Doctor</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="user-info">
                                        <div class="user-info__img">
                                            <img src={img1} alt="User Img" />
                                        </div>
                                        <div class="user-info__basic">
                                            <h5 class="mb-0">Tony Brian</h5>
                                            <p class="text-muted mb-0">28 yrs, Male</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span class="btn btn-success">Consult</span>
                                </td>
                                <td>
                                    <h6 class="mb-0">06:00 PM</h6>
                                    <small>2 Feb 2021</small>
                                </td>
                                <td>
                                    <h6 class="mb-0">+91 9876543215</h6>
                                    <a href="#!"><small>Contact</small></a>
                                </td>
                                <td>
                                    <h6 class="mb-0">Dr. Ananth</h6>
                                </td>
                                <td>
                                    <div class="dropdown open">
                                        <div href="#!" class="px-2" id="triggerId1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            <i class="fa fa-ellipsis-v"></i>
                                        </div>
                                        <div class="dropdown-menu" aria-labelledby="triggerId1">
                                            <button class="dropdown-item" ><i class="fa fa-pencil mr-1"></i> Edit</button>
                                            <button class="dropdown-item text-danger" ><i class="fa fa-trash mr-1"></i> Delete</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="user-info">
                                        <div class="user-info__img">
                                            <img src={img1} alt="User Img" />
                                        </div>
                                        <div class="user-info__basic">
                                            <h5 class="mb-0">Agent Kings</h5>
                                            <p class="text-muted mb-0">23 yrs, Male</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span class="btn btn-primary">Revisit</span>
                                </td>
                                <td>
                                    <h6 class="mb-0">06:00 PM</h6>
                                    <small>7 Feb 2021</small>
                                </td>
                                <td>
                                    <h6 class="mb-0">+91 9876543215</h6>
                                    <div ><small>Contact</small></div>
                                </td>
                                <td>
                                    <h6 class="mb-0">Dr. Serah</h6>
                                </td>
                                <td>
                                    <div class="dropdown open">
                                        <a  class="px-2" id="triggerId1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            <i class="fa fa-ellipsis-v"></i>
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="triggerId1">
                                            <button class="dropdown-item" ><i class="fa fa-pencil mr-1"></i> Edit</button>
                                            <button class="dropdown-item text-danger" ><i class="fa fa-trash mr-1"></i> Delete</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="user-info">
                                        <div class="user-info__img">
                                            <img src={img1} alt="User Img" />
                                        </div>
                                        <div class="user-info__basic">
                                            <h5 class="mb-0">Jim Kennedy</h5>
                                            <p class="text-muted mb-0">28 yrs, Male</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span class="btn btn-success">Consult</span>
                                </td>
                                <td>
                                    <h6 class="mb-0">06:00 PM</h6>
                                    <small>2 Feb 2021</small>

                                </td>
                                <td>
                                    <h6 class="mb-0">+91 9876543215</h6>
                                    <button ><small>Contact</small></button>
                                </td>
                                <td>
                                    <h6 class="mb-0">Dr. Anthony</h6>
                                </td>
                                <td>
                                    <div class="dropdown open">
                                        <button  class="px-2" id="triggerId1" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            <i class="fa fa-ellipsis-v"></i>
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="triggerId1">
                                            <button class="dropdown-item" ><i class="fa fa-pencil mr-1"></i> Edit</button>
                                            <button class="dropdown-item text-danger" ><i class="fa fa-trash mr-1"></i> Delete</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
