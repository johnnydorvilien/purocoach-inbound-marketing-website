import React from "react";
import { FaqItems } from "../../components/FaqItems";
import Title from "../../components/Title";

const WhayChooseUs = () => {
	return (
		<>
			<section className="why-choose-us">
				<div className="container">
					<div className="row gy-3">
						<div className="col-lg-6">
							<div className="choose-title">
								<Title
									className="text-start"
									title="Why Customers Choose Us"
								/>
							</div>
							<div className="title-dark">
								<FaqItems firstClose data={data} id="choose" />
							</div>
						</div>
						<div className="col-lg-6 ps-xl-5">
							<div className="choose-title">
								<Title className="text-start" title="Our Client Success" />
							</div>
							<div
								className="light-txt mb-3 mb-lg-5"
								style={{ marginTop: "-10px" }}
							>
								We strive to bring the best and brightest together from around the country to create successful digital strategies and a collaborative environment that caters to professional growth.
							</div>
							<SkillItem data={data2} />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

const SkillItem = () => {
	return (
		<>
			<ul className="skills">
				{data2?.map((item, i) => (
					<li className="skill-item">
						<div className="skill-inner">
							<span className="skill-total"></span>
							<span
								className="skill-progress"
								style={{ height: item?.progress }}
							></span>
						</div>
						<div>{item?.title}</div>
						<div>{item?.progress}</div>
					</li>
				))}
			</ul>
		</>
	);
};

const data2 = [
	{
		title: "Success Rate",
		progress: "97%",
	},
	{
		title: "Star Rating on Google",
		progress: "4.8%",
	},
	{
		title: "Happy Clents",
		progress: "78%",
	},
];

const data = [
	{
		title: "We are experts at what we do with top-notch consultants",
		text: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.",
	},
	{
		title: "We put our clients at the core of our business",
		text: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.",
	},
	{
		title: "We guarantee exceptional return on investment",
		text: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.",
	},
	{
		title: "We provide high quality services and full support",
		text: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.",
	},
	// {
	// 	title: "Team of professionals for your business growth",
	// 	text: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.",
	// },
];

export default WhayChooseUs;
