import React from 'react'
import JsonData from './response.json'
function Transaction(){
	const DisplayData=JsonData.map(
		(info)=>{
			return(
				<tr>
					<td>{info.Transaction_date}</td>
					<td>{info.Receipt_ID}</td>
                    <td>{info.Paid_amount}</td>
                    <td>{info.mode}</td>
				</tr>
			)
		}
	)

	return(
		<div>
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
				
					
					{DisplayData}
					
				</tbody>
			</table>
			
		</div>
	)
}

export default Transaction;
