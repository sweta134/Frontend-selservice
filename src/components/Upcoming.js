import React, { useState } from 'react'
import axios from "axios";
import { useEffect } from "react";
import './CSS/Navbar.css'
import './CSS/styprev.css'
import { Accordion } from 'react-bootstrap'

export default function Upcoming() {

    // const [upcomingDetails, setupcomingDetails] = useState([""]);
    const [upcomingDetailsComp, setupcomingDetailsComp] = useState([""]);

    const getProductData = async () => {

        const data = await axios.post(
            "http://localhost:4000/get_upcoming_details/"
        );
        // console.log(data.data);
        // setupcomingDetails(data.data.data.invoices);
        setupcomingDetailsComp(data.data.data.invoices);
    };
    // console.log(upcomingDetails);
    console.log(upcomingDetailsComp);
    console.log("hello");

    useEffect(() => {
        getProductData();
    }, []);

    let compItems;
    let component;

    let compItemsArray = [];
    let allInvoices = [];
    for (const key in upcomingDetailsComp) {
        // console.log("upcomingDetailsCompt");
        // console.log(upcomingDetailsComp[key]);
        const upcomingDetailsCompData = upcomingDetailsComp[key].component_data;
        compItemsArray = [];
        for (const keyData in upcomingDetailsCompData) {

            // console.log("---------------------------------------------");
            // console.log(upcomingDetailsCompData[keyData]);
            // console.log("---------------------------------------------");

            compItems = (

                <tr>
                    <th scope="row">{upcomingDetailsCompData[keyData].slno}</th>
                    <td>{upcomingDetailsCompData[keyData].component_name}</td>
                    <td>{upcomingDetailsCompData[keyData].amount}</td>
                </tr>

            )
            compItemsArray.push(compItems);

        }

        var listItem = (
            <Accordion.Item eventKey={key}>
                {/* {counter += 1} */}
                <div className="container-extra" id="flush-heading{key}">
                    <h2>  Installment Date: July 13,2020{'{'}Rs. {upcomingDetailsComp[key].total_amount}{'}'}
                        <br />
                        Invoice No. {upcomingDetailsComp[key].invoice_id}</h2>

                </div>
                <Accordion.Header>
                    Show Details
                </Accordion.Header>
                <button className="btn btn-primary">Pay</button>
                <Accordion.Body>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">S.No.</th>
                                <th scope="col">Fee Component</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {compItemsArray}
                            <tr>
                                <th scope="row">6</th>
                                <td>Total Payment</td>
                                <td>{upcomingDetailsComp[key].total_amount}</td>
                            </tr>
                        </tbody>
                    </table>
                </Accordion.Body>
            </Accordion.Item>
        );

        // console.log(compItemsArray);
        // console.log("printing key: " + key + " counter=" + counter);

        allInvoices.push(listItem);

    }
    // console.log("------------**----------**-------------");
    // console.log(allInvoices);
    component = (

        <div className="container">
            <Accordion>
                <h1 className="heading">Upcoming Dues</h1>
                {allInvoices}
            </Accordion>
        </div>
    )

    var payButton ;
    if (allInvoices.length === 0) {
        payButton = <h3 className="heading">There is no Upcoming Dues</h3>;
    } 
    else {
        payButton =(
            <>
                {component}
                <button className="btn btn-primary pay-btn">Pay</button>
            </>
        )

    }

    console.log(payButton);

    return (
        <>

            {/* <h3 className="heading">there is no Upcoming Dues</h3>

            {component}
            <button class="btn btn-primary pay-btn">Pay</button> */}
            {payButton}
        </>
    )
}


