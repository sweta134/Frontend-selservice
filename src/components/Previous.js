import React, { useState } from 'react'
import axios from "axios";
import { useEffect } from "react";
import './CSS/Navbar.css'
import './CSS/styprev.css'
import { Accordion } from 'react-bootstrap'

export default function Previous() {

    const [previousDetails, setpreviousDetails] = useState([""]);

    const getProductData = async () => {

        const data = await axios.post(
            "http://localhost:4000/get_previous_due_detail/"
        );
        // console.log(data.data);
        setpreviousDetails(data.data.data);
    };
    console.log(previousDetails);

    useEffect(() => {
        getProductData();
    }, []);


    const [previousDetailsSecond, setpreviousDetailsSecond] = useState([""]);

    const getProductDataSecond = async () => {

        const data = await axios.post(
            "http://localhost:4000/get_previous_due_detail_secondTable/"
        );
        // console.log(data.data);
        setpreviousDetailsSecond(data.data.data);
    };
    console.log(previousDetailsSecond);

    useEffect(() => {
        getProductDataSecond();
    }, []);


    const listItems = previousDetails.map((info) =>
        <tr>
            <th scope="row">{info.slno}</th>
            <td>{info.component_name}</td>
            <td>{info.amount}</td>
        </tr>
    );

    let totalAmount = 0;
    for (const key in previousDetails) {
        totalAmount += previousDetails[key].amount;   
    }
    

    const listItems2 = previousDetailsSecond.map((info) =>
        <tr>
            <th scope="row">{info.slno}</th>
            <td>{info.component_name}</td>
            <td>{info.amount}</td>
        </tr>
    );

    let totalAmountSecond = 0;
    for (const key in previousDetailsSecond) {
        totalAmountSecond += previousDetailsSecond[key].amount;   
    }

    return (
        <>
            <div className="container">
                <Accordion>
                    <h1 className="heading">Previous Dues</h1>
                    <Accordion.Item eventKey="0">
                        <div className="container-extra" id="flush-headingOne">
                            <h2>  Installment Date: July 13,2020{'{'}Rs. {totalAmount}{'}'}
                                <br />
                                Invoice No. {previousDetails[0].invoice_no}</h2>
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
                                        <td>{totalAmountSecond}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <div className="container-extra" id="flush-headingOne">
                            <h2>  Installment Date: July 13,2020{'{'}Rs. {totalAmountSecond}{'}'}
                                <br />
                                Invoice No. {previousDetailsSecond[0].invoice_no}</h2>
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
                                {listItems2}
                                    
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>Total Payment</td>
                                        <td>{totalAmountSecond}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Accordion.Body>
                    </Accordion.Item>
                    
                    {/* <Accordion.Item eventKey="2" className="mb-5">
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
                    </Accordion.Item> */}
                    {/* <Accordion.Item eventKey="1">
                        <Accordion.Header className="container-extra" >
                            <div className="container-extra"  id="flush-headingOne">
                              <h2>  Installment Date: September 13,2020{'{'}Rs. XXXXX{'}'}
                                <br />
                                Invoice No. 1234567890</h2>
                            <div className="btn-group">
                                <button className="accordion-button collapsed btn-primary btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"> Show details
                                </button>
                                <button className="btn btn-primary">Pay</button>
                            </div>
                        </div>
                        </Accordion.Header>
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
                    <Accordion.Item eventKey="2">
                        <Accordion.Header className="container-extra" >
                            <div className="container-extra"  id="flush-headingOne">
                              <h2>  Installment Date: November 13,2020{'{'}Rs. XXXXX{'}'}
                                <br />
                                Invoice No. 1234567890</h2>
                            <div className="btn-group">
                                <button className="accordion-button collapsed btn-primary btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"> Show details
                                </button>
                                <button className="btn btn-primary">Pay</button>
                            </div>
                        </div>
                        </Accordion.Header>
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
                    </Accordion.Item> */}
                </Accordion>
            </div>
            {/* <div>
                <h2 className="htext">Previous Dues</h2>
                <div className="container">
                    <div className="accordion accordion-flush accdiv" id="accordionFlushExample">
                    
                    

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                Installment Date: July 13,2020{'{'}Rs. XXXXX{'}'}
                                <br />
                                Invoice No. 1234567890
                                <div className="btn-group">
                                    <button className="accordion-button collapsed btn-primary btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"> Show details
                                    </button>
                                    <button className="accordion-button collapse-in btn-primary btn" data-bs-toggle="collapse-in" data-bs-target="#flush-collapseOne">Hide details
                                    </button>
                                    <button className="btn btn-primary">Pay</button>
                                </div>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
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
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                Installment Date: September 1,2020{'{'}Rs. XXXXX{'}'}
                                <br />
                                Invoice No. 5431627892
                                <div className="btn-group">
                                    <button className="accordion-button collapsed btn-primary btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"> Show details
                                    </button>
                                    <button className="accordion-button collapsed btn-primary btn" type="button">Hide details
                                    </button>
                                    <button className="btn btn-primary">Pay</button>
                                </div>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
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
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item third">
                            <h2 className="accordion-header" id="flush-headingThree">
                                Installment Date: November 1,2020{'{'}Rs. XXXXX{'}'}
                                <br />
                                Invoice No. 9784561230
                                <div className="btn-group">
                                    <button className="accordion-button collapsed btn-primary btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree"> Show details
                                    </button>
                                    <button className="accordion-button collapsed btn-primary btn" type="button">Hide details
                                    </button>
                                    <button className="btn btn-primary">Pay</button>
                                </div>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
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
                                </div>
                        </div>
                            </div>
                    </div>
                </div>
            </div>
             */}
            <button class="btn btn-primary pay-btn">Pay</button>
        </>
    )
}
