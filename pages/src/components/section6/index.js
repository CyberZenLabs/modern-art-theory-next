import React from "react";
// import ScrollUpButton from 'react-scroll-up-button';
import {
	DivContentBoxSC,
	DivCopyrightBoxSC,
	DivFooterBoxSC,
	DivMailBoxSC,
	DivSocialNetworkBoxSC,
	DivSocialNetworkSC,
	H1CopyrightBoxSC,
	H1MailBoxSC,
	IconLinkFacebookSC,
	IconLinkInstagramSC,
	IconLinkMailSC,
	IconLinkTwitterSC,
	LinkSocialNetworkSC,
} from "../../styled-components/styled.section6-footer";

const SectionBox6 = (props) => {
	return (
		<>
			<DivFooterBoxSC>
				<DivContentBoxSC>
					<DivSocialNetworkBoxSC>
						<DivSocialNetworkSC>
							<LinkSocialNetworkSC href="#">
								<IconLinkFacebookSC/>
							</LinkSocialNetworkSC>
							<LinkSocialNetworkSC href="#">
								<IconLinkTwitterSC/>
							</LinkSocialNetworkSC>
							<LinkSocialNetworkSC href="#">
								<IconLinkInstagramSC/>
							</LinkSocialNetworkSC>
							<DivMailBoxSC>
								<LinkSocialNetworkSC href="#">
									<IconLinkMailSC/>
								</LinkSocialNetworkSC>
								<H1MailBoxSC>
									EMAIL US<br></br> support@example.com
								</H1MailBoxSC>
							</DivMailBoxSC>
						</DivSocialNetworkSC>
					</DivSocialNetworkBoxSC>
					<DivCopyrightBoxSC>
						<H1CopyrightBoxSC>
							Copyright 2022 Modern Art Theory. All Rights Reserved.
						</H1CopyrightBoxSC>
					</DivCopyrightBoxSC>
				</DivContentBoxSC>
			</DivFooterBoxSC>
			{/*<ScrollUpButton*/ }
			{/*	StopPosition={ 0 }*/ }
			{/*	ShowAtPosition={ 650 }*/ }
			{/*	EasingType="easeOutCubic"*/ }
			{/*	AnimationDuration={ 500 }*/ }
			{/*	ContainerClassName="ScrollUpButton__Container"*/ }
			{/*	TransitionClassName="ScrollUpButton__Toggled"*/ }
			{/*	ToggledStyle={ {*/ }
			{/*		right: 40,*/ }
			{/*		opacity: 0.8,*/ }
			{/*		WebkitTransition: 'all 0.5s ease-in-out',*/ }
			{/*		transition: 'all 0.5s ease-in-out',*/ }
			{/*		transitionProperty: 'opacity, right, boxShadow',*/ }
			{/*	} }*/ }
			{/*	style={ {*/ }
			{/*		backgroundColor: '#fff',*/ }
			{/*		borderRadius: '50%',*/ }
			{/*		border: 'none',*/ }
			{/*		height: 70,*/ }
			{/*		position: 'fixed',*/ }
			{/*		bottom: 40,*/ }
			{/*		width: 70,*/ }
			{/*		WebkitTransition: 'all 0.5s ease-in-out',*/ }
			{/*		transition: 'all 0.5s ease-in-out',*/ }
			{/*		transitionProperty: 'opacity, right, boxShadow',*/ }
			{/*		cursor: 'pointer',*/ }
			{/*		opacity: 0,*/ }
			{/*		right: -75,*/ }
			{/*		boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',*/ }
			{/*		display: 'grid',*/ }
			{/*		justifyContent: 'center',*/ }
			{/*		alignItems: 'center',*/ }
			{/*		fontSize: '35px',*/ }
			{/*	} }*/ }
			{/*>*/ }
			{/*	<HiOutlineArrowUp color="black"/>*/ }
			{/*</ScrollUpButton>*/ }
		</>
	);
};

export default SectionBox6;
