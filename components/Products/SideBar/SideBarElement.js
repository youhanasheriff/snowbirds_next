import styled from "styled-components";
const logo_blue_color = "#39427b";

const FrequentCategory = styled.div`
	width: 20%;
	position: relative;
`;

const FcTitle = styled.p`
	position: relative;
	padding-left: 15px;
	&::after {
		display: inline-block;
		position: absolute;
		content: "";
		height: 3px;
		width: 25%;
		background-color: #39427b;
		bottom: -1px;
		left: 15px;
		border-radius: 5px;
	}
`;

const List = styled.ul`
	display: flex;
	flex-direction: column;
	padding-left: 15px;
`;

const ListItems = styled.li`
	list-style: none;
	padding: 7px 10px;
	margin: 5px;
	border-radius: 2px;
	cursor: pointer;
	box-shadow: 0 2.3px 43.7px rgb(0 0 0 / 23%);
	overflow: hidden;
	&::after {
		content: "";
		position: relative;
		width: 100%;
		height: 2.5px;
		left: 0;
		bottom: -17px;
		background: ${logo_blue_color};
		display: block;
		border-radius: 2px;
	}
	&:hover::after {
		transform: translateY(-10px);
		transition: transform 0.4s ease;
	}
`;

const Anchor = styled.a`
	text-decoration: none;
	color: black;
`;

export { FrequentCategory, FcTitle, List, ListItems, Anchor };
