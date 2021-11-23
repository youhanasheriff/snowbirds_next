import React from "react";
import {
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
} from "./FooterElements";
import images from "../../constants/images";
import { baseUrl } from "../../constants/consts";

const Footer = () => {
	return (
		<FooterDiv>
			{/* left */}
			<LeftBox>
				<Heading>About us</Heading>
				<BoxContent>
					<LeftPara>
						The life of a snowbird gives you the best quality Products and
						service ever. But the lifestyle also comes with extra to-do items
						when it comes to home maintenance and preparation
					</LeftPara>
				</BoxContent>
			</LeftBox>
			{/* center */}
			<CenterBox>
				<Heading>Address</Heading>
				<BoxContent>
					<div>
						<Link href="https://goo.gl/maps/6wafZ11B5Lb2Jn2z8" target="_blank">
							<Icon src={images.icons.location.src} alt=""></Icon>
							<Texts>T.Nagar, Chennai, Tamil Nadu</Texts>
						</Link>
					</div>
					<div>
						<Link href="tel:+919942333506" target="_blank">
							<Icon src={images.icons.phone.src} alt=""></Icon>
							<Texts>+91-9941333506</Texts>
						</Link>
					</div>
					<div>
						<Link href="mailto:info@snowbirds.com" target="_blank">
							<Icon src={images.icons.envelope.src} alt=""></Icon>
							<Texts>info@snowbirds.com</Texts>
						</Link>
					</div>
				</BoxContent>
			</CenterBox>
			{/* right */}
			<RightBox>
				<Heading>Contact us</Heading>
				<BoxContent>
					<LeftPara>
						The life of a snowbird gives you the best quality Products and
						service ever. But the lifestyle also comes with extra to-do items
						when it comes to home maintenance and preparation
					</LeftPara>
				</BoxContent>
			</RightBox>
		</FooterDiv>
	);
};

export default Footer;
