"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "../_components/TabButton";
import { TypeWriterAnimation } from "../_components/TypeWriteAnimation";
import AnimatedSection from "../_components/AnimatedSection";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 font-semibold">
        <li>CSS</li>
        {/* {"Orbital"} */}
        <li>Tailwind CSS</li>
        {/* {"CVWO"} */}
        <li>Node.js</li>
        {/* {"Orbital"} */}
        <li>JavaScript/Typescript</li>
        {/* {"Orbital/CVWO/Nudge"} */}
        <li>React</li>
        {/* {"Orbital/CVWO"} */}
        <li>PostgreSQL</li>
        {/* {"CVWO"} */}
        <li>Firebase</li>
        {/* {"Orbital"} */}
        <li>Golang</li>
        {/* {"CVWO"} */}
        <li>Python</li>
        {/* {"Kaggle competition"} */}
        <li>C</li>
        {/* {"MIPS Simulator"} */}
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 ">
        <li>
          <p className="font-semibold">National University of Singapore:</p>
          <p>Bachelors in Computing 2022/2026</p>
        </li>
      </ul>
    ),
  },
  // {
  //   title: "Certifications",
  //   id: "certifications",
  //   content: (
  //     <ul className="list-disc pl-2">
  //       <li>AWS Cloud Practitioner</li>
  //       <li>Google Professional Cloud Developer</li>
  //     </ul>
  //   ),
  // },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: React.SetStateAction<string>) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className="border-solid rounded-lg border-2 border-black m-3">
      <section className=" text-black" id="about">
        <div className="lg:grid md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
          {/* <Image src="/images/about-image.png" width={500} height={500} alt=""/> */}
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-black mb-4">
              {/* <TypeWriterAnimation sequence={["About Me"]} /> */}
              About Me
            </h2>

            <ul className="text-base font-mono font-semibold lg:text-lg list-disc p-2 space-y-4">
              <li>
                Penultimate year student studying at the National University of
                Singapore pursuing a degree in Computer Science.
              </li>
              <li>
                {" "}
                Passionate about software development and have experience in
                full-stack web development projects.{" "}
              </li>{" "}
              <li>
                Enjoys doing data science and machine learning having
                participated in several Kaggle competitions and AI-related
                hackathons.
              </li>
            </ul>

            <Link
              href="https://aseannow.com/topic/1129154-world-scrabble-championship-fifteen-year-old-thai-boy-in-third-place/"
              legacyBehavior
            >
              <a
                className="text-s text-slate-600 mt-10 "
                target="_blank"
                rel="noopener noreferrer"
              >
                Word game enthusiast.
              </a>
            </Link>
            <div className="flex flex-row justify-start mt-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Skills{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Education{" "}
              </TabButton>
              {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton> */}
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </div>
          </div>
          <div>
            <Image
              src="/TKSquareKorat.jpeg"
              alt="TK"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
