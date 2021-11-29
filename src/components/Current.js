import React, { useState } from 'react'
import axios from "axios";
import { useEffect } from "react";
import './CSS/Navbar.css'
import './CSS/styprev.css'
import { Accordion } from 'react-bootstrap'

export default function Current() {

    // const [currentDetails, setcurrentDetails] = useState([""]);
    const [currentDetailsComp, setcurrentDetailsComp] = useState([""]);

    const getProductData = async () => {

        const data = await axios.post(
            "http://localhost:4000/get_current_details/"
        );
        // console.log(data.data);
        // setcurrentDetails(data.data.data.invoices);
        setcurrentDetailsComp(data.data.data.invoices);
    };
    // console.log(currentDetails);
    console.log(currentDetailsComp);
    console.log("hello");

    useEffect(() => {
        getProductData();
    }, []);
   
    let compItems;
    let component;

    let compItemsArray = [];
    let allInvoices = [];
    for (const key in currentDetailsComp) {
        // console.log("currentDetailsCompt");
        // console.log(currentDetailsComp[key]);
        const currentDetailsCompData = currentDetailsComp[key].component_data;
        compItemsArray = [];
        for (const keyData in currentDetailsCompData) {

            // console.log("---------------------------------------------");
            // console.log(currentDetailsCompData[keyData]);
            // console.log("---------------------------------------------");

            compItems = (

                <tr>
                    <th scope="row">{currentDetailsCompData[keyData].slno}</th>
                    <td>{currentDetailsCompData[keyData].component_name}</td>
                    <td>{currentDetailsCompData[keyData].amount}</td>
                </tr>

            )
            compItemsArray.push(compItems);

        }
        
        var listItem = (
        <Accordion.Item eventKey= {key}>
                {/* {counter += 1} */}
                <div className="container-extra" id="flush-heading{key}">
                    <h2>  Installment Date: {currentDetailsComp[key].payable_date}{'{'}Rs. {currentDetailsComp[key].total_amount}{'}'}
                        <br />
                        Invoice No. {currentDetailsComp[key].invoice_id}</h2>

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
                                <td>{currentDetailsComp[key].total_amount}</td>
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
                <h1 className="heading">Current Dues</h1>
                {allInvoices}
            </Accordion>
        </div>
    )

    var payButton ;
    if (allInvoices.length === 0) {
        payButton = <h3 className="heading">there is no Current Dues</h3>;
    } 
    else {
        payButton =(
            <>
                {component}
                <button className="btn btn-primary pay-btn">Pay</button>
            </>
        )

    }

    return (
        <>
            
            {payButton}
        </>
    )
}

