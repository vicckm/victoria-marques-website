import React from "react";
import Header from "../../components/Header/Header";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import TechnologiesThatIKnow from "../TechnologiesThatIKnow/TechnologiesThatIKnow";
import "./Home.scss";

function Home() {
  return (
    <>
      <Header />
      <main className="container">
        <Banner />
        <About />
        <TechnologiesThatIKnow />
      </main>
      <Projects />
      {/* <Contact /> */}
    </>
  );
}

export default Home;
