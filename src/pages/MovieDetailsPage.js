import React from 'react'
import "../styles/movieDetails/movieDetails.css"
import { MdLocationPin, MdFacebook } from "react-icons/md"
import { IoMdArrowRoundBack } from "react-icons/io"
import { BiPlus } from "react-icons/bi"
import { AiFillTwitterCircle } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"
import PageNav from '../components/PageNav'
import img_location from "../assets/images/location_image.jpg"; 
import Footer from '../components/Footer'
import Cards from '../components/Cards'  
import GoTo from '../utils/GoTo'
export default function MovieDetailsPage() {
    return (
        <div> 
            {/* <PageNav /> */}
            <div className="movie-detail-container">
                <div className="main_movie row">
                    {/* <div className="movie_nav_2 col-xs-12 col-sm-6 col-md-4 col-lg-2">
                        <div><h1 className='fs-4 fw-bold'>Event bux</h1></div>
                        <div className='Loggers'>
                            <div className="movie_login fw-bold">Login</div>
                            <div className="movie_signin fw-bold"> Sign up </div>
                        </div>
                    </div> */}

                    <div className="eventdetail-page row">


                        <section className='Calend col-xs-12 col-sm-6 col-md-4 col-lg-2'>

                            <div className="mov_banner">
                                <div className="banner_back mb-3 bg-danger w-25"
                                // onClick={()=> { GoTo("/", false) }}
                                >
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

                        <section className='Movie_head mt-6 mb-6 col-xs-12 col-sm-1 col-md-3 col-lg-1'>

                            <div className="Descr_Hours">

                                <div className="Mov_description">

                                    <div>
                                        <h1 className='fw-bold fs-4 ml-6'>Description</h1>
                                    </div>
                                    <p className='w-75 m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Quod voluptatibus deserunt nulla debitis maxime mollitia
                                        aperiam id numquam possimus soluta beatae, ipsum
                                        exercitationem eligendi officiis minima sit! Fuga,
                                        pariatur eveniet.0
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Quod voluptatibus deserunt nulla debitis maxime mollitia
                                        aperiam id numquam possimus soluta beatae, ipsum
                                        exercitationem eligendi officiis minima sit! Fuga,
                                        pariatur eveniet.0
                                    </p>

                                    <p className='w-75 m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Quod voluptatibus deserunt nulla debitis maxime mollitia
                                        aperiam id numquam possimus soluta beatae, ipsum
                                        exercitationem eligendi officiis minima sit! Fuga,
                                        pariatur eveniet.0
                                    </p>
                                </div>

                                <div className="Mov_Hours m-4">
                                    <h1 className='fw-bold fs-4 mb-3'>Hours</h1>
                                    <p>Weekday Hours: <span className='fw-bold'>7PM - 10PM</span></p>
                                    <p>Sunday Hours: <span className='fw-bold'>10AM - 3PM</span></p>
                                </div>

                                <div className="Questions m-4">
                                    <h1 className='fw-bold fs-4 mb-3'>How can I contact the organizer with any question?</h1>
                                    <p className='w-75'>Please visit <span className='link2 fw-bold'>www.reworkacademy.com</span> and refer to the FAQS section for all
                                        questions and contact information</p>
                                </div>

                            </div>

                            <div className="Location_Dream ">

                                <div className="Mov_location">
                                    <h1 className='fw-bold fs-4 mb-1 ml-5'>Movie Location</h1>
                                    <img src={img_location} alt="" className='m-4' />
                                </div>

                                <div className="Dream">
                                    <h1 className='fw-bold fs-4 ml-5'>Dream World Wide in Rework</h1>
                                    <p className='w-75 ml-5'>Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Odit quisquam explicabo fugit,
                                        praesentium libero nihil reiciendis aperiam alias
                                        minus tempora cumque ducimus autem ratione vitae
                                        iusto neque sapiente. Sunt, id.
                                        minus tempora cumque ducimus autem ratione vitae
                                        iusto neque sapiente. Sunt, id.

                                    </p>
                                </div>

                                {/* <div className="Tags ml-5">
                                    <h1 className='fw-bold fs-4 mb-3 mt-3'>Tags</h1>
                                    <div className="all_tags w-75 d-flex">
                                        <div className="tag1 ">Tag 1</div>
                                        <div className="tag1 ">Tag 1</div>
                                        <div className="tag1 ">Tag 1</div>
                                        <div className="tag1 ">Tag 1</div>
                                        <div className="tag1 ">Tag 1</div>
                                    </div>
                                </div> */}
                                <div className="tags w-75">
                                    <h5 className='fs-4 fw-bold mb-2'>Tags</h5>
                                    <button className="sub-tags m-1">Indonesia Events</button>
                                    <button className="sub-tags m-1">Jakatar Events</button>
                                    <button className="sub-tags m-1">UI</button>
                                    <button className="sub-tags m-1">Thing to do in Jakatar</button>
                                    <button className="sub-tags m-1">Jakatar Seminar</button>
                                </div>

                                <div className="Share">
                                    <h1 className='fw-bold fs-4 mb-3 ml-5 mt-3'>Share With Friends</h1>
                                    <div className="social_icons ml-3 gap-2">
                                        <div className=''><MdFacebook className='facebook_icon fs-1' /></div>
                                        <div className=''><AiFillTwitterCircle className='twitter_icon fs-1' /> </div>
                                        <div className=''><FaLinkedinIn className="linkedln_icon fs-1" /></div>
                                    </div>
                                </div>

                            </div>

                        </section>

                        <section className='others col-xs-12 col-sm-6 col-md-4 col-lg-2'>
                            <div className="others_container">
                                <h1 className='fw-bold fs-3 mb-5'>Other Events You May Like for me</h1>
                                <Cards />
                            </div>

                        </section>
                        <div className="movie_footer mb-5">
                            <Footer />
                        </div>














                    </div>
                </div>
            </div>
        </div>
    )
}
