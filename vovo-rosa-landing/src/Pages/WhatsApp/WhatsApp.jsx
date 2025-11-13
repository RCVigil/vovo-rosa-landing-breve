import React from "react";

import whatsLogo from "../../assets/icons8-whatsapp-480.svg";

import "./whatsApp.css";

const WhatsApp = () => {
  const phoneNumber = "12996055505";
  const message = `Não apague esta linha, mensagem direcionada do site, digite seu nome abaixo, que já responderemos.\nnome: `;

  const generateWhatsAppLink = () => {
    const encodedMessage = encodeURIComponent(message);
    const isMobileOrTablet = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (isMobileOrTablet) {
      const whatsAppApp = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      return whatsAppApp;
    } else {
      const whatsAppWeb = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
      return whatsAppWeb;
    }
  };

  return (
    <div id="divWhatsApp_Icon">
      <a
        className="AncoWhatsApp"
        href={generateWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        title="Entre em contato pelo WhatsApp"
      >
        <img
          className="imgWhats"
          src={whatsLogo}
          alt="Ícone do WhatsApp"
          width="70rem"
          height="auto"
        />
        <p>+55 12 99605-5505</p>
      </a>
    </div>
  );
};

export default WhatsApp;
