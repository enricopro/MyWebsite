import React from 'react';
import '../App.css';
import { FaPaypal } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

function Donate() {

  const [isOpen,setIsOpen] = React.useState(false);

  function onOpenModal () {
    setIsOpen(true);
  };
 
  function onCloseModal () {
    setIsOpen(false);
  };



  return (
    <div className="SocialContainer">
      <div className="DonateButton">
        <a href="https://paypal.me/pools/c/8rXHsuoUfd" target="_blank">
          <div className="ButtonContent">
            <FaPaypal size="24" color="white"/>
            <p className="DonateName">Paypal</p>
          </div>
        </a>
      </div>
      <div className="DonateButton" onClick={onOpenModal}>
          <div className="ButtonContent">
            <FaBitcoin size="24" color="white"/>
            <p className="DonateName">Bitcoin</p>
          </div>
      </div>
      <Modal open={isOpen} onClose={onCloseModal} center showCloseIcon={false} className="ModalContainer">
        <div className="ModalContainer">
          <div className="CloseButton">
            <RiCloseLine onClick={onCloseModal} size="24" color="white" />
          </div>
          <div className="ImageContainer">
            <img src="/qrcode.png" alt="qr_code" className="QrCode"/>
          </div>
          <p className="Address">37Y3qQGr3vQjyr9K3SuVunxNvE9iQ1LgTT</p>
        </div>

      </Modal>  
    </div>
  );
}

export default Donate;
