import React, { Component, useState } from 'react'
import axios from "axios";
import { useEffect } from "react";
import './CSS/Navbar.css'
import './CSS/styprev.css'
import { Accordion } from 'react-bootstrap'
import { render } from '@testing-library/react';

export default function Previous() {

    const [previousDetails, setpreviousDetails] = useState([""]);
    const [previousDetailsComp, setpreviousDetailsComp] = useState([""]);

    const getProductData = async () => {

        const data = await axios.post(
            "http://localhost:4000/get_dashboard_data/"
        );
        // console.log(data.data);
        // setpreviousDetails(data.data.data.invoices);
        setpreviousDetailsComp(data.data.data.invoices);
    };
    // console.log(previousDetails);
    console.log(previousDetailsComp);
    console.log("hello");

    useEffect(() => {
        getProductData();
    }, []);
   
    let compItems;
    let component;

    let compItemsArray = [];
    let allInvoices = [];
    for (const key in previousDetailsComp) {
        console.log("previousDetailsCompt");
        console.log(previousDetailsComp[key]);
        const previousDetailsCompData = previousDetailsComp[key].component_data;
        compItemsArray = [];
        for (const keyData in previousDetailsCompData) {

            // console.log("---------------------------------------------");
            // console.log(previousDetailsCompData[keyData]);
            // console.log("---------------------------------------------");

            compItems = (

                <tr>
                    <th scope="row">{previousDetailsCompData[keyData].slno}</th>
                    <td>{previousDetailsCompData[keyData].component_name}</td>
                    <td>{previousDetailsCompData[keyData].amount}</td>
                </tr>

            )
            compItemsArray.push(compItems);

        }
        
        var listItem = (
        <Accordion.Item eventKey= {key}>
                {/* {counter += 1} */}
                <div className="container-extra" id="flush-heading{key}">
                    <h2>  Installment Date: July 13,2020{'{'}Rs. {previousDetailsComp[key].total_amount}{'}'}
                        <br />
                        Invoice No. {previousDetailsComp[key].invoice_id}</h2>

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
                                <td>{previousDetailsComp[key].total_amount}</td>
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
                <h1 className="heading">Previous Dues</h1>
                {allInvoices}
            </Accordion>
        </div>
    )
    return (
        <>
            
            {component}
            <button class="btn btn-primary pay-btn">Pay</button>
        </>
    )
}

