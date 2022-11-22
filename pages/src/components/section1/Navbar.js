import React from "react";
import {
	DivBoxContentNavSC,
	DivBoxLinksSC,
	DivBoxLogoSC,
	DivLinkSC,
	DivNavbarSC,
	LinkLogoSC,
	LogoSC,
} from "../../styled-components/styled.navbar";


const Navbar = (props) => {
	const {onClickButtonHome, onClickButtonBox, onClickButtonCollection} = props;
	return (
		<>
			<DivNavbarSC>
				<DivBoxContentNavSC>
					<LinkLogoSC href="/">
						<DivBoxLogoSC>
							<LogoSC/>
						</DivBoxLogoSC>
					</LinkLogoSC>

					<DivBoxLinksSC>
						<DivLinkSC onClick={ onClickButtonHome }>Home</DivLinkSC>
						<DivLinkSC onClick={ onClickButtonBox }>Box</DivLinkSC>
						<DivLinkSC onClick={ onClickButtonCollection }>Collection</DivLinkSC>
					</DivBoxLinksSC>
				</DivBoxContentNavSC>
			</DivNavbarSC>
			<div className="hamburger-menu">
				<input id="menu__toggle" type="checkbox"/>
				<label className="menu__btn" htmlFor="menu__toggle">
					<span></span>
				</label>
				<ul className="menu__box">
					<li>
					<input id="menu__toggle" type="checkbox"/>
				<label className="menu__item" htmlFor="menu__toggle" onClick={ onClickButtonHome }>
					
					Home
				</label>

						

					</li>
					<li>
					<input id="menu__toggle" type="checkbox"/>
				<label className="menu__item" htmlFor="menu__toggle" onClick={ onClickButtonBox }>
					
					Card
				</label>
						

					</li>
					<li>
					<input id="menu__toggle" type="checkbox"/>
				<label className="menu__item" htmlFor="menu__toggle" onClick={ onClickButtonCollection }>
					
					Collection
				</label>
						

					</li>
				</ul>
			</div>
		</>
	);
};

export default Navbar;
