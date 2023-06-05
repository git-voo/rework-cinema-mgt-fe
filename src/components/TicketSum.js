import React from 'react'
import img_Pers from "../assets/images/image7.jpeg"

export default function TicketSum() {
    return (
        <div>
            <div className="TS_content">
                <center className="TS-img">
                    <img src={img_Pers} alt="Movie_img" className='img-pers' />
                </center>
                <div className="TS_Sum_and_loc mt-2">
                    <div className="TS_sum">
                        <b className='m-4'>Ticket Summary</b>
                        <div className="sub d-flex">
                            <p>2 Cen Sub</p>
                            <b>$600</b>
                        </div>
                        <div className="sub tab d-flex">
                            <p>Fees</p>
                            <b>$600</b>
                        </div>
                        <hr />

                        <div className="total sub d-flex">
                            <p>Total</p>
                            <b>$1200</b>
                        </div>
                    </div>

                    <div className="location">
                        <b>Location</b>
                        <p>This movie will be shown at <span className='blur'>Abuja Nigeria</span></p>
                        <b>Time</b>
                        <p>16:20 GMT</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
