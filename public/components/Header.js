import React from 'react'
import Navbar from './Navbar'

export default function Header() {
    return (
        <div>
            <div className="page-wrapper">
                {/* BEGIN HEADER  */}
                <div className="page-header navbar navbar-fixed-top">
                    {/* BEGIN HEADER INNER  */}
                    <div className="page-header-inner ">
                        {/* <!-- BEGIN LOGO --> */}
                        <div className="page-logo">
                            <a href="index.html">
                                <img src="logo192.png" alt="logo" className="logo-default" /> </a>
                            <div className="menu-toggler sidebar-toggler">
                                <span></span>
                            </div>
                        </div>
                        {/* <!-- END LOGO --> */}
                        {/* <!-- BEGIN RESPONSIVE MENU TOGGLER --> */}
                        <a href="javascript:;" className="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse">
                            <span></span>
                        </a>
                        {/* <!-- END RESPONSIVE MENU TOGGLER --> */}
                    </div>
                </div>
            </div>

            <Navbar/>
        </div>
    )
}


