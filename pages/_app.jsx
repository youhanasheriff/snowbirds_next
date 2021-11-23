import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CopyWrite from "../components/CopyRight";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
			<CopyWrite />
		</>
	);
}

export default MyApp;
