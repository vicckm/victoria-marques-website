import React from "react";
import "./TechnologiesThatIKnow.scss";
import Subtitle from "../../components/Subtitle/Subtitle";
import * as I from "./images";
import FadeIn from "react-fade-in";

export default function TechnologiesThatIKnow() {
  return (
    <section className="tech-section">
      <Subtitle title="Tecnologias que eu sei" />

      <FadeIn delay={600}>
        <ul>
          <li>
            <img src={I.ImageHTML5} alt="HTML5" />
          </li>

          {/* <FadeIn delay={300}> */}
          <li>
            <img src={I.ImageCSS3} alt="CSS3" />
          </li>
          {/* </FadeIn> */}
          {/* <FadeIn delay={450}> */}
          <li>
            <img src={I.ImageJavaScript} alt="JavaScript" />
          </li>
          {/* </FadeIn> */}
          {/* <FadeIn delay={600}> */}
          <li>
            <img src={I.ImageTypeScript} alt="TypeScript" />
          </li>
          {/* </FadeIn> */}
          {/* <FadeIn delay={750}> */}
          <li>
            <img src={I.ImageSASS} alt="SASS" />
          </li>
          {/* </FadeIn> */}
          {/* <FadeIn delay={900}> */}
          <li>
            <img src={I.ImageStyledComponents} alt="Styled Components" />
          </li>
          {/* </FadeIn> */}
          {/* <FadeIn delay={1050}> */}
          <li>
            <img src={I.ImageBootstrap} alt="Bootstrap" />
          </li>
          {/* </FadeIn> */}
          {/* <FadeIn delay={1300}> */}
          <li>
            <img src={I.ImageAngularMaterial} alt="Angular Material" />
          </li>
          {/* </FadeIn> */}

          {/* <FadeIn delay={1450}> */}
          <li>
            <img src={I.ImageNestJS} alt="NestJS" />
          </li>
          {/* </FadeIn> */}

          {/* <FadeIn delay={1600}> */}
          <li>
            <img src={I.ImageReact} alt="React" />
          </li>
          {/* </FadeIn> */}
          {/* <FadeIn delay={1750}> */}
          <li>
            <img src={I.ImageRedux} alt="Redux" />
          </li>
          {/* </FadeIn> */}
          {/* <FadeIn delay={2050}> */}
          <li>
            <img src={I.ImageVue} alt="Vue" />
          </li>
          {/* </FadeIn> */}
          {/* <FadeIn delay={2300}> */}
          <li>
            <img src={I.ImageAPI} alt="API" />
          </li>
          {/* </FadeIn> */}
          {/* <FadeIn delay={2450}> */}
          <li>
            <img src={I.ImageGit} alt="Git" />
          </li>
          {/* </FadeIn> */}
          {/* <FadeIn delay={2600}> */}
          <li>
            <img
              className="big-image"
              src={I.ImageExpressJS}
              alt="Express JS"
            />
          </li>
          {/* </FadeIn> */}
          {/* <FadeIn delay={2750}> */}
          <li>
            <img className="big-image" src={I.ImageNodeJS} alt="Node JS" />
          </li>
          {/* </FadeIn> */}
          {/* <FadeIn delay={3050}> */}
          <li>
            <img src={I.ImageAngular} alt="Angular" />
          </li>
          {/* </FadeIn> */}
          {/* <FadeIn delay={3300}> */}
          <li>
            <img className="big-image" src={I.ImageMongoDB} alt="MongoDB" />
          </li>
          {/* </FadeIn> */}
          {/* <FadeIn delay={3450}> */}
          <li>
            <img className="big-image" src={I.ImageMySQL} alt="MySQL" />
          </li>
          {/* </FadeIn> */}

          {/* <FadeIn delay={3600}> */}
          <li>
            <img
              className="big-image"
              src={I.ImageJasmineKarma}
              alt="Jasmine and Karma"
            />
          </li>
          {/* </FadeIn> */}
          {/* <FadeIn delay={3750}> */}
          <li>
            <img className="big-image" src={I.ImageChakraUI} alt="Chakra UI" />
          </li>
          {/* </FadeIn> */}
          {/* <FadeIn delay={4050}> */}
          <li>
            <img
              className="big-image"
              src={I.ImageTailwindCSS}
              alt="Tailwind CSS"
            />
          </li>
          {/* </FadeIn> */}
        </ul>
      </FadeIn>
    </section>
  );
}
