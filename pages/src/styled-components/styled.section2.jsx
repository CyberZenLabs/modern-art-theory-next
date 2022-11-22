import styled from "styled-components";
import CardsImages from "../img/Section2_NFT/NFTimages.png";
import CardsImagesAdaptive from "../img/Section2_NFT/NFTimagesAdaprive.png";

export const GridRowsSC = styled.div`
  padding-top: 100px;
  display: grid;
  justify-content: center;
  justify-items: center;
  grid-template-rows: max-content max-content 200px max-content max-content;
`;

export const BackgroundGradientSC = styled.div`
  position: absolute;
  justify-self: center;
  width: 859.13px;
  height: 250.29px;
  background: linear-gradient(
    81.97deg,
    rgba(255, 0, 0, 0.35) 32.54%,
    rgba(254, 126, 0, 0.35) 39.05%,
    rgba(255, 230, 0, 0.35) 48.84%,
    rgba(0, 255, 1, 0.35) 53.99%,
    rgba(0, 194, 255, 0.35) 59.49%,
    rgba(0, 0, 254, 0.35) 65.29%,
    rgba(204, 0, 255, 0.35) 87.4%
  );
  opacity: 0.8;
  filter: blur(140px);
  transform: rotate(-2.1deg);
  @media (max-width: 1000px) {
    width: 80%;
  }
`;

export const P1TextSC = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  text-align: center;
  color: #000000;
  width: 53vw;
  z-index: 1000;
  line-height: clamp(30px, 3vw, 60px);
  font-size: clamp(20px, 3vw, 40px);
  @media (max-width: 1000px) {
    width: 90vw;
  }
  max-width: 1420px;
`;

export const DivBackgroundCardImagesSC = styled.div`
  display: grid;
  justify-content: center;
`;

export const DivCardsImagesSC = styled.div`
  background-size: 100%;
  max-width: 1455px;
  width: 90vw;
  aspect-ratio: 2/1;
  background-image: url(${ CardsImages });
  @media (max-width: 1000px) {
    background-image: url(${ CardsImagesAdaptive });
    width: 90vw;
    aspect-ratio: 4/3;
  }
  z-index: 100;
`;

export const ButtonCustomSC = styled.a`
  text-decoration: none;
  display: grid;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 285px;
  height: 78px;
  opacity: 1;
  background: linear-gradient(
    81.97deg,
    #1d4eff 0%,
    #ff44b4 49.73%,
    #ffd600 100%
  );
  border-radius: 12px;
  cursor: pointer;
  /* transition: 3ms; */
  @media (max-width: 480px) {
    width: 163px;
    height: 58px;
  }
  :hover {
    opacity: 0.85;
    scale: 0.98;
  }
  :active {
    opacity: 1;
    scale: 0.95;
  }
  transition: 0.3s;
`;

export const PTextButtonSC = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 42px;
  background: linear-gradient(
    81.97deg,
    #1d4eff 0%,
    #ff44b4 49.73%,
    #ffd600 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const ButtonBackSC = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 10px;
  width: 275px;
  height: 68px;
  opacity: 1;
  background: #fff;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: 3ms;
  @media (max-width: 480px) {
    width: 152px;
    height: 47px;
  }
`;

export const PTextTitleSC = styled.p`
  font-family: "SpecifyPersonalExpandedBlack-J1do";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 89px;
  color: #000000;
  padding: 20px;
  text-align: center;
`;

// export const DivUtilityImagesSC = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   grid-column-gap: clamp(10px, 3vw, 120px);
//   padding-bottom: 200px;
//   @media (max-width: 1000px) {
//     grid-column-gap: 20px;
//     padding-bottom: clamp(60px, 3vh, 100px);
//   }
// `;

// export const DivUtilityImageSC = styled.div`
//   background-size: 100%;
//   background-image: ${({ UtilityImage }) =>
//     UtilityImage && `url(${UtilityImage})`};
//   width: 45vw;
//   aspect-ratio: 650/813;

// font-family: 'Specify PERSONAL Expanded';
// font-style: normal;
// font-weight: 700;
// font-size: 64px;
// line-height: 89px;
// color: #000000;
// padding: 20px 0px;
// text-align: center
// `;

export const DivUtilityImagesSC = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: clamp(10px, 3vw, 120px);
  padding-bottom: 200px;
  max-width: 1420px;
  justify-content: center;
  justify-items: center;
  @media (max-width: 1000px) {
    grid-column-gap: 20px;
    padding-bottom: clamp(60px, 3vh, 100px);
  }
  @media (max-width: 889px) {
    grid-template-columns: 1fr;
    grid-row-gap: 32px;
  }
`;

export const DivUtilityImageSC = styled.div`
height: 100%;
  background-size: 100%;
  background-image: ${ ({UtilityImage}) =>
	UtilityImage && `url(${ UtilityImage })` };
  width: 35vw;
  max-width: 600px;
  background: ${ ({hover, color}) => hover && `${ color }` };
  aspect-ratio: 650/813;
  display: grid;
  align-items: center;
  transition: all 0.5s ease;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  @media (max-width: 1000px) {
    grid-column-gap: 20px;
    width: 45vw;
  }
  @media (max-width: 889px) {
    width: 90vw;
  }
::before {
  transform: scaleX(0);
  transform-origin: bottom right;
}
hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}
`;

export const DivRegularCardSC = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px;
  display: grid;
  grid-auto-rows: max-content max-content;
  align-items: center;
`;

export const TitleRegularCardSC = styled.h1`
  font-family: "Poppins";
  font-size: 64px;
  /* font-size: clamp(40px, 100%, 64px); */
  color: ${ ({color}) => (color === "black" ? ` #000000` : `#fff`) };
  @media (max-width: 1768px) {
    font-size: 54px;
  }
  @media (max-width: 1000px) {
    font-size: 40px;
  }
  @media (max-width: 889px) {
    font-size: 64px;
  }
  @media (max-width: 480px) {
    font-size: 40px;
  }
`;

export const OlRegularCardSC = styled.ol`
  font-family: "Poppins";
  font-size: 29px;
  color: ${ ({color}) => (color === "black" ? ` #000000` : `#fff`) };
  @media (max-width: 1768px) {
    font-size: 18px;
  }
  @media (max-width: 1000px) {
    font-size: 14px;
  }
  @media (max-width: 889px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
  padding: 0;
  margin: 0;
`;

export const UlRegularCardSC = styled.ul`
  font-family: "Poppins";
  color: #fff;
  font-size: 29px;
  /* font-size: clamp(9px, 50vw, 29px); */
  padding: 0;
  margin: 0;
  @media (max-width: 1768px) {
    font-size: 18px;
  }
  @media (max-width: 1000px) {
    font-size: 14px;
  }
  @media (max-width: 889px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;