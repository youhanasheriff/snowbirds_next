import styled from "styled-components";

const logo_blue_color = "#39427b";
const light_grey_white_olor = "#9e9b9b";
const dark_blue_hover = "#182470";

const FooterDiv = styled.footer`
	position: relative;
	bottom: 0;
	width: 100%;
	background: white;
	display: flex;
	@media screen and (max-width: 900px) {
		flex-direction: column;
	}
`;

const MainContent = styled.div`
	display: flex;
	border-top: 1px solid #3f3a3a;
`;

const Box = styled.div`
	flex-basis: 50%;
	padding: 10px 20px;
`;

const BoxContent = styled.div`
	margin: 20px 0 0 0;
	position: relative;
	&::before {
		position: absolute;
		content: "";
		top: -10px;
		height: 2px;
		width: 100%;
		background: white;
	}
	&::after {
		position: absolute;
		content: "";
		height: 2px;
		width: 15%;
		background: ${logo_blue_color};
		top: -10px;
	}
`;

const Heading = styled.h2`
	font-size: 1.125rem;
	font-weight: 600;
	text-transform: uppercase;
`;

const LeftBox = styled(Box)``;

const LeftPara = styled.p`
	text-align: justify;
	padding-right: 35px;
	@media screen and (max-width: 900px) {
		padding-right: 10px;
	}
`;

const CenterBox = styled(Box)``;

const RightBox = styled(Box)``;

const Icon = styled.img`
	font-size: 1.4375rem;
	background: ${logo_blue_color};
	color: ${light_grey_white_olor};
	height: 30px;
	width: 30px;
	/* line-height: 45px; */
	padding: 8px;
	margin-right: 10px;
	text-align: center;
	border-radius: 50%;
	transition: 0.3s;
	cursor: pointer;
	transition: all 300ms ease-in;
	&:hover {
		background: ${dark_blue_hover};
	}
`;

const Texts = styled.span`
	font-size: 1.0625rem;
	margin-bottom: 2px;
	/* color: #656565; */
	font-weight: 500;
`;

const Link = styled.a`
	text-decoration: none;
	color: black;
	display: flex;
	align-content: center;
	align-items: center;
	margin: 0 0 10px 0;
`;

export {
	FooterDiv,
	MainContent,
	Box,
	BoxContent,
	Heading,
	LeftBox,
	CenterBox,
	RightBox,
	LeftPara,
	Icon,
	Texts,
	Link,
};
