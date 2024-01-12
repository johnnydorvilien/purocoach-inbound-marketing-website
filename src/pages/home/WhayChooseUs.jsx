import React from "react";
import { FaqItems } from "../../components/FaqItems";
import Title from "../../components/Title";

const WhayChooseUs = () => {
	return (
		<>
			<section className="why-choose-us">
				<div className="container">
					<div className="row gy-5">
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
								<Title className="text-start" title="Our Skills" />
							</div>
							<div
								className="light-txt mb-3 mb-lg-5"
								style={{ marginTop: "-10px" }}
							>
								I am text block. Click edit button to change this text.
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
								dapibus leo.
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
		title: "Consultancy",
		progress: "39%",
	},
	{
		title: "Funding",
		progress: "54%",
	},
	{
		title: "Investment",
		progress: "78%",
	},
];

const data = [
	{
		title: "The best consultancy services for you",
		text: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.",
	},
	{
		title: "Team of professionals for your business growth",
		text: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.",
	},
	{
		title: "Our offices are located worldwide",
		text: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.",
	},
	{
		title: "Your transactions will be secure",
		text: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.",
	},
	{
		title: "Team of professionals for your business growth",
		text: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.",
	},
];

export default WhayChooseUs;
