import React from "react";
import HeroSection from "./home/HeroSection";
import Navbar from "./_components/Navbar";
import AboutSection from "./about/page";
import ContactSection from "./contact/page";
import ProjectSection from "./projects/page";
import AnimatedSection from "./_components/AnimatedSection";

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-2 bg-custom-gradient">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <div id="hero">
          <HeroSection />
        </div>
        <div id="about">
          <AnimatedSection>
            <AboutSection />
          </AnimatedSection>
        </div>
        <div id="projects">
          <AnimatedSection>
            <ProjectSection />
          </AnimatedSection>
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </div>
    </main>
  );
};

export default Home;
