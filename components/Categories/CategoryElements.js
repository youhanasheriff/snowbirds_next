import styled from "styled-components";

const white = "#ffffff";
const logo_blue_color = "#39427b";
// const light_grey_white_olor = "#9e9b9b";
// const dark_blue_hover = "#182470";

const Title = styled.h2`
	font-size: calc(1.325rem + 0.9vw);
`;

const HiddenRows = styled.div`
	display: ${({ isShow }) => (isShow ? "block" : "none")};
`;

const MoreButton = styled.div`
	margin: 0 auto 2em;
	width: 120px;
	height: 35px;
	border-radius: 20px;
	background-color: ${logo_blue_color};
	transition: all 300ms ease-in;
	border: 2px solid transparent;

	align-items: center;
	justify-content: center;
	color: white;
	&:hover {
		border: 2px solid ${logo_blue_color};
		background: transparent;
		cursor: pointer;
		transition: all 300ms ease-in;
	}
	&:hover h3 {
		color: ${logo_blue_color};
	}
`;

const ButtonText = styled.h3`
	color: ${white};
	transition: all 300ms ease-in;
`;

export { Title, HiddenRows, MoreButton, ButtonText };
