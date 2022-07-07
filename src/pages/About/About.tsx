import React from "react";
import Subtitle from "../../components/Subtitle/Subtitle";
import "./About.scss";

export default function About() {
  return (
    <section id="about" className="section-about">
      <Subtitle title="Sobre" />

      <p>
        Me chamo Victoria, sou técnica em informática, estudante de Sistemas de
        Informação pela Faculdade Descomplica e também desenvolvedora frontend.
        Comecei a gostar de computadores quando tinha 7 anos de idade e esse foi
        um dos fatores para atiçar minha curiosidade pelo mundo da tecnologia.{" "}
      </p>
    </section>
  );
}
