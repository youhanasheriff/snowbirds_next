import { useRouter } from "next/router";
import { products } from "../../constants/consts";
import SubProducts from "../../components/Products/SubProducts";
import Products from ".";

const ProductDetails = ({ product }) => {
	return (
		<Products title={product ? product.title : ""}>
			{product.products.map((item) => (
				<SubProducts key={item.title} product={item} />
			))}
		</Products>
	);
};

export function getStaticPaths() {
	return {
		paths: Object.keys(products).map((id) => {
			return {
				params: {
					productId: id,
				},
			};
		}),
		fallback: false,
	};
}

export function getStaticProps(context) {
	const productId = context.params.productId;
	const product = products[productId];

	return {
		props: {
			product: product,
		},
	};
}

export default ProductDetails;
