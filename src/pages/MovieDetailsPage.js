import React from 'react'
import "../styles/movieDetails/movieDetails.css"
import { MdLocationPin } from "react-icons/md"
import mov_img from "../assets/images/event-details.jpg"
import PageNav from '../components/PageNav'
export default function MovieDetailsPage() {
    return (
        <div>MovieDetailsPage
            <PageNav />
            <div classNameNameName="my_movie">
                <div classNameName="main_movie">
                    {/* <div className="movie_nav_2">
                        <div><h1>Event bux</h1></div>
                        <div className='Loggers'>
                            <div className="movie_login"><h1>Login</h1></div>
                            <div className="movie_signin"> <h1>Sign up</h1> </div>
                        </div>
                    </div> */}
                    
                    <div classNameName="eventdetail-page">


                        <section>
                            <div className="mov_banner">
                                <div className="banner_back">
                                    <div className="back_icon"></div>
                                    <div className="back_text">Back</div>
                                </div>
                                <div className="banner_text">
                                    <h1>Watch The World in</h1>
                                    <h1>Cinema</h1>
                                    <p>By Rework Academy</p>
                                    <p><h2><MdLocationPin className='movie_location_icon' /> View Map</h2></p>
                                </div>

                            </div>
                        </section>













                        
                    </div>
                </div>
            </div>
        </div>
    )
}
