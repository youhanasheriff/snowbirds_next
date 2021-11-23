import Link from "next/link";
import { baseUrl } from "../../../constants/consts";
import images from "../../../constants/images";
import {
	BgDiv,
	BlackBg,
	LinkLoc,
	Anchor,
	Heading,
	HeadingDiv,
} from "./HeaderElement";

const ProductHeader = ({ title }) => {
	const isAbout = title == "About Us";
	return (
		<BgDiv url={baseUrl + images.productsPageBGg.acTech.src}>
			<BlackBg>
				<LinkLoc>
					<Link href="/">
						<Anchor>Home</Anchor>
					</Link>{" "}
					/{" "}
					<Link href={isAbout ? "/about_us" : "/products"}>
						<Anchor>{isAbout ? title : "Products"}</Anchor>
					</Link>{" "}
					{title == undefined || isAbout ? "" : `/ ${title}`}
				</LinkLoc>
				<HeadingDiv>
					<Heading>{title == undefined ? "Products We Offer" : title}</Heading>
				</HeadingDiv>
			</BlackBg>
		</BgDiv>
	);
};

export default ProductHeader;
