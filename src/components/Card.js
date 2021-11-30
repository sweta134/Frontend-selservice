// Importing all the components required

import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'


// Use of useHistory and history.push for moving from one component to another
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
        history.push("/transaction")
    }


    // Fetching value from api and setting the value to the required components
    const [currentValue, setCrrentValue] = useState([""]);
    const [previousValue, setPreviousValue] = useState([""]);
    const [upcomingValue, setUpcomingValue] = useState([""]);
    const [totalPaymentValue, setTotalPaymentValue] = useState([""]);
    const [totalCommitmentValue, setTotalCommitmentValue] = useState([""]);

    const getCurrentData = async () => {

        // Calling the api for fetching the dashboard details
        const data = await axios.post(
            "http://localhost:4000/get_dashboard_details/"
        );
        console.log(data);
        setCrrentValue(data.data.Current_Due_Module);
        setPreviousValue(data.data.Previous_Due_Module);
        setUpcomingValue(data.data.Upcoming_Due_Module);
        setTotalPaymentValue(data.data.Total_payment_Module);
        setTotalCommitmentValue(data.data.Total_Commitment_module);
    };
    // console.log(currentValue);
    // console.log(previousValue);
    //console.log(totalCommitmentValue);
    // console.log(currentValue[0].CURRENT_DUE);
    
    useEffect(() => {
        getCurrentData();
    }, []);


    


    return (
        <>
            {/* Start of dashboard components */}
            <div className="compcard container">
              {/* Current dues component   */}
                <div className="m-15 row">
                    <div className="card col" style={{ width: 18 + 'rem' }}>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title" />
                            <h6 className="card-subtitle mb-2 text-muted">
                                <img className="logo img1" src="Assets/img/Current due.png" alt="" />
                                CURRENT DUES
                            </h6>
                            <p className="card-text">
                                 {(currentValue[0].CURRENT_DUE === null) ? "No Dues" : <>₹ {currentValue[0].CURRENT_DUE}</>}</p>

                            <div className="d-flex flex-row justify-content-between align-items-center mb-15">
                                <a className="card-link linkBtn" onClick={addOnClick}>
                                    VIEW DETAILS</a>
                                <a href="checkout.html" className="card-link linkBtn">PAY NOW</a>
                            </div>
                        </div>
                    </div>
                    {/* Previous due component */}
                    <div className="card col" style={{ width: 18 + 'rem' }}>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title" />
                            <h6 className="card-subtitle mb-2 text-muted">
                                <img className="logo img2" src="Assets/img/Previous session .png" alt="" />
                                PREVIOUS DUES
                            </h6>
                            <p className="card-text">
                            {(previousValue[0].PREVIOUS_DUE === null) ? "No Dues" : <>₹ {previousValue[0].PREVIOUS_DUE}</>} </p>
                            <div className="d-flex flex-row justify-content-between align-items-center mb-15">
                                <a className="card-link linkBtn" onClick={addOnClickPrevious}>
                                    VIEW DETAILS</a>
                                <a href="checkout.html" className="card-link linkBtn">PAY NOW</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Upcoming Dues Component */}
                <div className="m-15 row">
                    <div className="card col" style={{ width: 18 + 'rem' }}>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title" />
                            <h6 className="card-subtitle mb-2 text-muted">
                                <img className="logo img3" src="Assets/img/Upcoming due.png" alt="" />
                                UPCOMING DUES
                            </h6>
                            <p className="card-text">
                                    {(upcomingValue[0].UPCOMING_DUE === null) ? "No Dues" : <>₹ {upcomingValue[0].UPCOMING_DUE}</>} </p>
                            <div className="d-flex flex-row justify-content-between align-items-center mb-15">
                                <a className="card-link linkBtn" onClick={addOnClickUpcoming}>
                                    VIEW DETAILS</a>
                                <a href="checkout.html" className="card-link linkBtn">PAY NOW</a>
                            </div>
                        </div>
                    </div>

                    {/* Total Payment Components */}
                    <div className="card col" style={{ width: 18 + 'rem' }}>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title" />
                            <h6 className="card-subtitle mb-2 text-muted">
                                <img className="logo img4" src="Assets/img/Total payment.png" alt="" />
                                TOTAL PAYMENT
                            </h6>
                            <p className="card-text">
                            {(totalPaymentValue[0].TOTAL_PAID_AMOUNT === null) ? "No Dues" : <>₹ {totalPaymentValue[0].TOTAL_PAID_AMOUNT}</>} </p>
                            <div className="d-flex flex-row justify-content-between align-items-center mb-15">
                                <a className="card-link linkBtn">
                                    VIEW DETAILS</a>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Total Commitment Component */}
                <div className="m-15 d-flex row">
                    <div className="card col" style={{ width: 18 + 'rem' }}>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title" />
                            <h6 className="card-subtitle mb-2 text-muted">
                                <img className="logo img5" src="Assets/img/Total commitment.png" alt="" />
                                TOTAL COMMITMENT
                            </h6>
                            <p className="card-text">
                                     {(totalCommitmentValue[0].TOTAL_COMMITMENT === null) ? "No Dues" : <>₹ {totalCommitmentValue[0].TOTAL_COMMITMENT}</>} </p>
                            <div className="d-flex flex-row justify-content-between align-items-center mb-15">
                                <a className="card-link linkBtn">
                                    VIEW DETAILS</a>
                            </div>
                        </div>
                    </div>

                    {/* Transaction History Component */}
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
