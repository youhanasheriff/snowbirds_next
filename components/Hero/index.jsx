import React from "react";
import { Slider, Slides, ImageDiv } from "./HeroElements";
import images from "../../constants/images";
import { baseUrl } from "../../constants/consts";

const HeroSection = () => {
	return (
		<Slider>
			<Slides>
				<ImageDiv url={images.heroSlides.img1.src}></ImageDiv>
				<ImageDiv url={images.heroSlides.img2.src}></ImageDiv>
				<ImageDiv url={images.heroSlides.img3.src}></ImageDiv>
				<ImageDiv url={images.heroSlides.img4.src}></ImageDiv>
				<ImageDiv url={images.heroSlides.img1.src}></ImageDiv>
			</Slides>
		</Slider>
	);
};

export default HeroSection;
