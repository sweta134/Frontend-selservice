import React, { useState } from 'react'
import axios from "axios";
import { useEffect } from "react";
import './CSS/Navbar.css'
import './CSS/styprev.css'
import { Accordion } from 'react-bootstrap'

export default function Current() {

    const [currentDetails, setCurrentDetails] = useState([""]);

    const getProductData = async () => {

        const data = await axios.post(
            "http://localhost:4000/get_current_due_detail/"
        );
        // console.log(data.data);
        setCurrentDetails(data.data.data);
    };
    console.log(currentDetails);

    useEffect(() => {
        getProductData();
    }, []);


    const [currentDetailsInvoice, setCurrentDetailsInvoice] = useState([""]);

    const getProductDataInvoice = async () => {

        const data = await axios.post(
            "http://localhost:4000/get_invoice_no/"
        );
        // console.log(data.data.data);
        setCurrentDetailsInvoice(data.data.data);
    };
    // console.log(currentDetailsInvoice);

    useEffect(() => {
        getProductDataInvoice();
    }, []);


    const listItems = currentDetails.map((info) =>
        <tr>
            <th scope="row">{info.slno}</th>
            <td>{info.component_name}</td>
            <td>{info.amount}</td>
        </tr>
    );

    let totalAmount = 0;
    for (const keyInv in currentDetailsInvoice) {
        for (const key in currentDetails) {
            if (currentDetailsInvoice[keyInv].invoice_no === currentDetails[key].invoice_no) {

                const items = currentDetails.slice(0, 5);
                totalAmount += currentDetails[key].amount;
            }
        }
    }

    // const listItemsInvoice = currentDetails.map((info) =>
    //     <h2>  Installment Date: July 13,2020{'{'}Rs. {totalAmount}{'}'}
    //         <br />
    //         Invoice No. {info.invoice_no}</h2>
    // );



    // const listItems = currentDetails.map((info) =>
    //     <Accordion.Item eventKey="0">
    //         <div className="container-extra" id="flush-headingOne">
    //             <h2>  Installment Date: July 13,2020{'{'}Rs. {totalAmount}{'}'}
    //                 <br />
    //                 Invoice No. {info.invoice_no}</h2>
    //         </div>
    //         <Accordion.Header>
    //             Show Details
    //         </Accordion.Header>
    //         <button className="btn btn-primary">Pay</button>
    //         <Accordion.Body>
    //             <table className="table">
    //                 <thead className="thead-dark">
    //                     <tr>
    //                         <th scope="col">S.No.</th>
    //                         <th scope="col">Fee Component</th>
    //                         <th scope="col">Amount</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     {/* {listItems} */}
    //                     <tr>
    //                         <th scope="row">{info.slno}</th>
    //                         <td>{info.component_name}</td>
    //                         <td>{info.amount}</td>
    //                     </tr>
    //                     <tr>
    //                         <th scope="row">6</th>
    //                         <td>Total Payment</td>
    //                         <td>{totalAmount}</td>
    //                     </tr>
    //                 </tbody>
    //             </table>
    //         </Accordion.Body>
    //     </Accordion.Item>
    // );



    return (
        <>
            <div className="container">
                <Accordion>
                    <h1 className="heading">Current Dues</h1>
                    {/* {listItems} */}
                    <Accordion.Item eventKey="0">
                        <div className="container-extra" id="flush-headingOne">
                            <h2>  Installment Date: July 13,2020{'{'}Rs. {totalAmount}{'}'}
                                <br />
                                Invoice No. {currentDetails[0].invoice_no}</h2>
                            {/* {listItemsInvoice} */}
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
                                    {listItems}
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>Total Payment</td>
                                        <td>{totalAmount}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <div className="container-extra" id="flush-headingOne">
                            <h2>  Installment Date: July 13,2020{'{'}Rs. XXXXX{'}'}
                                <br />
                                Invoice No. 1234567890</h2>
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
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Tution Fee</td>
                                        <td>xxxx</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Lunch and Refreshment Charges</td>
                                        <td>xxxx</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Sports and Extra Curricular Activities</td>
                                        <td>xxxx</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Digitalisation charges</td>
                                        <td>xxxx</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Transport Fees</td>
                                        <td>xxxx</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>Total Payment</td>
                                        <td>xxxxx</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </div>

            <button class="btn btn-primary pay-btn">Pay</button>
        </>
    )
}
