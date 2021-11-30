import React, { useState } from 'react'
import axios from "axios";
import { useEffect } from "react";
import './CSS/Navbar.css'
import './CSS/styprev.css'
import { Accordion } from 'react-bootstrap'

export default function Upcoming() {

    // using useState for storing the values in 'upcomingDetailsComp', fetching through the 'get_upcoming_details' API  
    const [upcomingDetailsComp, setupcomingDetailsComp] = useState([""]);

    // creating a function 'getProductData' to fetch the data from API 
    const getProductData = async () => {

        const data = await axios.post(
            "http://localhost:4000/get_upcoming_details/"
        );
        setupcomingDetailsComp(data.data.data.invoices);
    };
    // console.log(upcomingDetailsComp);

    // calling the 'getProductData' function in the 'useEffect' useState function 
    useEffect(() => {
        getProductData();
    }, []);
   
    // initialising 'compItems' vaiable to store the table data of upcoming VIEW details 
    let compItems;
   
    // initialising 'component' vaiable to store the Overall data of upcoming VIEW details 
    let component;

    // initialising 'compItemsArray' array to store the 'compItems' data 
    let compItemsArray = [];
    
    // initialising 'allInvoices' array to store the 'component' data 
    let allInvoices = [];

    // using for-in loops to iterate the array of object datas of 'upcomingDetailsComp'
    for (const key in upcomingDetailsComp) {

        // console.log(upcomingDetailsComp[key]);

        // initialising 'upcomingDetailsCompData' variable to store the data of 'upcomingDetailsComp[key].component_data'
        const upcomingDetailsCompData = upcomingDetailsComp[key].component_data;
        compItemsArray = [];

        // using for-in loops to iterate the array of object datas of 'upcomingDetailsCompData' 
        for (const keyData in upcomingDetailsCompData) {

            // console.log(upcomingDetailsCompData[keyData]);

            // storing the 'upcomingDetailsCompData' values in 'compItems'
            compItems = (

                <tr>
                    <th scope="row">{upcomingDetailsCompData[keyData].slno}</th>
                    <td>{upcomingDetailsCompData[keyData].component_name}</td>
                    <td>{upcomingDetailsCompData[keyData].amount}</td>
                </tr>

            )

            // pushing the values of 'compItems' into 'compItemsArray'
            compItemsArray.push(compItems);

        }
        
        // creating listItem variabe to store upcomingDetailsComp data and for displaying in the accordion header
        var listItem = (
        <Accordion.Item eventKey= {key}>
                {/* {counter += 1} */}
                <div className="container-extra" id="flush-heading{key}">
                    <h2>  Installment Date: {upcomingDetailsComp[key].payable_date}{'{'}Rs. {upcomingDetailsComp[key].total_amount}{'}'}
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

        // pushing the 'listItem' values in the 'allInvoices' array
        allInvoices.push(listItem);
           
    }
    // console.log(allInvoices);

    // storing values in 'component'
    component = (

        <div className="container">
            <Accordion>
                <h1 className="heading">Upcoming Dues</h1>
                {allInvoices}
            </Accordion>
        </div>
    )


    // checking if there is any dues or not
    var payButton ;
    if (allInvoices.length === 0) {
        payButton = <h3 className="heading">there is no Upcoming Dues</h3>;
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

