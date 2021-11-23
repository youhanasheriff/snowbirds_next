import {
	ProductCard,
	CardContent,
	ImageBox,
	Image,
} from "./SubProductsElements";

const SubProducts = ({ product }) => {
	return (
		<ProductCard>
			<ImageBox>
				<Image src={product.image.src} alt="sample image"></Image>
			</ImageBox>
			<CardContent>
				<h2>{product.title}</h2>
				<p>{product.description}</p>
			</CardContent>
		</ProductCard>
	);
};

export default SubProducts;
