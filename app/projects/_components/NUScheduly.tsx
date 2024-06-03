// NUScheduly.tsx
import React from "react";
import { Project } from "@/app/_components/Project";

class NUScheduly extends Project {
  title = " NUScheduly";
  description = "Orbital Project (Apollo) @ NUS";
  content = [
    "Architected a student-centric web application featuring task storage, flashcards, a dynamic forum page, and an auto-updating Monthly Calendar interface for seamless organization and boosted user experience.",
    "Employed React Vite TypeScript to design a polished and user-friendly interface, merging React`s framework capabilities with improved development experience of TypeScript.",
    "Engineered backend infrastructure, utilizing Cloud Firestore for streamlined task management through its NoSQL structure.",
    "Incorporated Firebase Auth to establish a secure authentication system, ensuring tasks and login information are seamlessly stored and retrieved, crucial for applications functionality.",
    "Demonstrated a commitment to software engineering principles through implementation of rigorous testing methodologies, including Jest and Enzyme, for comprehensive user and integration testing decreasing error likelihood and organizing.",
    "Co-led web application development with a team member, promoting effective teamwork through iterative README versions, comprehensive architecture and flow diagrams, and disciplined branch control.",
  ];
  image = "/orbital.png";
  link = "https://github.com/TarinPairor/NUScheduly-1234";
}

export default NUScheduly;
