import styled from "styled-components";

const logo_blue_color = "#39427b";

const WelcomeCredit = styled.section`
	align-items: center;
	margin: auto;
`;

const WelcomeTitle = styled.h1`
	text-align: center;
	padding-top: 1em;
`;

const WelcomeSpan = styled.span`
	text-transform: uppercase;
	font-style: italic;
	position: relative;
	font-weight: bolder;
	z-index: 1;
	background: -webkit-linear-gradient(#eee, #333);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	&::before {
		position: absolute;
		content: " ";
		width: 2em;
		height: 0.2em;
		background: ${logo_blue_color};
		border-radius: 1em;
		bottom: 0.2em;
		z-index: -1;
	}
`;

export { WelcomeTitle, WelcomeCredit, WelcomeSpan };
