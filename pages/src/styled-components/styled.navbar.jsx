import styled from "styled-components";
import Logo from "../img/Logo.svg";

export const DivNavbarSC = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10000;
  height: 100px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  display: grid;
  justify-items: center;
  padding: 0 30px;
`;

export const DivBoxContentNavSC = styled.div`
  width: 100%;
  max-width: 1420px;
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: auto max-content;
`;

export const DivBoxLogoSC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: start;
  align-items: center;
`;

export const LinkLogoSC = styled.a`
  /* width: max-content;
  height: max-content; */
  justify-self: start;
`;

export const LogoSC = styled.div`
  background-image: url(${ Logo });
  width: 162px;
  height: 47px;
`;
export const DivBoxLinksSC = styled.div`
  width: max-content;
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: max-content max-content max-content;
  grid-gap: 48px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const DivLinkSC = styled.div`
  width: max-content;
  height: max-content;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
`;
