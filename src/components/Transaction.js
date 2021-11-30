import React, { useState } from 'react'
import axios from "axios";
import { useEffect } from "react";
function Transaction() {


	// using useState for storing the values in 'transactionComp', fetching through the 'view_transaction_history' API
	const [transactionComp, setTransactionComp] = useState([""]);

	const getProductData = async () => {

		// creating a function 'getProductData' to fetch the data from API
		const data = await axios.post(
			"http://localhost:4000/view_transaction_history/"
		);

		setTransactionComp(data.data.data);
	};
	// console.log(transactionComp);

	// calling the 'getProductData' function in the 'useEffect' useState function 
	useEffect(() => {
		getProductData();
	}, []);

	// initialising 'compItems' vaiable to store the table data of previous VIEW details 
	let compItems;

	// initialising 'compItemsArray' array to store the 'compItems' data 
	let compItemsArray = [];

	// using for-in loop to iterate the array of object datas of 'transactionComp' 
	for (const key in transactionComp) {

		// console.log(transactionComp[key]);

		// storing the 'transactionComp' values in 'compItems' 
		compItems = (

			<tr>
				<td>{transactionComp[key].Transaction_date}</td>
				<td>{transactionComp[key].Receipt_ID}</td>
				<td>{transactionComp[key].Paid_amount}</td>
				<td>{transactionComp[key].mode}</td>
			</tr>

		)

		// pushing the values of 'compItems' into 'compItemsArray'
		compItemsArray.push(compItems);
	}

	return (
		<div className="container">
			<table class="table table-striped">
				<thead>
					<tr>
						<th>Transaction date</th>
						<th>Receipt ID</th>
						<th>Amount</th>
						<th>Payment mode</th>
					</tr>
				</thead>
				<tbody>
					{compItemsArray}
				</tbody>
			</table>

		</div>
	)
}

export default Transaction;
