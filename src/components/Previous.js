import React, { useState } from 'react'
import axios from "axios";
import { useEffect } from "react";
import './CSS/Navbar.css'
import './CSS/styprev.css'
import { Accordion } from 'react-bootstrap'

export default function Previous() {

    // using useState for storing the values in 'previousDetailsComp', fetching through the 'get_previous_details' API  
    const [previousDetailsComp, setpreviousDetailsComp] = useState([""]);

    // creating a function 'getProductData' to fetch the data from API 
    const getProductData = async () => {

        const data = await axios.post(
            "http://localhost:4000/get_previous_details/"
        );
        setpreviousDetailsComp(data.data.data.invoices);
    };
    // console.log(previousDetailsComp);

    // calling the 'getProductData' function in the 'useEffect' useState function 
    useEffect(() => {
        getProductData();
    }, []);
   
    // initialising 'compItems' vaiable to store the table data of previous VIEW details 
    let compItems;
   
    // initialising 'component' vaiable to store the Overall data of previous VIEW details 
    let component;

    // initialising 'compItemsArray' array to store the 'compItems' data 
    let compItemsArray = [];
    
    // initialising 'allInvoices' array to store the 'component' data 
    let allInvoices = [];

    // using for-in loops to iterate the array of object datas of 'previousDetailsComp'
    for (const key in previousDetailsComp) {

        // console.log(previousDetailsComp[key]);

        // initialising 'previousDetailsCompData' variable to store the data of 'previousDetailsComp[key].component_data'
        const previousDetailsCompData = previousDetailsComp[key].component_data;
        compItemsArray = [];

        // using for-in loops to iterate the array of object datas of 'previousDetailsCompData' 
        for (const keyData in previousDetailsCompData) {

            // console.log(previousDetailsCompData[keyData]);

            // storing the 'previousDetailsCompData' values in 'compItems'
            compItems = (

                <tr>
                    <th scope="row">{previousDetailsCompData[keyData].slno}</th>
                    <td>{previousDetailsCompData[keyData].component_name}</td>
                    <td>{previousDetailsCompData[keyData].amount}</td>
                </tr>

            )

            // pushing the values of 'compItems' into 'compItemsArray'
            compItemsArray.push(compItems);

        }
        
        // creating listItem variabe to store previousDetailsComp data and for displaying in the accordion header
        var listItem = (
        <Accordion.Item eventKey= {key}>
                {/* {counter += 1} */}
                <div className="container-extra" id="flush-heading{key}">
                    <h2>  Installment Date: {previousDetailsComp[key].payable_date}{'{'}Rs. {previousDetailsComp[key].total_amount}{'}'}
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

        // pushing the 'listItem' values in the 'allInvoices' array
        allInvoices.push(listItem);
           
    }
    // console.log(allInvoices);

    // storing values in 'component'
    component = (

        <div className="container">
            <Accordion>
                <h1 className="heading">Previous Dues</h1>
                {allInvoices}
            </Accordion>
        </div>
    )


    // checking if there is any dues or not
    var payButton ;
    if (allInvoices.length === 0) {
        payButton = <h3 className="heading">there is no Previous Dues</h3>;
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

