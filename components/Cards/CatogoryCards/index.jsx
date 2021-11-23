import Link from "next/link";
import { baseUrl } from "../../../constants/consts";

import { Image, Anchor, Para } from "./CardElements";

const CategoryCard = ({ link, url, title, br }) => {
	return (
		<Link href={link}>
			<Anchor href="">
				<Image src={url} alt={title} />
				<Para>
					{title} {br ? <br /> : ""} &nbsp;
				</Para>
			</Anchor>
		</Link>
	);
};

export default CategoryCard;
