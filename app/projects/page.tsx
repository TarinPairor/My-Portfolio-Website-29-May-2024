import React from "react";
import Image from "next/image";
import NUScheduly from "./_components/Taylord4u";
import Taylord4u from "./_components/NUScheduly";
import Nudge from "./_components/Nudge";
import { TypeWriterAnimation } from "../_components/TypeWriteAnimation";
import NUSCCGSP from "./_components/NUSCCSGP";
import KaggleFloodPrediction from "./_components/KaggleFloodPrediction";

const projects = [
  new NUSCCGSP(),
  new Taylord4u(),
  new KaggleFloodPrediction(),
  new NUScheduly(),
  new Nudge(),
];

function ProjectSection() {
  return (
    <div className="relative">
      <div className="flex flex-col lg:flex-row text-3xl md:text-6xl font-extrabold my-9 font-mono text-center space-y-4">
        <TypeWriterAnimation
          sequence={["My Projects", 2000, " My Projects", 2000]}
        />
      </div>

      <div className="relative py-10 px-4">
        <div className="flex flex-col md:flex-row md:overflow-x-scroll md:overflow-y-hidden space-y-6 md:space-y-0 md:space-x-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-full md:min-w-[600px] lg:min-w-[99%] shadow-lg rounded-lg p-6"
            >
              {project.render()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
