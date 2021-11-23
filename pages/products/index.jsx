import { useRouter } from "next/router";

import ProductHeader from "../../components/Products/Header";
import SideBar from "../../components/Products/SideBar";
import CategorySection from "../../components/Categories";

import {
	BuyBest,
	ProductPageBody,
	ProductBody,
} from "../../components/Products/ProductsElement";

const Products = (props) => {
	const router = useRouter();

	return (
		<>
			<ProductHeader title={props.title} />
			{props.title != undefined && <BuyBest>Buy Best {props.title}</BuyBest>}
			<ProductPageBody>
				<SideBar />
				{props.title == undefined ? (
					<CategorySection />
				) : (
					<ProductBody>{props.children}</ProductBody>
				)}
			</ProductPageBody>
		</>
	);
};

export default Products;
