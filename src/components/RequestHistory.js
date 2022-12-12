import React from 'react';

const RequestHistory = () => {
	return (
		<div className="py-4">
			<h4 className="py-2">Request History</h4>

			<ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
				<li className="nav-item" role="presentation">
					<button
						className="nav-link active"
						id="pills-home-tab"
						data-bs-toggle="pill"
						data-bs-target="#pills-home"
						type="button"
						role="tab"
						aria-controls="pills-home"
						aria-selected="true"
					>
						ETH Transaction History
					</button>
				</li>
				<li className="nav-item" role="presentation">
					<button
						className="nav-link"
						id="pills-profile-tab"
						data-bs-toggle="pill"
						data-bs-target="#pills-profile"
						type="button"
						role="tab"
						aria-controls="pills-profile"
						aria-selected="false"
					>
						TestLink Transaction History
					</button>
				</li>
			</ul>
			<div className="tab-content" id="pills-tabContent">
				<div
					className="tab-pane fade show active"
					id="pills-home"
					role="tabpanel"
					aria-labelledby="pills-home-tab"
				>
					<div className="py-2">
						<table className="table table-bordered text-center">
							<thead>
								<tr>
									<th scope="col">Sr</th>
									<th scope="col">Time</th>
									<th scope="col">Amount</th>
									<th scope="col">Hash</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>12:30 AM</td>
									<td>487</td>
									<td>4s8eruewrurks</td>
								</tr>
								<tr>
									<th scope="row">2</th>
									<td>10:30 AM</td>
									<td>875</td>
									<td>sf7s7ers4e7r7wser</td>
								</tr>
								<tr>
									<th scope="row">3</th>
									<td>11:30 AM</td>
									<td>797</td>
									<td>se4s7er7</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div
					className="tab-pane fade"
					id="pills-profile"
					role="tabpanel"
					aria-labelledby="pills-profile-tab"
				>
					<div className="py-2">
						<table className="table table-bordered text-center">
							<thead>
								<tr>
									<th scope="col">Sr</th>
									<th scope="col">Time</th>
									<th scope="col">Amount</th>
									<th scope="col">Hash</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>08:30 AM</td>
									<td>748</td>
									<td>7s7effkeurusue4</td>
								</tr>
								<tr>
									<th scope="row">2</th>
									<td>10:23 AM</td>
									<td>974</td>
									<td>sfe7r7sr4fer</td>
								</tr>
								<tr>
									<th scope="row">3</th>
									<td>11:10 AM</td>
									<td>874</td>
									<td>s4e7s8er</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RequestHistory;
