import React, { useState } from 'react';
import { BsSearch } from "react-icons/bs";
import {RxAvatar} from "react-icons/rx"

export default function UsersNav() {
    const [selectedValue, setSelectedValue] = useState('')


    function handleSelectChange(event) {
        setSelectedValue(event.target.value);
    }
    return (
        <div>UsersNav
            <div className="UN_container">

                <div className="UN-content w-25">
                    <p className='fw-bolder fs-4 UN_items'>MovieBux</p>
                </div>

                <div className="MovieBux d-flex w-50">
                    <p className='UN_items fw-bold'>Event Review</p>
                    <p className='UN_items fw-bold'>Personal Details</p>
                    <p className='UN_items fw-bold'>Help</p>
                    <p className='UN_items fw-bold'><RxAvatar className="fs-2"/>
                        <span >
                            <select value={selectedValue} onChange={handleSelectChange} className='set'>
                                <option value="" className=''><BsSearch /></option>
                                <option value="option1" className='options'>Profile</option>
                                <option value="option2" className='options'>Settings</option>
                                <option value="option3" className='options'>Security</option>
                                <option value="option3" className='options'>Accounts</option>
                                <option value="option3" className='options'>Transactions</option>
                                <option value="option3" className='options'>Logout</option>
                            </select>
                            {/* <p>Selected option: {selectedValue}</p> */}
                        </span>
                    </p>

                </div>

            </div>
        </div>
    )
}
