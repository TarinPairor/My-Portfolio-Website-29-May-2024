import { Divide } from "lucide-react";
import React from "react";
import Image from "next/image";
import NUScheduly from "./_components/Taylord4u";
import Taylord4u from "./_components/NUScheduly";
import Nudge from "./_components/Nudge";
import { TypeWriterAnimation } from "../_components/TypeWriteAnimation";

const projects = [new NUScheduly(), new Taylord4u(), new Nudge()];

function ProjectSection() {
  return (
    <div>
      <div className="text-6xl font-extrabold my-9 font-mono">
        <TypeWriterAnimation
          sequence={["My Projects", 2000, " My Projects", 2000]}
        >
          {/* <h1>My Projects</h1> */}
        </TypeWriterAnimation>
      </div>
      {projects.map((project, index) => (
        <div key={index}>{project.render()}</div>
      ))}
    </div>
  );
}

export default ProjectSection;
