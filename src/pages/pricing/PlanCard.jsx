import React from "react";
import { Link } from "react-router-dom";
import { Check } from "../../components/Icon";

const PlanCard = (props) => {
	const { name, price, duration, subdata, index, yearly } = props;
	return (
		<>
			<div className={`plan-card ${index == "1" ? "active" : ""}`}>
				<h6 className="name">{name}</h6>
				{/* <h3 className="price">
					${yearly ? (12 * price).toFixed(2) : price}{" "}
					<small>/{duration}</small>{" "}
				</h3> */}
				<div className="txt">
					Lorem ipsum dolor sit amet consectetur. Eget mauris mattis.
				</div>
				<hr />
				<ul>
					{subdata?.map((item, i) => (
						<li key={i}>
							<Check />
							<span>Lorem ipsum dolor sit</span>
						</li>
					))}
				</ul>
				<Link to="/auth/login" className="cmn-btn">
					Contact for Price
				</Link>
			</div>
		</>
	);
};

export default PlanCard;
