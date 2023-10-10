import React from "react";
import TiltCard from "./TiltCard/TiltCard";
import ParticleBackground from "./ParticleBackground/ParticleBackground";

const Automation = () => {
  const cardDetails = [
    {
      title: "🚀 Use our readymade solutions",
      description:
        "No need to waste your time using other complex and expensive solutions. Use our readymade API that will just do the job for you. Completely free to self host without any pain.",
      img: "https://6jlvz1j5q3.csb.app/undraw_static_assets.svg",
      button: "Introducing ScraperLix",
    },
    {
      title: "⚡️ Learn to build with us",
      description:
        "Wanna know how to do it? Join our live classes, workshops and courses. We will do it together, step by step. You just have to spend some quality time with us.",
      img: "https://6jlvz1j5q3.csb.app/undraw_collection.svg",
      button: "Check out Code Eating Ants",
    },
    {
      title: "👩‍🎨 Let us build for you",
      description:
        "Don't have time to use readymade solutions or even learn it yourself? We got you covered! Tell us what you need and we will work together on the right solution for you.",
      img: "https://6jlvz1j5q3.csb.app/undraw_upload.svg",
      button: "Visit SoftwareSheba",
    },
  ];
  return (
    <div className="relative">
      <div className="absolute">
        <ParticleBackground></ParticleBackground>
      </div>
      <h1> This is Automation </h1>
      <div className="flex justify-center items-center h-[100vh] gap-6">
        {cardDetails.map((cardDetail, i) => (
          <TiltCard
            key={i}
            emoji={cardDetail.emoji}
            title={cardDetail.title}
            description={cardDetail.description}
            img={cardDetail.img}
            button={cardDetail.button}
          ></TiltCard>
        ))}
      </div>
    </div>
  );
};

export default Automation;
