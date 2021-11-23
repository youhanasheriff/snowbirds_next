import React from "react";
import { baseUrl } from "../../../constants/consts";
import * as Elements from "./CardElements";

const FeaturedCard = ({ url, title, para }) => {
	return (
		<>
			<Elements.Image src={baseUrl + url} alt={title} />
			<Elements.Title>{title}</Elements.Title>
			<Elements.Paragraph>{para}</Elements.Paragraph>
		</>
	);
};

export default FeaturedCard;
