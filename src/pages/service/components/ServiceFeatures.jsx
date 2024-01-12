import React from "react";
import { FaqItems } from "../../../components/FaqItems";

const ServiceFeatures = () => {
	return (
		<section className="features-section">
			<div className="container">
				<div className="section-title mb-60">
					<h2 className="title title-xl-title text-white pb-0">
						Features
					</h2>
				</div>
				<div className="row g-4">
					<div className="col-md-6">
						<FaqItems
							theme="white"
							data={data1}
							id="features-1"
							width="500px"
						/>
					</div>
					<div className="col-md-6">
						<FaqItems
							theme="white"
							data={data2}
							id="features-2"
							width="500px"
							firstClose
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

const data1 = [
	{
		title: "Inbound Marketing",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Automation",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "System Integration",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Client Relational Management",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Business Coaching & Startups",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Business Coaching & Startups",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Business Coaching & Startups",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Business Coaching & Startups",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Business Coaching & Startups",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Business Coaching & Startups",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
];
const data2 = [
	{
		title: "Sales Development",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Sales Development",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Client Relational Management",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Client Relational Management",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Business Coaching & Startups",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Business Coaching & Startups",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Business Coaching & Startups",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Business Coaching & Startups",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Business Coaching & Startups",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Business Coaching & Startups",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
];

export default ServiceFeatures;
