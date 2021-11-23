import React from "react";
import * as Elements from "./CardElements";

const FeaturedCard = ({ url, title, para }) => {
	return (
		<>
			<Elements.Image src={url} alt={title} />
			<Elements.Title>{title}</Elements.Title>
			<Elements.Paragraph>{para}</Elements.Paragraph>
		</>
	);
};

export default FeaturedCard;
