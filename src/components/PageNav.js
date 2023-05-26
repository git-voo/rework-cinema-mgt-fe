import React from 'react'
import "../styles/components/pageNav.css"
import { TbDots, TbChevronLeft, TbChevronRight, TbSearch, TbWashDry, TbPlus } from "react-icons/tb"


export default function PageNav() {
    return (
        <div>PageNav
            <div className="page_navigation_container">

                <div className="pnc_content">

                    <div className="dots_chev">
                        <div className="dots">
                            <TbDots />
                        </div>
                        <div className="chevron">
                            <div className="chev_left">
                                <TbChevronLeft />
                            </div>
                            <div className="chev_right">
                                <TbChevronRight />
                            </div>
                        </div>
                    </div>

                    <div className="pnc_search">
                        <div className="main_search">
                            <div className="has-search">
                                <div className="search_icon">
                                    <span><TbSearch className="form-control-feedback" /></span>
                                </div>
                                <div className="search_input">
                                    <input type="text" className="Input_alas" placeholder="Search" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="wash_plus">
                        <div className="wash"><TbWashDry/></div>
                        <div className="plus"><TbPlus/></div>
                    </div>

                </div>
            </div>
        </div>
    )
}
