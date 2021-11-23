import React from "react";
import { WelcomeTitle, WelcomeCredit, WelcomeSpan } from "./WelcomeElements";

const WelcomeSection = ({ title }) => {
	return (
		<WelcomeCredit>
			<WelcomeTitle>
				{title == "Snow Birds" ? "Welcome to  " : ""}
				<WelcomeSpan>{title}</WelcomeSpan>
			</WelcomeTitle>
		</WelcomeCredit>
	);
};

export default WelcomeSection;
