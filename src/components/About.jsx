// import React from 'react'

// const About = () => {
//     return (
//         <div className='w-full h-full bg-[#eaeaea] mt-[7vh] relative'>
//             <div className=" flex  h-[38%] justify-start  -mt-[4.5vh]  ">
//                 <h1 className=' text-[30vw] font-bold font-[b] tracking-tight leading-[35vh] select-none' >
//                    about

//                 </h1>
//             </div>
//             {/* <div className="w-full h-0.5 bg-black"></div> */}
//             <div className="w-full h-full ">

//             </div>


//         </div>
//     )
// }

// export default About

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import  useGSAP  from "@gsap";
gsap.registerPlugin(ScrollTrigger, useGSAP);

const journeyData = [
  {
    year: "2022",
    title: "The Beginning",
    description:
      "My journey into web development started with curiosity about how websites work. I started learning HTML, CSS and JavaScript.",
    number: "01",
  },
  {
    year: "2023",
    title: "Learning & Exploring",
    description:
      "I explored frontend development, learned React.js and started building interactive and responsive web applications.",
    number: "02",
  },
  {
    year: "2024",
    title: "Building Real Projects",
    description:
      "I started working on real-world projects and improved my skills in React, Node.js, Express and MongoDB.",
    number: "03",
  },
  {
    year: "2025",
    title: "Professional Growth",
    description:
      "I completed my MERN Stack internship at Coding Blocks and gained practical development experience.",
    number: "04",
  },
  {
    year: "2026",
    title: "Moving Forward",
    description:
      "Currently pursuing MCA, improving my development skills and building meaningful digital experiences.",
    number: "05",
  },
];

const About = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Heading animation
      gsap.from(".about-heading", {
        y: 120,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-heading",
          start: "top 90%",
        },
      });

      // Timeline progress
      gsap.fromTo(
        ".journey-progress",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".journey-list",
            start: "top 70%",
            end: "bottom 70%",
            scrub: 1,
          },
        }
      );

      // Journey cards reveal
      gsap.utils.toArray(".journey-card").forEach((card) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Small decorative heading
      gsap.from(".journey-intro", {
        x: -60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".journey-intro",
          start: "top 85%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="w-full min-h-screen bg-[#eaeaea] mt-[7vh] relative overflow-hidden"
    >
      {/* ABOUT HEADING */}
      <div className="flex h-[38%] justify-start -mt-[4.5vh]">
        <h1 className="about-heading text-[30vw] font-bold font-[b] tracking-tight leading-[35vh] select-none text-[#1c1c1c]">
          about
        </h1>
      </div>

      {/* JOURNEY INTRO */}
      <div className="journey-intro px-[7vw] pt-16 pb-24">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-5">
              / My Journey
            </p>

            <h2 className="text-[9vw] md:text-[5vw] font-bold leading-[0.95] tracking-tight text-[#1c1c1c]">
              Every step
              <br />
              made me better.
            </h2>
          </div>

          <p className="text-base md:text-lg text-gray-600 max-w-[350px] leading-relaxed self-end">
            A little story about where I started, what I've learned
            and where I'm heading next.
          </p>
        </div>
      </div>

      {/* JOURNEY TIMELINE */}
      <div className="journey-list relative px-[7vw] pb-32">
        {/* Timeline line */}
        <div className="absolute left-[8vw] md:left-[50%] top-0 bottom-0 w-[2px] bg-black/10">
          <div className="journey-progress origin-top w-full h-full bg-[#174d43]" />
        </div>

        <div className="flex flex-col gap-28 md:gap-36">
          {journeyData.map((item, index) => (
            <div
              key={item.number}
              className={`journey-card relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 ${
                index % 2 !== 0 ? "md:text-right" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[calc(1vw-7px)] md:left-[calc(50%-8px)] top-2 w-4 h-4 rounded-full bg-[#174d43] border-[4px] border-[#eaeaea] z-10" />

              {/* Year */}
              <div
                className={`pl-[12vw] md:pl-0 ${
                  index % 2 !== 0 ? "md:order-2" : ""
                }`}
              >
                <span className="text-[12vw] md:text-[7vw] font-bold leading-none tracking-tighter text-[#174d43]">
                  {item.year}
                </span>
              </div>

              {/* Content */}
              <div
                className={`pl-[12vw] md:pl-0 ${
                  index % 2 !== 0 ? "md:order-1" : ""
                }`}
              >
                <p className="text-sm tracking-widest text-gray-500 mb-4">
                  JOURNEY / {item.number}
                </p>

                <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1c1c1c] mb-6">
                  {item.title}
                </h3>

                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-md">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="px-[7vw] py-24 bg-[#174d43] text-[#eaeaea]">
        <p className="text-sm tracking-[0.3em] mb-8 uppercase">
          / What's Next?
        </p>

        <h2 className="text-[12vw] md:text-[8vw] font-bold leading-[0.9] tracking-tight">
          Still
          <br />
          Becoming.
        </h2>

        <p className="mt-10 text-lg text-white/70 max-w-lg">
          The journey doesn't stop here. I'm always learning,
          experimenting and building something new.
        </p>
      </div>
    </section>
  );
};

export default About;
