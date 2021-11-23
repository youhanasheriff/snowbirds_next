import styled from "styled-components";

const SmallContainer = styled.div`
	max-width: 1080px;
	margin: auto;
	padding-left: 25px;
	padding-right: 25px;
`;

const Row = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: space-around;
`;

const Col_3 = styled.div`
	align-items: center;
	flex-basis: 25%;
	min-width: 250px;
	margin-bottom: 30px;
	background-color: #9e9b9b5b;
	height: 470px;
	border-radius: 3px;
`;

const Col_4 = styled.div`
	flex-basis: 20% !important;
	padding: 10px;
	min-width: 200px;
	margin-bottom: 40px;
	transition: all 0.5s;
	&:hover {
		transform: translateY(-5px);
		transition: all 0.3s ease;
		box-shadow: 0 4px 2.2px rgba(0, 0, 0, 0.056),
			0 10.1px 5.5px rgba(0, 0, 0, 0.08), 0 20.6px 11.2px rgba(0, 0, 0, 0.1),
			0 42.3px 23px rgba(0, 0, 0, 0.124), 0 116px 63px rgba(0, 0, 0, 0.18);
	}
`;

export { SmallContainer, Row, Col_3, Col_4 };
