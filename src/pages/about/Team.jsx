import React from "react";
import Title from "../../components/Title";
import img1 from "./img/team/1.png";
import img2 from "./img/team/2.png";
import img3 from "./img/team/3.png";
import img4 from "./img/team/4.png";
import img5 from "./img/team/5.png";
import img6 from "./img/team/6.png";
import img7 from "./img/team/7.png";
import img8 from "./img/team/8.png";
const Team = () => {
	return (
		<section className="team-section">
			<div className="container">
				<Title title="Our Leadership Team" className="text-base" />
				<div className="text-center light-txt mb-60">
					We have a dedicated team with top notch marketing strategists,
					experienced business and technical consultants, and certified
					coaches who form the backbone of this organization. They help us
					thrive day in and day out. Each member of our team is passionate
					about guiding, serving, and coaching our clients to help them
					achieve the business and client goals that matter the most.
				</div>
				<div className="team-wrapper">
					{data?.map((item, i) => (
						<div className="team-card" key={i}>
							<img src={item?.img} alt="" />
							<h5 className="name">{item?.name}</h5>
							<span className="designation">{item?.designation}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
const data = [
	{
		img: img1,
		name: "Nancy Fresier",
		designation: "Director of Operations",
	},
	{
		img: img2,
		name: "Denise Booker",
		designation: "HR Director",
	},
	{
		img: img3,
		name: "Stephen Patterson",
		designation: "Sales Director",
	},
	{
		img: img4,
		name: "Yan Shai",
		designation: "Marketing Director",
	},
	{
		img: img5,
		name: "Bridget Norwood",
		designation: "Director of Finance",
	},
	{
		img: img6,
		name: "Elma Rodrigez",
		designation: "Accounting Director",
	},
	{
		img: img7,
		name: "Eric Wilson",
		designation: "Customer Relations",
	},
	{
		img: img8,
		name: "Waqar Beeshed",
		designation: "IT Director",
	},
];

export default Team;
