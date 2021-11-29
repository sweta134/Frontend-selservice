import React, { useState } from 'react'
import axios from "axios";
import { useEffect } from "react";
function Transaction() {

	// const DisplayData = JsonData.map(
	// 	(info) => {
	// 		return (
	// 			<tr>
	// 				<td>{info.Transaction_date}</td>
	// 				<td>{info.Receipt_ID}</td>
	// 				<td>{info.Paid_amount}</td>
	// 				<td>{info.mode}</td>
	// 			</tr>
	// 		)
	// 	}
	// )

	const [transactionComp, setTransactionComp] = useState([""]);

	const getProductData = async () => {

		const data = await axios.post(
			"http://localhost:4000/view_transaction_history/"
		);

		setTransactionComp(data.data.data);
	};
	// console.log(transactionComp);

	useEffect(() => {
		getProductData();
	}, []);

	let compItems;
	let compItemsArray = [];

	for (const key in transactionComp) {

		console.log(transactionComp[key]);
		compItems = (

			<tr>
				<td>{transactionComp[key].Transaction_date}</td>
				<td>{transactionComp[key].Receipt_ID}</td>
				<td>{transactionComp[key].Paid_amount}</td>
				<td>{transactionComp[key].mode}</td>
			</tr>

		)

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
