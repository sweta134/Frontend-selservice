import React, { useState } from 'react'
import axios from "axios";
import { useEffect } from "react";
import './CSS/Navbar.css'
import './CSS/styprev.css'
import { Accordion } from 'react-bootstrap'

export default function Current() {

    // using useState for storing the values in 'currentDetailsComp', fetching through the 'get_current_details' API  
    const [currentDetailsComp, setcurrentDetailsComp] = useState([""]);

    // creating a function 'getProductData' to fetch the data from API 
    const getProductData = async () => {

        const data = await axios.post(
            "http://localhost:4000/get_current_details/"
        );
        setcurrentDetailsComp(data.data.data.invoices);
    };
    // console.log(currentDetailsComp);

    // calling the 'getProductData' function in the 'useEffect' useState function 
    useEffect(() => {
        getProductData();
    }, []);
   
    // initialising 'compItems' vaiable to store the table data of Current VIEW details 
    let compItems;
   
    // initialising 'component' vaiable to store the Overall data of Current VIEW details 
    let component;

    // initialising 'compItemsArray' array to store the 'compItems' data 
    let compItemsArray = [];
    
    // initialising 'allInvoices' array to store the 'component' data 
    let allInvoices = [];

    // using for-in loops to iterate the array of object datas of 'currentDetailsComp'
    for (const key in currentDetailsComp) {

        // console.log(currentDetailsComp[key]);

        // initialising 'currentDetailsCompData' variable to store the data of 'currentDetailsComp[key].component_data'
        const currentDetailsCompData = currentDetailsComp[key].component_data;
        compItemsArray = [];

        // using for-in loops to iterate the array of object datas of 'currentDetailsCompData' 
        for (const keyData in currentDetailsCompData) {

            // console.log(currentDetailsCompData[keyData]);

            // storing the 'currentDetailsCompData' values in 'compItems'
            compItems = (

                <tr>
                    <th scope="row">{currentDetailsCompData[keyData].slno}</th>
                    <td>{currentDetailsCompData[keyData].component_name}</td>
                    <td>{currentDetailsCompData[keyData].amount}</td>
                </tr>

            )

            // pushing the values of 'compItems' into 'compItemsArray'
            compItemsArray.push(compItems);

        }
        
        // creating listItem variabe to store currentDetailsComp data and for displaying in the accordion header
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

        // pushing the 'listItem' values in the 'allInvoices' array
        allInvoices.push(listItem);
           
    }
    // console.log(allInvoices);

    // storing values in 'component'
    component = (

        <div className="container">
            <Accordion>
                <h1 className="heading">Current Dues</h1>
                {allInvoices}
            </Accordion>
        </div>
    )


    // checking if there is any dues or not
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

