import React, {useState} from "react";
import {
	ButtonBackSC,
	ButtonCustomSC,
	DivBoxRowCollectionsSC,
	DivBoxSection4SC,
	DivContainerGridCollectionSC,
	DivContainerSection4SC,
	DivNFT,
	DivTextColectionSC,
	PTextButtonSC,
} from "../../styled-components/styled.section5.jsx";


import data from "./data.js";


const SectionBox5 = (props) => {
	const {bottomRefCollection} = props;
	const [noOfElement, setnoOfElement] = useState(8);
	const slice = data.cardData.slice(0, noOfElement);
	const num = 0;
	const loadMore = () => {
		const num = noOfElement + 4;
		setnoOfElement(noOfElement + 4);
		console.log(num);
	}
	const loadLess = () => {
		const num = noOfElement - 4;
		setnoOfElement(noOfElement - 4);
		console.log(num);
	}
	return (

		<DivBoxSection4SC>
			<div ref={ bottomRefCollection }></div>
			<DivContainerSection4SC>
				<DivBoxRowCollectionsSC>

					<DivTextColectionSC>Collection</DivTextColectionSC>

					<DivContainerGridCollectionSC>
						{ slice.map((item, index) => {
							return (<DivNFT Photo={ item.img }>

							</DivNFT>);
						}) }

					</DivContainerGridCollectionSC>

					<ButtonCustomSC onClick={ () => loadMore() }>
						<ButtonBackSC>
							<PTextButtonSC>Show more</PTextButtonSC>
						</ButtonBackSC>
					</ButtonCustomSC>
					{/*
        <ButtonCustomSC onClick={()=>loadLess()} >
      <ButtonBackSC>
        <PTextButtonSC>Show less</PTextButtonSC>
      </ButtonBackSC>
    </ButtonCustomSC> */ }

				</DivBoxRowCollectionsSC>
			</DivContainerSection4SC>
		</DivBoxSection4SC>
	);
}

export default SectionBox5;
