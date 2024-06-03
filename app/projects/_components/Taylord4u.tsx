// Taylord4u.tsx
import React from "react";
import { Project } from "@/app/_components/Project";
import Image from "next/image";

class Taylord4u extends Project {
  title = "Taylord4u";
  description = "Full-Stack Web Application CRUD Forum";
  content = [
    "Created and deployed a dynamic, fully-operational Full-Stack web application forum, featuring seamless CRUD operations, an intuitive tagging system facilitating post discovery, and integrated Microsoft Azure AI sentiment analysis for text comprehension.",
    "Constructed a robust backend infrastructure with Go and GORM Object-Relational Mapping, supporting a PostgreSQL database enhancing HTTP requesting, ensuring efficient and secure communication within the application.",
    "Elevated the user interface experience through React Vite TypeScript framework, coupled with the aesthetic enhancements from Tailwind CSS styling.",
  ];
  image = "/taylord4u.png";
  link = "https://github.com/TarinPairor/CVWO-assignment-2024";
}

export default Taylord4u;
