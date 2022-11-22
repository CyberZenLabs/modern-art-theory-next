import styled from "styled-components";

export const DivBoxSection4SC = styled.div`
  width: 100%;
 
  background-color: white;
  //padding: 50px 30px 50px 30px;
  //max-width: var(--max-width);

  //background-color: var(--color-dark);
  /* background: radial-gradient(
    38.73% 34.73% at 45.22% 50.27%,
    rgb(95 4 12 / 87%) 0%,
    rgba(17, 17, 17) 100%
  ); */
  /* @media (max-width: 1600px) {
    padding: 50px 10px 50px 10px;
  } */
`;
export const imgNFT = styled.img`
height: 100%;
width: 100%;
;`
export const ButtonCustomSC = styled.button`
margin: 0 auto;
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
  ;`
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


export const DivRainbow = styled.div`
 position: absolute;
  width: 798.44px;
  height: 349.68px;
  left: 285px;
  top: 120px;

  /* Радуга */
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
  transform: rotate(-5.95deg);
  z-index: -1;
  @media (max-width: 1500px) {
    top: 20px;
  }
`;
export const DivNFT = styled.div`
display: grid;
  position: relative;
  grid-template-rows: max-content ;
background-repeat:no-repeat;
height: 450px;
width: 360px;
  background-size: 100%;
  background-image: ${ ({Photo}) => Photo && `url(${ Photo })` };
 
  @media(max-width:1500px){
    height: 384px;
width: 307px;
  }
  @media(max-width:1280px){
    height: 320px;
width: 230px;
  }
  @media(max-width:480px){
    height: 210px;
width: 170px;
  }
`;
export const DivContainerSection4SC = styled.div`
  max-width: var(--max-width);
  width: 90vw;
  height: 100%;
  //min-height: 400px;
  margin: 100px auto;
  max-width: 1420px;
`;
export const Button = styled.button`
 background-color: red;
`;
export const DivBoxRowCollectionsSC = styled.div`
  user-select: none;
  // width: calc(100vw - 17px);
  margin-top: 120px;
  row-gap: 36px;
  grid-template-rows: max-content max-content;
  display: grid;
  justify-content: center;
  align-content: center;
  align-items: center;
  user-select: none;
  /* @media (max-width: 620px) {
    margin-top: 100px;
  } */
`;
export const DivTextColectionSC = styled.div`
  font-family: "SpecifyPersonalExpandedBlack-J1do";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 120%;
  justify-self: start;
  @media (max-width: 540px) {
    font-size: 48px;
  }
  color: black;
`;
export const DivContainerGridCollectionSC = styled.div`
  width: 100%;
  height: 100%;
justify-content: center;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 20px;

  align-self: end;
  @media (max-width: 990px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 730px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 480px) {
    grid-column-gap: 10px;
  grid-row-gap: 14px;
  }
 
`;
