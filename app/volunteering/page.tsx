import { Divide } from "lucide-react";
import React from "react";
import Image from "next/image";
import YEGC from "./_components/YEGC";
import { TypeWriterAnimation } from "../_components/TypeWriteAnimation";

const volunteerings = [new YEGC()];

function VolunteeringSection() {
  return (
    <div>
      <div className="text-3xl md:text-6xl font-extrabold my-9 font-mono">
        <TypeWriterAnimation
          sequence={["Volunteering", 2000, " Volunteering", 2000]}
        >
          {/* <h1>My Projects</h1> */}
        </TypeWriterAnimation>
      </div>
      {volunteerings.map((volunteering, index) => (
        <div key={index}>{volunteering.render()}</div>
      ))}
    </div>
  );
}

export default VolunteeringSection;
