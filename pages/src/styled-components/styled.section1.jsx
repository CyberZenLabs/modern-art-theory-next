import styled from "styled-components";
import groupNFT from "../img/Group-nft.png";
import groupNFT1500 from "../img/Group-nft1500.png";

export const DivBoxSC = styled.div`
  margin-top: 100px;
  min-height: 813px;
  //background: rgba(255, 255, 255, 0.85);
  //backdrop-filter: blur(10px);
  display: grid;
  justify-items: center;
  //grid-template-columns: max-content max-content;
  @media (max-width: 1500px) {
    min-height: 1200px;
  }
  @media (max-width: 768px) {
    min-height: 1050px;
  }
  @media (max-width: 630px) {
    min-height: 900px;
  }
  @media (max-width: 480px) {
    min-height: 800px;
  }
  @media (max-width: 360px) {
    min-height: 780px;
  }
`;

export const DivBoxContentSC = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1420px;
  display: grid;
  margin: 0 auto;
  padding-top: 100px;
  @media (max-width: 1500px) {
    justify-items: center;
    padding-top: 0px;
  }
`;

export const DivBoxTextTitleSC = styled.div`
  width: 100%;
  height: 100%;
  max-height: 335px;
  display: grid;
  grid-template-rows: auto auto auto;
  @media (max-width: 1500px) {
    justify-items: center;
    padding: 0 20px;
  }
  @media (max-width: 768px) {
    padding: 0 10px;
    gap: 10px;
  }
  @media (max-width: 397px) {
    padding: 0 5px;
  }
`;

export const DivTextTitleSC = styled.div`
  width: 100%;
  height: 100%;
  font-family: "SpecifyPersonalExpandedBlack-J1do";
  font-style: normal;
  font-weight: 900;
  font-size: 64px;
  line-height: 89px;
  color: #000000;
  @media (max-width: 1500px) {
    text-align: center;
  }
  @media (max-width: 480px) {
    font-size: 48px;
  }
  @media (max-width: 360px) {
    line-height: 67px;
  }
`;

export const DivTextBodySC = styled.div`
  width: 100%;
  max-width: 821px;
  height: 100%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  color: #000000;
  @media (max-width: 1500px) {
    text-align: center;
  }
  @media (max-width: 768px) {
    font-size: 28px;
  }
  @media (max-width: 480px) {
    font-size: 24px;
  }
  @media (max-width: 387px) {
    line-height: 36px;
  }
`;

export const ButtonSC = styled.button`
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 18px 36px;
  gap: 10px;
  width: 285px;
  height: 78px;
  opacity: 1;
  background: linear-gradient(
    81.97deg,
    #1d4eff 0%,
    #ff44b4 49.73%,
    #ffd600 100%
  );
  box-shadow: 0px 12px 100px rgba(242, 68, 184, 0.4);
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: 3ms;
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

export const TextButtonSC = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 42px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const DivGradientSC = styled.div`
  position: absolute;
  width: 80%;
  height: 349.68px;
  //left: 285px;
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
  @media (max-width: 1200px) {
    width: 80%;
    height: 349.68px;
  }
  @media (max-width: 1000px) {
    height: 299.68px;
  }
  @media (max-width: 768px) {
    height: 247.81px;
    opacity: 0.9;
  }
  @media (max-width: 400px) {
    display: none;
  }
`;

export const DivBoxNFTSC = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 685px;
  height: 842px;
  background-size: 100%;
  background-image: url(${ groupNFT });
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 1500px) {
    display: none;
  }
`;

export const DivBoxNFT1500SC = styled.div`
  display: none;
  @media (max-width: 1500px) {
    display: grid;
    position: absolute;
    bottom: 0;
    width: 720px;
    height: 730px;
    background-size: 100%;
    background-image: url(${ groupNFT1500 });
    background-repeat: no-repeat;
    background-position: center;
  }
  @media (max-width: 768px) {
    width: 600px;
    height: 610px;
  }
  @media (max-width: 630px) {
    width: 440px;
    height: 446px;
  }
  @media (max-width: 480px) {
    width: 325.56px;
    height: 330px;
  }
`;

export const DivBoxBoxNFTSC = styled.div`
  margin-top: 50px;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1950px;
  display: grid;
  justify-items: center;
`;
