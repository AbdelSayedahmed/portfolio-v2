import React from "react";

export default function AboutMe() {
  return (
    <div className="flex flex-col items-center justify-center w-full sm:w-3/4 md:w-1/2 font-bold gap-4 mt-10 p-12 lg:p-0">
      <p className="text-center">
        I'm Abdelrahman Sayedahmed, a full-stack software developer with a
        passion for building impactful web applications. My journey into coding
        began in high school, where an inspiring robotics class introduced me to
        programming in C++ under the guidance of my teacher, Mr. Hans. This
        experience sparked a fascination with software development, leading me
        to explore block-based coding and eventually Python.
        <br />
        <br />
        Though I initially pursued computer science in college, navigating the
        traditional academic path proved challenging. I ultimately found my way
        back to coding through the Pursuit Fellowship, a program that focuses on
        immersive learning and career development for aspiring developers.
        Pursuit gave me the tools, community, and hands-on experience to
        confidently step into full-stack development and dive deeper into the
        tech landscape.
        <br />
        <br />
        Now, I specialize in both front-end and back-end technologies, bringing
        ideas to life with code. I'm excited to continue growing as a developer
        and to contribute to innovative projects that make a difference.
      </p>
      <img
        className="w-[50%] sm:w-[30%] rounded-[12px]"
        src="/images/headshot.png"
        alt="Abdel's headshot"
      />
    </div>
  );
}
