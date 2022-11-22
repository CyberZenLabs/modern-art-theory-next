import React from "react";
import {
	DivBoxContentNavSC,
	DivBoxLinksSC,
	DivBoxLogoSC,
	DivLinkGallerySC,
	DivNavbarGallerySC,
	LinkLogoSC,
	LogoSC,
} from "../../styled-components/styled.navbar-gallery";
//import "./Sidebar.css";

const NavbarGallery = (props) => {
	return (
		<>
			<DivNavbarGallerySC>
				<DivBoxContentNavSC>
					<LinkLogoSC href="/">
						<DivBoxLogoSC>
							<LogoSC/>
						</DivBoxLogoSC>
					</LinkLogoSC>

					<DivBoxLinksSC>
						<DivLinkGallerySC href="/">Home</DivLinkGallerySC>
					</DivBoxLinksSC>
				</DivBoxContentNavSC>
			</DivNavbarGallerySC>
			<div className="hamburger-menu">
				<input id="menu__toggle" type="checkbox"/>
				<label className="menu__btn" htmlFor="menu__toggle">
					<span></span>
				</label>
				<ul className="menu__box">
					<li>
						<a className="menu__item" href="/">
							Home
						</a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default NavbarGallery;
