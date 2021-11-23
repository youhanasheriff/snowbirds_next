import styled from "styled-components";

const logo_blue_color = "#39427b";
const light_grey_white_olor = "#9e9b9b";
const dark_blue_hover = "#182470";

const Nav = styled.div`
	position: fixed;
	z-index: 99;
	top: 0;
	height: 76px;
	width: 100%;
	background-color: #fff;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
`;

const Wrapper = styled.div`
	position: relative;
	max-width: 1300px;
	padding: 0px 30px;
	height: 85px;
	line-height: 70px;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const LogoContainder = styled.div`
	margin-block: auto;
	a {
		font-size: 30px;
		font-weight: 600;
		text-decoration: none;
	}
`;

const MegaBox = styled.div`
	position: absolute;
	left: 0;
	background: #fff;
	width: 96%;
	margin-inline: 2%;
	border-radius: 20px;
	padding: 0 30px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
	top: 85px;
	opacity: 0;
	visibility: hidden;
	transition: all 0.3s ease;
`;

const Content = styled.div`
	background: #fff;
	display: flex;
	width: 100%;
	justify-content: space-between;
`;

const Row = styled.div`
	width: calc(25% - 30px);
	line-height: 45px;
`;

const NavLinks = styled.ul`
	display: inline-flex;
	li {
		padding-inline: 5px;
		list-style: none;
		&:hover ${MegaBox} {
			top: 80px;
			opacity: 1;
			visibility: visible;
		}
		a {
			color: #1a1818;
			text-decoration: none;
			font-size: 18px;
			font-weight: 500;
			padding: 9px 15px;
			border-radius: 5px;
			transition: all 0.3s ease;
			&:hover {
				background: ${logo_blue_color};
				color: #fff;
			}
		}
	}
`;

const MegaLinks = styled.ul`
	margin-left: -40px;
	border-left: 1px solid rgba(255, 255, 255, 0.09);
	padding-block: 5px;
	li {
		padding: 5px 0 5px 0;
		a {
			padding: 0px;
			padding: 0 0 0 20px;
			color: #141414;
			font-size: 16px;
			display: block;
			&:hover {
				color: #fff;
			}
		}
	}
`;

export {
	Nav,
	Wrapper,
	LogoContainder,
	MegaBox,
	Content,
	Row,
	NavLinks,
	MegaLinks,
};
