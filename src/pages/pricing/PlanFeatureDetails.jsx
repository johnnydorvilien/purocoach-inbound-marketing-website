import React from "react";
import { Check2, ClearIcon } from "../../components/Icon";
import Title from "../../components/Title";

const PlanFeatureDetails = () => {
	return (
		<>
			<section className="feature-details-section">
				<div className="container">
					<Title title="Plans features details" className="text-start" />
				</div>
				<div className="table-responsive">
					<table className="plan-feature-table">
						<thead>
							<tr>
								<th className="d-max-xl-none"></th>
								<th>Features</th>
								{data?.map((item, i) => (
									<th key={i}>{item?.name}</th>
								))}
								<th className="d-max-xl-none"></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="d-max-xl-none"></td>
								<td>
									<h6>All free tools</h6>
								</td>
								{data?.map((item, i) => (
									<td key={`${i}a`}>
										{item?.toolsFree ? (
											<Check2 />
										) : (
											<ClearIcon width="16" />
										)}
									</td>
								))}
								<td className="d-max-xl-none"></td>
							</tr>
							<tr>
								<td className="d-max-xl-none"></td>
								<td>
									<h6>Forms</h6>
								</td>
								{data?.map((item, i) => (
									<td key={`${i}b`}>{item?.forms}</td>
								))}
								<td className="d-max-xl-none"></td>
							</tr>
							<tr>
								<td className="d-max-xl-none"></td>
								<td>
									<h6>Email Marketing</h6>
								</td>
								{data?.map((item, i) => (
									<td key={`${i}c`}>{item?.emailMarketing}</td>
								))}
								<td className="d-max-xl-none"></td>
							</tr>
							<tr>
								<td className="d-max-xl-none"></td>
								<td>
									<h6>Ad Management</h6>
								</td>
								{data?.map((item, i) => (
									<td key={`${i}c`}>{item?.adManagement}</td>
								))}
								<td className="d-max-xl-none"></td>
							</tr>
							<tr>
								<td className="d-max-xl-none"></td>
								<td>
									<h6>Landing pages</h6>
								</td>
								{data?.map((item, i) => (
									<td key={`${i}d`}>{item?.landingPages}</td>
								))}
								<td className="d-max-xl-none"></td>
							</tr>
							<tr>
								<td className="d-max-xl-none"></td>
								<td>
									<h6>Shared inbox</h6>
								</td>
								{data?.map((item, i) => (
									<td key={`${i}e`}>{item?.sharedInbox}</td>
								))}
								<td className="d-max-xl-none"></td>
							</tr>
							<tr>
								<td className="d-max-xl-none"></td>
								<td>
									<h6>Lorem ipsum dolor</h6>
								</td>
								{data?.map((item, i) => (
									<td key={`${i}f`}>
										{item?.loremStatus ? (
											<Check2 />
										) : (
											<ClearIcon width="16" />
										)}
									</td>
								))}
								<td className="d-max-xl-none"></td>
							</tr>
							<tr>
								<td className="d-max-xl-none"></td>
								<td>
									<h6>Lorem ipsum dolor</h6>
								</td>
								{data?.map((item, i) => (
									<td key={`${i}g`}>{item?.loremDolor}</td>
								))}
								<td className="d-max-xl-none"></td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
		</>
	);
};

const data = [
	{
		name: "Intro",
		toolsFree: true,
		forms: "Lorem ipsum dolor",
		emailMarketing: "Lorem ipsum dolor sit amet consectetur. Eget mauris",
		adManagement: "Lorem ipsum dolor sit amet consectetur. Eget mauris",
		landingPages: "Lorem ipsum dolor sit amet consectetur. Scelerisque",
		sharedInbox: "Lorem ipsum dolor",
		loremStatus: true,
		loremDolor: "Lorem ipsum dolor",
	},
	{
		name: "Base",
		toolsFree: true,
		forms: "Lorem ipsum dolor sit amet consectetur. Eget mauris",
		emailMarketing:
			"Lorem ipsum dolor sit amet consectetur. Scelerisque tempor nulla proin tellus lectus. Ultrices a ac hendrerit nec interdum. Velit lectus.",
		adManagement:
			"Lorem ipsum dolor sit amet consectetur. Scelerisque tempor nulla proin tellus lectus. Ultrices",
		landingPages: "Lorem ipsum dolor sit amet consectetur. Scelerisque",
		sharedInbox: "Lorem ipsum dolor",
		loremStatus: true,
		loremDolor:
			"Lorem ipsum dolor sit amet consectetur. Scelerisque tempor nulla proin tellus lectus. Ultrices",
	},
	{
		name: "Popular",
		toolsFree: true,
		forms: "Lorem ipsum dolor sit amet consectetur. Eget mauris",
		emailMarketing:
			"Lorem ipsum dolor sit amet consectetur. Scelerisque tempor nulla proin tellus lectus. Ultrices",
		adManagement:
			"Lorem ipsum dolor sit amet consectetur. Scelerisque tempor",
		landingPages: "Lorem ipsum dolor sit amet consectetur. Scelerisque",
		sharedInbox: "Lorem ipsum dolor",
		loremStatus: true,
		loremDolor: "Lorem ipsum dolor sit amet consectetur. Scelerisque tempor",
	},
	{
		name: "Enterprise",
		toolsFree: true,
		forms: "Lorem ipsum dolor",
		emailMarketing:
			"Lorem ipsum dolor sit amet consectetur. Scelerisque tempor nulla proin tellus lectus. Ultrices a ac hendrerit nec interdum. Velit lectus.",
		adManagement:
			"Lorem ipsum dolor sit amet consectetur. Scelerisque tempors",
		landingPages: "Lorem ipsum dolor sit amet consectetur. Scelerisque",
		sharedInbox: "Lorem ipsum dolor",
		loremStatus: true,
		loremDolor: "Lorem ipsum dolor sit amet consectetur. Scelerisque tempor",
	},
];

export default PlanFeatureDetails;
