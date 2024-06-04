import React from "react";
import HeroSection from "./home/HeroSection";
import Navbar from "./_components/Navbar";
import { Separator } from "@/components/ui/separator";
import AboutSection from "./about/page";
import ContactSection from "./contact/page";
import ProjectSection from "./projects/page";
import AnimatedSection from "./_components/AnimatedSection";
import VolunteeringSection from "./volunteering/page";

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-2 bg-custom-gradient">
      <Navbar />
      <div className="container mt-24 mx-auto ">
        <div id="hero">
          <HeroSection />
        </div>
        <div id="about">
          <AnimatedSection>
            <AboutSection />
          </AnimatedSection>
        </div>
        <Separator color="black" />
        <div id="projects">
          <AnimatedSection>
            <ProjectSection />
          </AnimatedSection>
        </div>
        <Separator color="black" />

        <div id="volunteering">
          <AnimatedSection>
            <VolunteeringSection />
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
