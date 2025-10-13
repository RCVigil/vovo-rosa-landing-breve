import React from "react";
import LogoVovoRosa from "../../assets/VovóRosaLogoFTransparente_semTelefone.svg";

import InstagramLogo from "../../assets/InstagramLogo.svg";

import whatsLogo from "../../assets/icons8-whatsapp-480.svg";

import "./aboutUs.css";

const AboutUs = () => {
  const paes = [
    "Dueto de chocolate com doce de leite",
    "Dueto de goiabada com cream cheese",
    "Fatia húngara",
    "Babka Café Noir com Chocolate",
    "Banana Bread",
  ];

  return (
    <div id="aboutUsLeft">
      <div id="header__AboutUs__Logo">
        <img
          src={LogoVovoRosa}
          alt="Logo Padrão Vovó Rosa Pães Artesanais"
          width="250rem"
          height="auto"
        />
      </div>
      <div id="main__AboutUs__Description">
        <h6>Estamos assando nosso site — quase saindo do forno! 🍞✨</h6>
        <h6>
          Enquanto isso, estamos prontos para te atender e te encantar com
          nossos pães recheados. Fale com a gente pelos contatos abaixo. 💛
        </h6>
        <ul className="lista-paes">
          {paes.map((pao, index) => (
            <li key={index}>{pao}</li>
          ))}
        </ul>
      </div>
      <div id="footer__AboutUs__SocialRedes">
        <a
          href="https://www.instagram.com/vovorosapaesartesanais"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__About__Insta"
        >
          <img
            src={InstagramLogo}
            alt="Imagem do Logo do Instagram"
            width="50rem"
            height="auto"
          />
          <p>
            Siga-nos no Instagram
          </p>
        </a>

        <div className="footer__About__Whats">
          <img
            src={whatsLogo}
            alt="Ícone do WhatsApp"
            width="60rem"
            height="auto"
          />
          <p>+55 12 99605-5505</p>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
