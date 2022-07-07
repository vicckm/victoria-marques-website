import React from "react";
import Subtitle from "../../components/Subtitle/Subtitle";
import "./Projects.scss";
import ImageHuddle from "../../assets/images/huddle-github.png";
import ImageSocial from "../../assets/images/social-github.png";
import ImageCard from "../../assets/images/card-github.png";
import FadeIn from "react-fade-in";

export default function Projects() {
  return (
    <section id="projects" className="section-projects">
      <Subtitle title="Projetos" />

      <ul className="project-list">
        <FadeIn delay={250}>
          <li>
            <span className="line"></span>
            <h1>Compliance on Hands</h1>
            <span>
              Tecnologias: Angular 13, Jasmine + Karma, SASS, PDF Make,
              Bootstrap, NgxDropzone, NgxCSV
            </span>
            <p>
              Participo do desenvolvimento do layout do sistema de gerenciamento
              de compliance que visa manter a integridade da organização.
            </p>
          </li>
        </FadeIn>
        <FadeIn delay={500}>
          <li>
            <span className="line"></span>
            <h1>Innovation Week</h1>
            <span>Tecnologias: Vue.js 3, SASS, Axios</span>
            <p>
              Participei do desenvolvimento do layout de um questionário para
              computar feedbacks do público presente no evento.{" "}
            </p>
          </li>
        </FadeIn>
        <FadeIn delay={750}>
          <li>
            <span className="line"></span>
            <h1>Monet by the water</h1>
            <span>
              Tecnologias: React, TypeScript, Redux Toolkit, Styled Components,
              Chakra UI, Axios, Integração Gateway NMI
            </span>
            <p>
              Participei do desenvolvimento do layout de e-commerce para venda
              de ingressos do evento.
            </p>
          </li>
        </FadeIn>
        <FadeIn delay={1000}>
          <li>
            <span className="line"></span>
            <h1>Clube de Vantagens</h1>
            <span>
              Tecnologias: React, TypeScript, Redux Toolkit, SASS, Tailwind CSS,
              Axios
            </span>
            <p>
              Participei do desenvolvimento do layout do sistema de gamificação
              que disponibilizava benefícios de acordo com o plano de telefonia
              do usuário e era possível adquirir mais benefícios aumentando de
              nível conforme o usuário acessava a plataforma.
            </p>
          </li>
        </FadeIn>
        <FadeIn delay={1250}>
          <li>
            <span className="line"></span>
            <h1>Guia do Pneu</h1>
            <span>Tecnologias: Angular 8, SASS, Angular Material</span>
            <p>
              Participei do desenvolvimento do layout do sistema para controle e
              gerenciamento de pneus para veículos de 4 e 2 rodas e fui
              responsável pela adição de novas funcionalidades e a
              manutenibilidade.{" "}
            </p>
          </li>
        </FadeIn>
      </ul>

      <Subtitle title="Desafios no frontendmentor.io" />

      <ul className="challenger-list">
        <FadeIn delay={1500}>
          <li>
            <img src={ImageHuddle} alt="Huddle project" />
            <a
              href="https://github.com/vicckm/huddle-landing-page"
              target="_blank"
              rel="noreferrer"
            >
              Huddle Landing Page
            </a>
          </li>
        </FadeIn>
        <FadeIn delay={1750}>
          <li>
            <img src={ImageSocial} alt="Social project" />
            <a
              href="https://github.com/vicckm/social-proof-section"
              target="_blank"
              rel="noreferrer"
            >
              Social Proof Section
            </a>
          </li>
        </FadeIn>
        <FadeIn delay={2000}>
          <li>
            <img src={ImageCard} alt="Card project" />
            <a
              href="https://github.com/vicckm/profile-card-component"
              target="_blank"
              rel="noreferrer"
            >
              Profile Card Component
            </a>
          </li>
        </FadeIn>
      </ul>
    </section>
  );
}
