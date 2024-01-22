import { useState } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus } from "./Icon";

export const FaqItems = ({ data, id, firstClose, theme, width }) => {
	const [open, setOpen] = useState(firstClose || 0);
	return (
		<div
      className={`accordion ${theme === "white" ? "theme-white" : ""} ${
        width ? "width--auto" : ""
      }`}
      id={id}
    >
			{data?.map(
				(
					{ title, text, info, facility, icon, readMoreUrl, buttonType },
					i
				) => (
					<div className="accordion-item" key={i}>
						<h2 className="accordion-header">
							<button
								className={`accordion-button ${icon ? "hasIcon" : ""}`}
								type="button"
								data-bs-toggle="collapse"
								data-bs-target={`#accordion-${id}-${i}`}
								aria-expanded="true"
								onClick={() => {
									i == open ? setOpen(null) : setOpen(i);
								}}
							>
								{icon && (
									<span className="me-2 me-sm-4 start-icon ">
										{icon}
									</span>
								)}
								{/* <span className="me-2 text-white">{title} </span> */}
								<span className={`me-2 ${theme === "white" ? "text-white" : ""}`}>
                  					{title}{" "}
                				</span>
								{facility && (
									<span className="subtxt"> ({facility})</span>
								)}
								<span className={`plus ms-auto ${theme === "white" ? "text-white" : ""}`}>
									{open !== i ? <Plus /> : <Minus />}
								</span>
							</button>
						</h2>
						<div
							id={`accordion-${id}-${i}`}
							className={`accordion-collapse collapse ${
								i == "0" ? firstClose || "show" : ""
							}`}
							data-bs-parent={`#${id}`}
						>
							<div className="accordion-body">
								<div className={icon ? "hasIcon" : ""}>
									{text && (
										<p
											style={{
												maxWidth: width ? `${width}` : "",
											}}
										>
											{text}
										</p>
									)}
									{info?.length && (
										<ul>
											{info?.map((item, i) => (
												<li key={i}>{item}</li>
											))}
										</ul>
									)}
									{readMoreUrl ? (
										<Link
											to={readMoreUrl}
											className="cmn-btn"
											data-bs-toggle={buttonType ? buttonType : ""}
										>
											Read More
										</Link>
									) : (
										""
									)}
								</div>
							</div>
						</div>
					</div>
				)
			)}
		</div>
	);
};
