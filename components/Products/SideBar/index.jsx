import Link from "next/link";

import { frequentList } from "../../../constants/consts";
import {
	FcTitle,
	FrequentCategory,
	List,
	ListItems,
	Anchor,
} from "./SideBarElement";

const SideBar = () => {
	const listitems = frequentList;
	return (
		<FrequentCategory>
			<FcTitle>Frequent Categories</FcTitle>
			<List>
				{listitems.map((item) => (
					<Link key={item.link} href={item.link}>
						<ListItems>
							<Anchor>{item.title}</Anchor>
						</ListItems>
					</Link>
				))}
			</List>
		</FrequentCategory>
	);
};

export default SideBar;
