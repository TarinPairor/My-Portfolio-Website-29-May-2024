"use client";
import React from "react";

function HeroSection() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "TarinPairorResumeA.pdf";
    link.download = "TarinPairorResumeA.pdf";
    link.click();
  };

  return (
    <section>
      <div className="grid grid-col-1 lg:grid-cols-12">
        <div className="col-span-7 place-content-center text-center sm:text-left">
          <h1 className=" text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-slate-400 to-blue-700">
              Hello, I am{" "}
            </span>
            <br />
            Tarin Pairor{" "}
          </h1>
          <div>{/* <TypeWriterAnimation /> */}</div>
          <p className="text-gray-400">Programmer, Pianist, Scrabbler.</p>
          <div className="m-5">
            <button
              className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-red-500 to-green-500 text-white hover:bg-gradient-to-br hover:from-blue-700 hover:via-red-700 hover:to-green-700 hover:text-slate-300"
              onClick={handleDownload}
            >
              Download Resume
            </button>
          </div>
        </div>

        <div className="col-span-5">
          <img
            src="/TarinPairorProfile.jpeg"
            alt="Tarin Pairor Profile"
            width={400}
            height={400}
            className="rounded-full"
            // shadow="0px 4px 15px rgba(0, 0, 0, 1)"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
