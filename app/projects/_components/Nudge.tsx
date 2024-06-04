// NUScheduly.tsx
import React from "react";
import { Project } from "@/app/_components/Project";

class Nudge extends Project {
  title = " Nudge";
  description = "Microsoft AI Classroom Hackathon Submission";
  content = [
    "Organized a team in developing an AI-driven education web application expanding on the `Feynman Technique` to boost learner retention by over 50% having users explain concepts to AI models, receiving personalized feedback for better comprehension.",
    "Specialized in AI implementation, utilizing the OpenAI API for generating responses and deploying Microsoft Azure tools, particularly Azure AI's Linked Entities, to enhance AI feedback while developing capabilities in prompt engineering.",
    "Collaborated on front-end development using ReactJS and Tailwind CSS, ensuring a visually appealing user interface.",
  ];
  image = "/nudge.jpeg";
  link = "https://github.com/PyromancerBoom/ai-hack-nudge";
}

export default Nudge;
