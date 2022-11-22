import {FiFacebook, FiInstagram, FiMail, FiTwitter} from "react-icons/fi";
import styled from "styled-components";

export const DivFooterBoxSC = styled.div`
  height: 250px;
  background: #0f0f0f;
  z-index: 10;
  @media (max-width: 768px) {
    height: 150px;
  }
`;

export const DivContentBoxSC = styled.div`
  margin: 0 auto;
  max-width: 1420px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 4fr 1fr;
  justify-items: center;
`;

export const DivSocialNetworkBoxSC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  /* column-gap: 20%; */
`;

export const DivSocialNetworkSC = styled.div`
  width: clamp(360px, 100%, 700px);
  height: 100%;
  display: grid;
  grid-template-columns: max-content max-content max-content max-content;
  /* justify-items: center; */
  align-items: center;
  justify-content: center;
  column-gap: 10%;
`;

export const LinkSocialNetworkSC = styled.a`
  cursor: pointer;
  width: max-content;
  height: max-content;
  /* text-decoration: none; */
`;

export const IconLinkFacebookSC = styled(FiFacebook)`
  color: #fff;
  width: 60px;
  height: 70px;
  @media (max-width: 768px) {
    width: 40px;
    height: 50px;
  }
  @media (max-width: 480px) {
    width: 30px;
    height: 40px;
  }
`;

export const IconLinkTwitterSC = styled(FiTwitter)`
  color: #fff;
  width: 60px;
  height: 70px;
  @media (max-width: 768px) {
    width: 40px;
    height: 50px;
  }
  @media (max-width: 480px) {
    width: 30px;
    height: 40px;
  }
`;

export const IconLinkInstagramSC = styled(FiInstagram)`
  color: #fff;
  width: 60px;
  height: 70px;
  @media (max-width: 768px) {
    width: 40px;
    height: 50px;
  }
  @media (max-width: 480px) {
    width: 30px;
    height: 40px;
  }
`;

export const DivMailBoxSC = styled.div`
  height: max-content;
  width: max-content;
  display: grid;
  grid-template-columns: max-content max-content;
  column-gap: 9px;
  align-items: center;
`;

export const H1MailBoxSC = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 480px) {
    font-size: 6px;
  }
`;

export const IconLinkMailSC = styled(FiMail)`
  color: #fff;
  width: 60px;
  height: 70px;
  @media (max-width: 768px) {
    width: 40px;
    height: 50px;
  }
  @media (max-width: 480px) {
    width: 30px;
    height: 40px;
  }
`;

export const DivCopyrightBoxSC = styled.div`
  height: max-content;
  width: max-content;
`;

export const H1CopyrightBoxSC = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #e8e8e8;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;
