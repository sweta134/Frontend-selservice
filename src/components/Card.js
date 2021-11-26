import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'

export default function Card() {
    const history = useHistory();
    const addOnClick = () => {
        history.push("/current")
    }
    const addOnClickPrevious = () => {
        history.push("/previous")
    }
    const addOnClickUpcoming = () => {
        history.push("/upcoming")
    }
    const viewOnClick = () => {
        history.push("/Transaction")
    }

    const [currentValue, setCrrentValue] = useState([""]);
    const [previousValue, setPreviousValue] = useState([""]);
    const [upcomingValue, setUpcomingValue] = useState([""]);

    const getCurrentData = async () => {

        const data = await axios.post(
            "http://localhost:4000/get_dashboard_data/"
        );
        // console.log(data);
        setCrrentValue(data.data.data);
    };
    // console.log(currentValue);
    useEffect(() => {
        getCurrentData();
    }, []);


    // const getPreviousData = async () => {

    //     const data = await axios.post(
    //         "http://localhost:4000/get_dashboard_data/"
    //     );
    //     // console.log(data);
    //     setPreviousValue(data.data.data);
    // };
    // // console.log(value);
    
    // useEffect(() => {
    //     getPreviousData();
    // }, []);


    // const getUpcomingData = async () => {

    //     const data = await axios.post(
    //         "http://localhost:4000/get_dashboard_data/"
    //     );
    //     // console.log(data);
    //     setUpcomingValue(data.data.data);
    // };
    // // console.log(value);
    
    // useEffect(() => {
    //     getUpcomingData();
    // }, []);


    return (
        <>
            <div className="compcard container">
                
                <div className="m-15 row">
                    <div className="card col" style={{ width: 18 + 'rem' }}>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title" />
                            <h6 className="card-subtitle mb-2 text-muted">
                                <img className="logo img1" src="Assets/img/Current due.png" alt="" />
                                CURRENT DUES
                            </h6>
                            <p className="card-text">
                                ₹ {currentValue.total_due_amount}</p>

                            <div className="d-flex flex-row justify-content-between align-items-center mb-15">
                                <a className="card-link linkBtn" onClick={addOnClick}>
                                    VIEW DETAILS</a>
                                <a href="checkout.html" className="card-link linkBtn">PAY NOW</a>
                            </div>
                        </div>
                    </div>
                    <div className="card col" style={{ width: 18 + 'rem' }}>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title" />
                            <h6 className="card-subtitle mb-2 text-muted">
                                <img className="logo img2" src="Assets/img/Previous session .png" alt="" />
                                PREVIOUS DUES
                            </h6>
                            <p className="card-text">
                                            ₹ {currentValue.total_due_amount} </p>
                            <div className="d-flex flex-row justify-content-between align-items-center mb-15">
                                <a className="card-link linkBtn" onClick={addOnClickPrevious}>
                                    VIEW DETAILS</a>
                                <a href="checkout.html" className="card-link linkBtn">PAY NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-15 row">
                    <div className="card col" style={{ width: 18 + 'rem' }}>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title" />
                            <h6 className="card-subtitle mb-2 text-muted">
                                <img className="logo img3" src="Assets/img/Upcoming due.png" alt="" />
                                UPCOMING DUES
                            </h6>
                            <p className="card-text">
                                            ₹  </p>
                            <div className="d-flex flex-row justify-content-between align-items-center mb-15">
                                <a className="card-link linkBtn" onClick={addOnClickUpcoming}>
                                    VIEW DETAILS</a>
                                <a href="checkout.html" className="card-link linkBtn">PAY NOW</a>
                            </div>
                        </div>
                    </div>
                    <div className="card col" style={{ width: 18 + 'rem' }}>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title" />
                            <h6 className="card-subtitle mb-2 text-muted">
                                <img className="logo img4" src="Assets/img/Total payment.png" alt="" />
                                TOTAL PAYMENT
                            </h6>
                            <p className="card-text">
                                            ₹ </p>
                            <div className="d-flex flex-row justify-content-between align-items-center mb-15">
                                <a className="card-link linkBtn">
                                    VIEW DETAILS</a>
                            </div>
                            {/* <a href="#" class="card-link">Another link</a> */}
                        </div>
                    </div>
                </div>
                <div className="m-15 d-flex row">
                    <div className="card col" style={{ width: 18 + 'rem' }}>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title" />
                            <h6 className="card-subtitle mb-2 text-muted">
                                <img className="logo img5" src="Assets/img/Total commitment.png" alt="" />
                                TOTAL COMMITMENT
                            </h6>
                            <p className="card-text">
                                            ₹  </p>
                            <div className="d-flex flex-row justify-content-between align-items-center mb-15">
                                <a className="card-link linkBtn">
                                    VIEW DETAILS</a>
                            </div>
                            {/* <a href="#" class="card-link">Another link</a> */}
                        </div>
                    </div>
                    <div className="card col" style={{ width: 18 + 'rem' }}>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title" />
                            <h6 className="card-subtitle mb-2 text-muted">
                                <img className="logo img6" src="Assets/img/Transaction history.png" alt="" />
                                TRANSACTION HISTORY
                            </h6>
                            <p className="card-text">
                                <em>Check Your Transactions</em>
                            </p>
                            <div className="d-flex flex-row justify-content-between align-items-center mb-15">
                                <a className="card-link linkBtn" onClick={viewOnClick}>
                                    VIEW DETAILS</a>
                            </div>
                            {/* <a href="#" class="card-link">Another link</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
