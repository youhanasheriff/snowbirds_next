import React, { useState } from "react";
import { Title, HiddenRows, MoreButton, ButtonText } from "./CategoryElements";
import CategoryCard from "../Cards/CatogoryCards";
import { SmallContainer, Row, Col_4 } from "../GlobalElements";
import {
	categories1,
	categories2,
	hiddencategories1,
	hiddencategories2,
} from "../../constants/consts";

const CategorySection = () => {
	const [isShow, setIsShow] = useState(false);
	function toggle() {
		setIsShow((prevState) => !prevState);
	}
	return (
		<>
			<SmallContainer>
				<Title>Products categories</Title>
				<Row>
					{categories1.map((item) => {
						return (
							<Col_4 key={item.url.src}>
								<CategoryCard
									link={item.link}
									url={item.url.src}
									title={item.title}
									br={item.br}
								/>
							</Col_4>
						);
					})}
				</Row>
				<Row>
					{categories2.map((item) => {
						return (
							<Col_4 key={item.url.src}>
								<CategoryCard
									link={item.link}
									url={item.url.src}
									title={item.title}
									br={item.br}
								/>
							</Col_4>
						);
					})}
				</Row>
				<HiddenRows isShow={isShow}>
					<Row>
						{hiddencategories1.map((item) => {
							return (
								<Col_4 key={item.url.src}>
									<CategoryCard
										link={item.link}
										url={item.url.src}
										title={item.title}
										br={item.br}
									/>
								</Col_4>
							);
						})}
					</Row>
					<Row>
						{hiddencategories2.map((item) => {
							return (
								<Col_4 key={item.url.src}>
									<CategoryCard
										link={item.link}
										url={item.url.src}
										title={item.title}
										br={item.br}
									/>
								</Col_4>
							);
						})}
					</Row>
				</HiddenRows>
				<MoreButton
					onClick={toggle}
					style={{ display: isShow ? "none" : "flex" }}
				>
					<ButtonText>More</ButtonText>
				</MoreButton>
			</SmallContainer>
		</>
	);
};

export default CategorySection;
