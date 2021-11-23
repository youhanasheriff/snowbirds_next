import React from "react";
import { Featured } from "./FeaturedElements";
import { SmallContainer, Row, Col_3, Col_4 } from "../GlobalElements";
import FeaturedCard from "../Cards/FeturedCards";
import { featuredProducts } from "../../constants/consts";

const FeaturedProducts = () => {
	return (
		<Featured>
			<div>
				<SmallContainer>
					<Row>
						{featuredProducts.map((item) => {
							return (
								<Col_3 key={item.url}>
									<FeaturedCard
										url={item.url}
										title={item.title}
										para={item.description}
									/>
								</Col_3>
							);
						})}
					</Row>
				</SmallContainer>
			</div>
		</Featured>
	);
};

export default FeaturedProducts;
