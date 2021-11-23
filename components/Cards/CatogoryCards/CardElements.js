import styled from "styled-components";

const dark_blue_hover = "#182470";

const Image = styled.img`
	width: 100%;
`;

const Anchor = styled.a`
	text-decoration: none;
	color: black;
	&:hover {
		color: ${dark_blue_hover};
		cursor: pointer;
	}
`;

const Para = styled.p`
	font-size: 20px;
	padding-bottom: 10px;
`;

export { Image, Anchor, Para };
