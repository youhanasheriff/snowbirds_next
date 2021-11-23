import styled from "styled-components";

const CardContent = styled.div`
	position: relative;
	margin-top: -200px;
	padding: 10px 15px;
	text-align: center;
	color: #111;
	visibility: hidden;
	opacity: 0;
	transition: 0.3s ease-in-out;
`;

const ProductCard = styled.div`
	position: relative;
	max-width: 300px;
	height: 250px;
	background: white;
	margin: 30px 10px;
	padding: 20px 15px;
	display: flex;
	flex-direction: column;
	box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
	transition: 0.3s ease-in-out;
	&:hover {
		height: 420px;
	}
	&:hover ${CardContent} {
		visibility: visible;
		opacity: 1;
		margin-top: -50px;
		transition-delay: 0.2s;
	}
`;

const ImageBox = styled.div`
	position: relative;
	max-width: 260px;
	height: 260px;
	top: -40px;
	left: 4px;
	z-index: 1;
	box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
`;

const Image = styled.div`
	background-image: url(${({ src }) => src});
	background-repeat: no-repeat;
	background-size: cover;
	width: 100%;
	height: 100%;
	border-radius: 4px;
`;

export { ProductCard, CardContent, ImageBox, Image };
