import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <h1>Victoria Marques</h1>

      <nav>
        <ul>
          <li>
            <AnchorLink href="#home">Início</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#about">Sobre</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#projects">Projetos</AnchorLink>
          </li>
          <li>{/* <AnchorLink href="#contact">Contato</AnchorLink> */}</li>
        </ul>
      </nav>
    </header>
  );
}
