import classes from "./contact.module.css";
const ContactUs = () => {
	return (
		<div className={classes["body-maps"]}>
			<div className="t-nagar-texts">
				<h4>T.Nagar Branch</h4>
			</div>
			<div className={classes.map}>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1609.4257692512265!2d80.23787751509761!3d13.041078100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f5a538f03d2f%3A0x45cadd030f5b4fc5!2sSnow%20Birds!5e1!3m2!1sen!2sin!4v1610539027470!5m2!1sen!2sin"
					className={classes["t-nagar"]}
					aria-hidden="false"
				></iframe>
			</div>
		</div>
	);
};

export default ContactUs;
