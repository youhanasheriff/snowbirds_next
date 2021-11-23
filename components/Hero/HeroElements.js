import styled, { keyframes } from "styled-components";

const slider = keyframes`
    12.5% {
    margin-left: -100%;
  }
  25% {
    margin-left: -100%;
  }
  37.5% {
    margin-left: -200%;
  }
  50% {
    margin-left: -200%;
  }
  62.5% {
    margin-left: -300%;
  }
  75% {
    margin-left: -300%;
  }
  87.5% {
    margin-left: -400%;
  }
  100% {
    margin-left: -400%;
  }
`;

const Slider = styled.div`
	padding-top: 76px;
	height: 650px;
	width: 100%;
	background-color: #ffffff;
	overflow: hidden;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
`;

const Slides = styled.div`
	width: 500%;
	height: 650px;
	animation: ${slider} infinite 20s 2s;
`;

const ImageDiv = styled.div`
	height: 650px;
	width: 20%;
	float: left;
	background-repeat: no-repeat;
	background-size: contain;

	&:nth-child(1) {
		background-image: url(${({ url }) => url});
		background-size: cover;
	}
	&:nth-child(2) {
		background-image: url(${({ url }) => url});
	}
	&:nth-child(3) {
		background-image: url(${({ url }) => url});
		background-size: cover;
	}
	&:nth-child(4) {
		background-image: url(${({ url }) => url});
	}
	&:nth-child(5) {
		background-image: url(${({ url }) => url});
		background-size: cover;
	}
`;

export { Slider, Slides, ImageDiv };
