import React from "react";
import { Container, Link } from "./CopyRightElements";

const CopyWrite = () => {
	return (
		<>
			<Container>
				<p>
					© Copyright
					<Link href="./index.html">SNOWBIRDS</Link>| Website Design, Hosting,
					Maintenance &amp; SEO by <strong>Youhana Sheriff</strong> -
					<Link
						href="https://www.instagram.com/youhana.sheriff/"
						target="_blank"
					>
						Instagram
					</Link>{" "}
					&amp;{" "}
					<Link
						href="https://www.linkedin.com/in/youhanasheriff/"
						target="_blank"
					>
						LinkedIn
					</Link>
					| All Rights Reserved.
				</p>
			</Container>
		</>
	);
};

export default CopyWrite;
