import React from 'react'
// import { IoLocationSharp } from "react-icons/io"
import mov_img from "../assets/images/event-details.jpg"
import PageNav from '../components/PageNav'
export default function MovieDetails() {
    return (
        <div>MovieDetails
            <PageNav/>
            <div classNameNameName="my_movie">
                <div classNameName="main">
                    <div classNameName="eventdetail-page">


                        <section>
                            <div className="mov_banner">
                                <div className="back_btn"></div>
                            </div>
                        </section>
                        {/* <section classNameName="eventdetail-banner">
                            <img alt="img"
                                src={mov_img}
                                classNameName="w-100 " />
                            <div classNameName="content">
                                <div classNameName="h-100 pt-5 pb-5 container">
                                    <div classNameName="h-100 align-items-center mt-4 row">
                                        <div classNameName="col-12">
                                            <p aria-current="page"
                                                className="back-btn active" href="/">
                                                <svg
                                                    aria-hidden="true"
                                                    focusable="false"
                                                    data-prefix="fas"
                                                    data-icon="arrow-left"
                                                    className="svg-inline--fa fa-arrow-left fa-w-14 "
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 448 512">
                                                    <path fill="currentColor"
                                                        d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z">
                                                    </path>
                                                </svg>Back
                                            </p>
                                        </div>
                                        <div className="pt-4 col-12 col-md-7 col-lg-6">
                                            <h2>

                                            </h2>
                                            <p className="sc-dfVpRl eroqSS"></p>
                                            <p></p>
                                            <div className="sc-gzOgki krDvKm">
                                                <p className="viewmap-btn nav-link">
                                                    <IoIosPin />
                                                    <path fill="currentColor"
                                                        d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                                                    </path>View
                                                    Map
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="ml-auto col-12 col-md-5 col-lg-4">
                                            <div className="datetime-boxs">
                                                <h4>Date &amp; Time</h4>
                                                <p>

                                                </p>
                                                <div
                                                    className="w-100 add-to-calendar-wrap">
                                                    <div
                                                        className="react-add-to-calendar">
                                                        <div
                                                            className="react-add-to-calendar__wrapper">
                                                           
                                                            <p className="react-add-to-calendar__button">
                                                                <span>
                                                                    <i
                                                                        className="react-add-to-calendar__icon--left fa fa-calendar-plus-o"></i>
                                                                    Add to My
                                                                    Calendar
                                                                </span>
                                                            </p>


                                                          
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary w-100">
                                                        Book Now ( )
                                                    </button>
                                                </div>
                                                <button
                                                    type="button"
                                                    className="btn btn-light w-100">Promoter
                                                    Program
                                                </button>
                                                
                                                No refunds
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section> */}

                        <section className="eventdetail-section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-md-7">
                                        <div className="description-box">
                                            <h3>Description</h3>
                                            <p>

                                            </p>
                                        </div>
                                        <div className="hours-boxs">
                                            <h3>Hours</h3>
                                            <ul><li>Start Hours:
                                                <span></span>
                                            </li>
                                                <li>Hours:
                                                    <span></span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="howcan-boxs">
                                            <h3>How can I
                                                contact the organizer with any
                                                question?
                                            </h3>
                                            <p></p>
                                        </div>
                                    </div>
                                    <div className="ml-auto col-12 col-md-5 col-lg-4">
                                        <div className="location-boxs">
                                            <h3>Event Location </h3>
                                            <div className="map">

                                            </div>
                                        </div>
                                        <div className="location-boxs">
                                            <h3>

                                            </h3>
                                            <p>

                                            </p>
                                        </div>
                                        <div className="tags-list">
                                            <h3>Tags</h3>
                                            <ul>

                                            </ul>
                                        </div>
                                        <div className="share-boxs"><h3>Share With
                                            Friends</h3>
                                            <ul>
                                                <li>
                                                    <button
                                                        aria-label="facebook"
                                                        className="react-share__ShareButton"
                                                    // style="background-color: transparent; border: none; padding: 0px; font: inherit; color: inherit; cursor: pointer;"
                                                    >
                                                        <svg viewBox="0 0 64 64" width="35" height="35"                                                        >
                                                            <circle cx="32" cy="32" r="31" fill="#3b5998"> </circle>
                                                            <path
                                                                d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
                                                                fill="white">

                                                            </path>
                                                        </svg>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        aria-label="twitter"
                                                        className="react-share__ShareButton"
                                                    // style="background-color: transparent; border: none; padding: 0px; font: inherit; color: inherit; cursor: pointer;"
                                                    >
                                                        <svg
                                                            viewBox="0 0 64 64"
                                                            width="35" height="35"><circle
                                                                cx="32" cy="32"
                                                                r="31"
                                                                fill="#00aced"></circle>
                                                            <path
                                                                d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
                                                                fill="white">
                                                            </path>
                                                        </svg>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        aria-label="whatsapp"
                                                        className="react-share__ShareButton"
                                                    // style="background-color: transparent; border: none; padding: 0px; font: inherit; color: inherit; cursor: pointer;"
                                                    >
                                                        <svg
                                                            viewBox="0 0 64 64"
                                                            width="35" height="35">
                                                            <circle
                                                                cx="32" cy="32"
                                                                r="31"
                                                                fill="#25D366">
                                                            </circle>
                                                            <path
                                                                d="m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"
                                                                fill="white">
                                                            </path>
                                                        </svg>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        aria-label="email"
                                                        className="react-share__ShareButton"
                                                    // style="background-color: transparent; border: none; padding: 0px; font: inherit; color: inherit; cursor: pointer;"
                                                    >
                                                        <svg
                                                            viewBox="0 0 64 64"
                                                            width="35" height="35">
                                                            <circle
                                                                cx="32" cy="32"
                                                                r="31"
                                                                fill="#7f7f7f">
                                                            </circle>
                                                            <path
                                                                d="M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"
                                                                fill="white">
                                                            </path>
                                                        </svg>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="upcoming-bg">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <h2>Other Events You May Like</h2>
                                    </div>
                                    <div className="col-12 text-center mt-5 pt-5">
                                        {/* <a className="btn btn-primary"
                                        href="/search-events">Load More Events

                                    </a> */}
                                        Load More Movies
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
