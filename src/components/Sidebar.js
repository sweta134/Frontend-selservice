import React from 'react'
// import ScriptTag from 'react-script-tag';

export default function Sidebar() {
    return (
            <div className="container-fluid snav">
                <div className="row">
                    <div className="col-sm-auto sticky-top snavcol">
                        <div className="d-flex flex-sm-column flex-row flex-nowrap align-items-center sticky-top snavcol2">
                            <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-wrap mb-auto mx-auto text-center align-items-center">
                                <li className="nav-item">
                                    <a href="/" className="nav-link py-3 px-2" title data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                                        <i className="fas fa-home" />
                                    </a>
                                </li>
                                <li>
                                </li><li className="nav-item">
                                    <a href="/" className="nav-link py-3 px-2" title data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                                        <i className="fas fa-tachometer-alt" />
                                    </a>
                                </li>
                                <a href="/" className="nav-link py-3 px-2" title data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                                    <i className="fas fa-coins" />
                                </a>
                                <li>
                                    <a href="/" className="nav-link py-3 px-2" title data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
                                        <i className="fas fa-graduation-cap" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="nav-link py-3 px-2" title data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products">
                                        <i className="fas fa-question-circle" />
                                    </a>
                                </li>
                            </ul>
                            <div className="dropdown">
                                <a href="/" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-user-circle" />
                                </a>
                                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
                                    <li><a className="dropdown-item" href="/">Profile</a></li>
                                    <li><a className="dropdown-item" href="/">Settings</a></li>
                                    <li><a className="dropdown-item" href="/">Log Out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm p-3 min-vh-100">
                        {/* content */}
                    </div>
                </div>
            </div>

    )
}
