import React from "react";
import {
	ButtonSC,
	DivCircleGradientSC,
	DivInnerBoxTwoColumnsSC,
	DivNFTBlockSC,
	DivNFTBoxButtonSC,
	DivNFTBoxSC,
	DivNFTTextSC,
	DivS4BoxSC,
	TextButtonSC,
} from "../../styled-components/styled.section4";

const SectionBox4 = (props) => {
	const {bottomRefBox} = props;
	return (
		<>
			<div ref={ bottomRefBox }></div>
			<DivS4BoxSC>
				<DivInnerBoxTwoColumnsSC>
					<DivNFTBlockSC>
						<DivNFTBoxSC></DivNFTBoxSC>
						<DivNFTBoxButtonSC>
							<ButtonSC>
								<TextButtonSC>Open a card for $29</TextButtonSC>
							</ButtonSC>
						</DivNFTBoxButtonSC>
					</DivNFTBlockSC>
					<DivNFTTextSC>
						<DivCircleGradientSC/>
						Our initial drop of 250 NFTs is more than just a unique
						individually-crafted piece of digital art, it is your access pass to
						some of the most exclusive events during Art Basel. 12 lucky holders
						will also receive a rare gold NFT, providing additional VIP access
						as well as custom branded merchandise.
					</DivNFTTextSC>
				</DivInnerBoxTwoColumnsSC>
			</DivS4BoxSC>
		</>
	);
};

export default SectionBox4;
