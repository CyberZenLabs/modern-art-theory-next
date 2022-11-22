import styled from "styled-components";
import Box from "../img/GoldCube.png";

export const DivS4BoxSC = styled.div`

  width: 100%;
  min-height: 813px;
  background: #0f0f0f;
  display: grid;
  justify-items: center;
  align-items: center;
  // border: 1px solid green;
  @media (max-width: 1000px) {
    height: 1149px;
  }
  @media (max-width: 480px) {
    height: 980px;
  }
  @media (max-width: 360px) {
    height: 850px;
  }
`;
export const DivInnerBoxTwoColumnsSC = styled.div`
max-width: 1420px;
 // border: 1px solid red;
  display: grid;
  grid-template-columns: 40% 60%;
  gap:10px;
  width: 80vw;
  height: 600px;
  @media (max-width: 1000px) {
    align-content: center;
    grid-template-columns: 100%;
    grid-template-rows: max-content max-content;
    height: 900px;
  }
  @media (max-width: 768px) {
    width: 95vw; 
  }
  @media (max-width: 430px) {
    height: 800px;
  }
`;
export const DivNFTBlockSC = styled.div`
  // border: 1px solid blue;
  display: grid;
  grid-template-rows: max-content max-content;
  gap: 30px;
  align-content: center;
  max-height: 560px;
  @media (max-width: 1000px) {
    height: 100%;
    grid-row: 2 / 2;
    max-height: 960px;
  }
`;
export const DivNFTBoxSC = styled.div`
  // border: 1px solid white;
  width: 450px;
  height: 450px;
  background-size: 80%;
  background-image: url(${ Box });
  background-repeat: no-repeat;
  background-position: bottom;
  max-width: 550px;
  max-height: 526px;
  display: grid;
  justify-self: center;
  @media (max-width: 1700px) {
  width: 350px;
  height: 350px;
  }
  @media (max-width: 1000px) {
    background-size: 100%;
    width:400px;
  height: 400px;
  }
  @media (max-width: 768px) {
    width:400px;
  height: 400px;
  }
  @media (max-width: 480px) {
    background-size: 90%;
    width:350px;
  height: 350px;
  }

`;
export const DivNFTBoxButtonSC = styled.div`
  // border: 1px solid pink;
  display: grid;
  justify-items: center;
  align-items: start;
`;
export const DivNFTTextSC = styled.div`
 // border: 1px solid yellow;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: clamp(15px, 2vw, 36px);
  line-height: clamp(15px, 2.5vw, 62px);
  color: #ffffff;
  text-align: left;
  display: grid;
  align-self: center;
  max-width: clamp(825px, 2vw, 480px);

  @media (max-width: 1000px) {
    font-size: clamp(20px, 5vw, 32px);
    height: 100%;
    grid-row: 1 / 2;
    text-align: center;
    line-height: 42px;
  }
  @media (max-width: 480px) {
    line-height: 32px;
  }
`;
export const DivCircleGradientSC = styled.div`
  position: absolute;
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
  width: clamp(400px, 50%, 900px);
  height: 232.48px;
  margin-top: 60px;
  @media (max-width: 1000px) {
    width: 80%;
  }
`;
export const ButtonSC = styled.button`
  display: grid;
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 18px 36px;
  gap: 10px;
  width: clamp(256px, 60%, 352px);
  height: clamp(58px, 4vw, 78px);
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
  align-self: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: clamp(20px, 1.7vw, 28px);
  line-height: 50px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
