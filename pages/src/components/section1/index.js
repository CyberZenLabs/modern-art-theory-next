import React, { useState, useContext, useEffect } from "react";
import {
  DivBoxSC,
  DivBoxContentSC,
  DivBoxTextTitleSC,
  DivTextTitleSC,
  DivTextBodySC,
  ButtonSC,
  TextButtonSC,
  DivGradientSC,
  DivBoxNFTSC,
  DivBoxBoxNFTSC,
  DivBoxNFT1500SC,
} from "../../styled-components/styled.section1";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import Web3 from "web3";
import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";

const providerOptions = {
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "Catena Heir",
      infuraId: {
        5: "https://goerli.infura.io/v3/dbf8d412f1c5482191cd048033486279",
      },
    },
  },
};

const SectionBox1 = (props) => {
  const { bottomRefHome } = props;
  const [web3Provider, setWeb3Provider] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("walletAdress") !== null) {
      let walletAdress = localStorage.getItem("walletAdress");
      getData(walletAdress);
    }
  }, []);

  async function connectWallet() {
    if (window.ethereum) {
      try {
        let web3Modal = new Web3Modal({
          cacheProvider: true,
          providerOptions,
        });
        const web3ModalInstance = await web3Modal.connect();
        const web3ModalProvider = new ethers.providers.Web3Provider(
          web3ModalInstance
        );
        // const web3 = new Web3(web3ModalInstance);
        // const accounts = await web3.eth.getAccounts();
        if (web3ModalProvider) {
          setWeb3Provider(web3ModalProvider);
        }
        let _walletAdress = web3ModalProvider.provider.selectedAddress;
        localStorage.setItem("walletAdress", _walletAdress);
      } catch (err) {
        console.log(err);
      }
    }
  }

  async function getData(address) {
    if (window.ethereum) {
      try {
        let web3Modal = new Web3Modal({
          cacheProvider: true,
          providerOptions,
        });
        const web3ModalInstance = await web3Modal.connect(address);
        const web3ModalProvider = new ethers.providers.Web3Provider(
          web3ModalInstance
        );
        // const web3 = new Web3(web3ModalInstance);
        // const accounts = await web3.eth.getAccounts();
        if (web3ModalProvider) {
          setWeb3Provider(web3ModalProvider);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <>
      {" "}
      <div ref={bottomRefHome}></div>
      <DivBoxSC>
        <DivBoxBoxNFTSC>
          <DivBoxContentSC>
            <div>
              <DivGradientSC />
              <DivBoxTextTitleSC>
                <DivTextTitleSC>Exclusive Access</DivTextTitleSC>
                <DivTextBodySC>
                  Your MAT NFT provides you access to the most exclusive events
                  of Art Basel and beyond.
                </DivTextBodySC>
                <ButtonSC onClick={connectWallet}>
                  <TextButtonSC>
                    {web3Provider !== null ? "Connected" : "Connect wallet"}
                  </TextButtonSC>
                </ButtonSC>
              </DivBoxTextTitleSC>
            </div>
          </DivBoxContentSC>
          <DivBoxNFTSC />
          <DivBoxNFT1500SC />
        </DivBoxBoxNFTSC>
      </DivBoxSC>
    </>
  );
};

export default SectionBox1;
