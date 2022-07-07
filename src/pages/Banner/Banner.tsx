import React from "react";
import "./Banner.scss";
import Typewriter from "typewriter-effect";

export default function Banner() {
  return (
    <section className="section-banner">
      <h1>Olá,</h1>
      <h2 className="custom-type-animation">me chamo Victoria Marques.</h2>
      <Typewriter
        options={{
          strings: [
            "Sou desenvolvedora full stack.",
            "Tenho como foco a responsabilidade & excelência.",
          ],
          autoStart: true,
          loop: true,
          delay: 70,
          wrapperClassName: "custom-type-animation",
          cursorClassName: "custom-cursor-animation",
        }}
      />
    </section>
  );
}
