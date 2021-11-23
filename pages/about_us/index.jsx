import WelcomeSection from "../../components/Welcome";
import ProductHeader from "../../components/Products/Header";
import AboutPara from "./AboutUs";

const AboutUs = () => {
	return (
		<>
			<ProductHeader title="About Us" />
			<WelcomeSection title="About Us" />
			<AboutPara>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus,
					facere adipisci modi ipsam dolore quasi sequi nostrum maiores quae,
					quam rem, alias ducimus! Sequi laudantium ipsam cupiditate ab, magni
					at eligendi, totam voluptatibus vitae beatae, incidunt ex qui quae
					repellat numquam esse iusto maiores tempore nostrum dolores. Repellat,
					delectus molestiae. Ea esse eligendi dolorum laboriosam!
				</p>
			</AboutPara>
			<WelcomeSection title="Clients" />
		</>
	);
};

export default AboutUs;
