import { divide } from "ramda";
import React, {useState} from "react";

import Image_NFT1 from "../../img/007.png";
import Image_NFT2 from "../../img/Section2_NFT/NFTutility.png";

import {
	BackgroundGradientSC,
	ButtonBackSC,
	ButtonCustomSC,
	DivCardsImagesSC,
	DivRegularCardSC,
	DivUtilityImageSC,
	DivUtilityImagesSC,
	GridRowsSC,
	OlRegularCardSC,
	P1TextSC,
	PTextButtonSC,
	PTextTitleSC,
	TitleRegularCardSC,
	DivMaxWidth,
} from "../../styled-components/styled.section2";
import "./Carousel_Cards";
import Card_Carousel from "./Carousel_Cards";
// import "../../../../styles/Carousel_Cards.css";

const SectionsBox2 = (props) => {
	const [onMouseEnter1, setOnMouseEnter1] = useState(true);
	const [onMouseEnter2, setOnMouseEnter2] = useState(true);

	return (
		<div>
			<GridRowsSC>
				<BackgroundGradientSC></BackgroundGradientSC>
				<P1TextSC>
					MAT is excited to announce our first in-house NFT project, a fusion of
					art and technology that provides real-world access to private events
					during Art Basel 2022.
				</P1TextSC>
				<Card_Carousel/>
				<ButtonCustomSC href="/gallery">
					<ButtonBackSC>
						<PTextButtonSC>View more</PTextButtonSC>
					</ButtonBackSC>
				</ButtonCustomSC>

				<PTextTitleSC>Utility for Art Basel</PTextTitleSC>
				<DivUtilityImagesSC>
					<DivUtilityImageSC
						UtilityImage={ Image_NFT1 }
						hover={ onMouseEnter1 }
						// onMouseLeave={() => setOnMouseEnter1(false)}
						// onMouseEnter={() => setOnMouseEnter1(true)}
						color={ "#0F0F0F" }
					>
						{ onMouseEnter1 && (
							<>
								<DivRegularCardSC>
									<TitleRegularCardSC>Regular</TitleRegularCardSC>
									<OlRegularCardSC>
										<li>Main Event at Modern Art Theory Tuesday</li>
										<ul>
											<li>Open bar</li>
											<li>POAP (proof of attendance protocol)</li>
										</ul>
										<li>Access to MAT Clubhouse at the Sagamore all week</li>
										<li>Access to filmgate</li>
										<li>Access to Gateway Miami</li>
										<li>Discounted pass to all Ticketfairy events</li>
									</OlRegularCardSC>
								</DivRegularCardSC>
							</>
						) }
					</DivUtilityImageSC>
					<DivUtilityImageSC
						UtilityImage={ Image_NFT2 }
						hover={ onMouseEnter2 }
						// onMouseLeave={() => setOnMouseEnter2(false)}
						// onMouseEnter={() => setOnMouseEnter2(true)}
						color={ "#FFD234" }
					>
						{ onMouseEnter2 && (
							<>
								<DivRegularCardSC>
									<TitleRegularCardSC color={ "black" }>Gold</TitleRegularCardSC>
									<OlRegularCardSC color={ "black" }>
										<li>Access to all features above</li>
										<li>Access to Rakastella</li>
										<li>VIP access to MAT event</li>
										<li>VIP access to gateway Miami</li>
										<li>VIP access to MAT Clubhouse</li>
									</OlRegularCardSC>
								</DivRegularCardSC>
							</>
						) }
					</DivUtilityImageSC>
				</DivUtilityImagesSC>
			</GridRowsSC>
			</div>
	);
};

export default SectionsBox2;
