import styled from "styled-components";

const BgDiv = styled.div`
	margin-top: 76px;
	height: 300px;
	width: 100%;
	background-size: cover;
	background-image: url(${({ url }) => url});
`;

const BlackBg = styled.div`
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.6);
`;

const LinkLoc = styled.p`
	color: white;
	position: relative;
	top: 25px;
	left: 45px;
`;

const Anchor = styled.a`
	color: white;
	text-decoration: none;
	cursor: pointer;
	font-weight: 500;
`;

const HeadingDiv = styled.div`
	position: relative;
	left: 20px;
`;

const Heading = styled.h1`
	position: relative;
	z-index: 1;
	top: 75px;
	font-size: 40px;
	text-align: center;
	font-variant: small-caps;
	color: white;
`;

export { BgDiv, BlackBg, LinkLoc, Anchor, Heading, HeadingDiv };
