import images from "../../constants/images";
import Link from "next/link";
import {
	Nav,
	Wrapper,
	LogoContainder,
	MegaBox,
	Content,
	Row,
	NavLinks,
	MegaLinks,
} from "./NavbarElements";
import { baseUrl, navLinks } from "../../constants/consts";

const Navbar = () => {
	function showAlert() {
		alert("This page will be added soon!!..");
	}
	return (
		<Nav>
			<Wrapper>
				<LogoContainder>
					<Link href="/">
						<a>
							<img
								height="70px"
								width="300px"
								src={baseUrl + images.logos.logo.src}
								alt="LOGO"
							/>
						</a>
					</Link>
				</LogoContainder>
				<NavLinks>
					{navLinks.map((item) => {
						return (
							<li key={item.title}>
								<Link href={item.url}>
									<a onClick={item.title == "Profile" && showAlert}>
										{item.title}
									</a>
								</Link>
								{item.links && (
									<MegaBox>
										<Content>
											<Row key="colomn1">
												<MegaLinks>
													{item.links[0].map((item) => {
														return (
															<li key={item.link}>
																<Link href={item.link}>
																	<a>{item.title}</a>
																</Link>
															</li>
														);
													})}
												</MegaLinks>
											</Row>
											<Row key="colomn2">
												<MegaLinks>
													{item.links[1].map((item) => {
														return (
															<li key={item.link}>
																<Link href={item.link}>
																	<a>{item.title}</a>
																</Link>
															</li>
														);
													})}
												</MegaLinks>
											</Row>
											<Row key="colomn3">
												<MegaLinks>
													{item.links[2].map((item) => {
														return (
															<li key={item.link}>
																<Link href={item.link}>
																	<a>{item.title}</a>
																</Link>
															</li>
														);
													})}
												</MegaLinks>
											</Row>
											<Row key="colomn4">
												<MegaLinks>
													{item.links[3].map((item) => {
														return (
															<li key={item.link}>
																<Link href={item.link}>
																	<a>{item.title}</a>
																</Link>
															</li>
														);
													})}
												</MegaLinks>
											</Row>
										</Content>
									</MegaBox>
								)}
							</li>
						);
					})}
				</NavLinks>
			</Wrapper>
		</Nav>
	);
};

export default Navbar;
