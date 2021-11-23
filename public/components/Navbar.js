import React from 'react'
import './CSS/Navbar.css';

export default function Navbar() {
    return (
        <div>
            <div className="top-menu">
                <ul className="nav navbar-nav pull-right">
                    {/* <!-- BEGIN NOTIFICATION DROPDOWN --/> */}
                    {/* <!-- DOC: Apply "dropdown-dark" class after "dropdown-extended" to change the dropdown styte -->
                    <!-- DOC: Apply "dropdown-hoverable" class after below "dropdown" and remove data-toggle="dropdown" data-hover="dropdown" data-close-others="true" attributes to enable hover dropdown mode -->
                    <!-- DOC: Remove "dropdown-hoverable" and add data-toggle="dropdown" data-hover="dropdown" data-close-others="true" attributes to the below A element with dropdown-toggle class --> */}
                    <li className="dropdown dropdown-extended dropdown-notification" id="header_notification_bar">
                        <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                            <i className="icon-bell"></i>
                            <span className="badge badge-default"> 7 </span>
                        </a>
                        <ul className="dropdown-menu">
                            <li className="external">
                                <h3>
                                    <span className="bold">12 pending</span> notifications</h3>
                                <a href="page_user_profile_1.html">view all</a>
                            </li>
                            <li>
                                <ul className="dropdown-menu-list scroller" style={{ height: 250 + 'px' }} data-handle-color="#637283">
                                    <li>
                                        <a href="javascript:;">
                                            <span className="time">just now</span>
                                            <span className="details">
                                                <span className="label label-sm label-icon label-success">
                                                    <i className="fa fa-plus"></i>
                                                </span> New user registered. </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                            <span className="time">3 mins</span>
                                            <span className="details">
                                                <span className="label label-sm label-icon label-danger">
                                                    <i className="fa fa-bolt"></i>
                                                </span> Server #12 overloaded. </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                            <span className="time">2 days</span>
                                            <span className="details">
                                                <span className="label label-sm label-icon label-danger">
                                                    <i className="fa fa-bolt"></i>
                                                </span> Database overloaded 68%. </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                            <span className="time">3 days</span>
                                            <span className="details">
                                                <span className="label label-sm label-icon label-danger">
                                                    <i className="fa fa-bolt"></i>
                                                </span> A user IP blocked. </span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li className="dropdown dropdown-extended dropdown-inbox" id="header_inbox_bar">
                        <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                            <i className="icon-envelope-open"></i>
                            <span className="badge badge-default"> 4 </span>
                        </a>
                        <ul className="dropdown-menu">
                            <li className="external">
                                <h3>You have
                                    <span className="bold">7 New</span> Messages</h3>
                                <a href="app_inbox.html">view all</a>
                            </li>
                            <li>
                                <ul className="dropdown-menu-list scroller" style={{height: 275+'px'}} data-handle-color="#637283">
                                    <li>
                                        <a href="#">
                                            <span className="photo">
                                                <img src="../assets/layouts/layout3/img/avatar2.jpg" className="img-circle" alt="" /> </span>
                                            <span className="subject">
                                                <span className="from"> Lisa Wong </span>
                                                <span className="time">Just Now </span>
                                            </span>
                                            <span className="message"> Vivamus sed auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

        </div>
    )
}
