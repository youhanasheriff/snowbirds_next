import * as React from "react";
import HeroSection from "../components/Hero";
import FeaturedProducts from "../components/Featured";
import WelcomeSection from "../components/Welcome";
import CategorySection from "../components/Categories";

const IndexPage = () => {
	return (
		<>
			<HeroSection />
			<WelcomeSection title="Snow Birds" />
			<FeaturedProducts />
			<CategorySection />
		</>
	);
};

export default IndexPage;
