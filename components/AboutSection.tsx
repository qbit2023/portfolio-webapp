import Image from "next/image";
import React from "react";

const skills = [
  { skill: "HTML5" },
  { skill: "CSS3" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Redux" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Python" },
  { skill: "Java" },
  { skill: "Spring Boot" },
  { skill: "REST" },
  { skill: "Databases" },
  { skill: "Git" },
  { skill: "Docker" },
];

function AboutSection() {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-amber-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Know About me!
            </h1>
            <p>
              Hi, I am Rahul and I am a
              <span className="font-bold">{" driven"}</span> full stack
              developer With a strong foundation in both front-end and back-end
              development, I am able to design and develop applications that are
              highly functional, scalable, and user-friendly.
            </p>
            <br />

            <p>
              With a passion for staying up-to-date on the latest technologies
              and tools, I am always looking for new and innovative ways to
              improve my skills and open to new opportunities.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            {/* <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
