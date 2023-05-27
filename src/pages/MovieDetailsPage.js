import React from 'react'
import "../styles/movieDetails/movieDetails.css"
import { MdLocationPin } from "react-icons/md"
import { IoMdArrowRoundBack } from "react-icons/io"
import { BiPlus } from "react-icons/bi"
import PageNav from '../components/PageNav'
export default function MovieDetailsPage() {
    return (
        <div>MovieDetailsPage
            <PageNav />
            <div classNameNameName="my_movie">
                <div classNameName="main_movie">
                    <div className="movie_nav_2">
                        <div><h1 className='fs-4 fw-bold'>Event bux</h1></div>
                        <div className='Loggers'>
                            <div className="movie_login fw-bold">Login</div>
                            <div className="movie_signin fw-bold"> Sign up </div>
                        </div>
                    </div>

                    <div classNameName="eventdetail-page">


                        <section className='Calend'>

                            <div className="mov_banner">
                                <div className="banner_back mb-3">
                                    <div className="back_icon fs-5"> <IoMdArrowRoundBack /></div>
                                    <div className="back_text fs-6 px-2"> Back</div>
                                </div>
                                <div className="banner_text">
                                    <h1 className='fs-2'>Watch The World in</h1>
                                    <h1 className='fs-2 mb-3'>Nigeria</h1>
                                    <p className='fs-6 mb-2'>By Rework Academy</p>
                                    <p className='banner_back'>
                                        <h2><MdLocationPin className='movie_location_icon' /> </h2>
                                        <p className='px-2'>View Map</p>
                                    </p>
                                </div>

                            </div>

                            <div className="date_time">
                                <div className="DT_content fs-3 mb-1"><h1>Date and Time</h1></div>
                                <div className="DT-text1 mb-2"><p>Saturday, Sept 14. 2023 at 02:30 PM</p></div>
                                <div className="DT-Calender banner_back ml-1">
                                    <div><BiPlus /></div>
                                    <div className=' ml-1 mb-2'>Add to Calender</div>
                                </div>

                                {/* <div className="bkr"> */}
                                <div>
                                    <button className="BookNow p-2 fs-6 mb-2">Book Now (Free) </button>
                                </div>
                                <div>
                                    <button className="Promo p-2 fs-6 mb-2">Promoter Program</button>
                                </div>
                                {/* </div> */}
                                <center className='Refund fs-6'><div>Refund</div></center>
                            </div>


                        </section>














                    </div>
                </div>
            </div>
        </div>
    )
}
