// import React from 'react'
import Clock from '../components/Clock'
import Heading from '../components/Heading'

// const About = () => {
//   return (
//     <div>
//       <Heading />
//       <Clock />
//     </div>
//   )
// }

// export default About

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);



const journeyData = [
  {
    year: "2022",
    title: "The Beginning",
    description:
      "Started my web development journey with HTML, CSS and JavaScript, exploring how websites work and how technology solves real-world problems.",
    number: "01",
    tag: "Foundation",
  },
  {
    year: "2023",
    title: "Frontend Exploration",
    description:
      "Expanded my frontend skills with React.js, Redux and Tailwind CSS, focusing on responsive interfaces and better user experiences.",
    number: "02",
    tag: "Learning",
  },
  {
    year: "2024",
    title: "Building & Creating",
    description:
      "Started turning creative ideas into functional projects while improving my coding skills, design sense and problem-solving abilities.",
    number: "03",
    tag: "Projects",
  },
  {
    year: "2025",
    title: "Professional Experience",
    description:
      "Completed a MERN Stack internship at Coding Blocks, gaining hands-on experience with Node.js, Express.js, MongoDB and REST APIs.",
    number: "04",
    tag: "Experience",
  },
  {
    year: "2026",
    title: "Growing Forward",
    description:
      "Currently pursuing MCA, strengthening my software development skills and working towards becoming a skilled software engineer.",
    number: "05",
    tag: "Growth",
  },
];



const About = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      gsap.from(".about-word", {
        yPercent: 120,
        opacity: 0,
        duration: 1.4,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-heading",
          start: "top 90%",
        },
      });

      // --------------------------------
      // INTRO ANIMATION
      // --------------------------------

      gsap.from(".intro-label", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".journey-intro",
          start: "top 80%",
        },
      });

      gsap.from(".intro-title", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".journey-intro",
          start: "top 75%",
        },
      });

      gsap.from(".intro-description", {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".journey-intro",
          start: "top 75%",
        },
      });

      // --------------------------------
      // TIMELINE PROGRESS
      // --------------------------------

      gsap.fromTo(
        ".journey-progress",
        {
          scaleY: 0,
        },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".journey-list",
            start: "top 65%",
            end: "bottom 65%",
            scrub: 1,
          },
        }
      );

      // --------------------------------
      // JOURNEY CARDS ANIMATION
      // --------------------------------

      gsap.utils.toArray(".journey-card").forEach((card, index) => {
        const direction = index % 2 === 0 ? -80 : 80;

        const content = card.querySelector(".journey-content");
        const year = card.querySelector(".journey-year");
        const dot = card.querySelector(".journey-dot");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(
          content,
          {
            x: direction,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          }
        );

        tl.fromTo(
          year,
          {
            scale: 0.7,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.9,
            ease: "back.out(1.5)",
          },
          "-=0.65"
        );

        tl.fromTo(
          dot,
          {
            scale: 0,
          },
          {
            scale: 1,
            duration: 0.5,
            ease: "back.out(2)",
          },
          "-=0.7"
        );
      });

      // --------------------------------
      // FINAL SECTION ANIMATION
      // --------------------------------

      gsap.from(".final-label", {
        y: 40,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".final-section",
          start: "top 75%",
        },
      });

      gsap.from(".final-heading span", {
        yPercent: 110,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".final-section",
          start: "top 70%",
        },
      });

      // --------------------------------
      // DESKTOP HOVER ANIMATION
      // --------------------------------

      mm.add("(min-width: 768px)", () => {
        const cards = gsap.utils.toArray(".journey-content");

        cards.forEach((card) => {
          const onEnter = () => {
            gsap.to(card, {
              y: -8,
              duration: 0.35,
              ease: "power2.out",
            });
          };

          const onLeave = () => {
            gsap.to(card, {
              y: 0,
              duration: 0.35,
              ease: "power2.out",
            });
          };

          card.addEventListener("mouseenter", onEnter);
          card.addEventListener("mouseleave", onLeave);

          return () => {
            card.removeEventListener("mouseenter", onEnter);
            card.removeEventListener("mouseleave", onLeave);
          };
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <>
     <Heading />
      {/* <Clock /> */}
    <section
      ref={containerRef}
      className="w-full bg-[#eaeaea] relative overflow-hidden text-[#1c1c1c]"
    >
  
      <div className="about-heading flex h-[38%] px-[7vw] justify-start  mt-[4.5vh]  ">
          <h1 className=' text-[30vw] font-bold font-[b] tracking-tight leading-[35vh] select-none' >
           <span className="about-word inline-block">a</span>
          <span className="about-word inline-block">b</span>
          <span className="about-word inline-block">o</span>
          <span className="about-word inline-block">u</span>
          <span className="about-word inline-block">t </span>
        </h1>
      </div>

      {/* ================= JOURNEY INTRO ================= */}

      <div className="journey-intro px-[7vw] pt-28 pb-32">
        <div className="flex flex-col md:flex-row justify-between gap-12">

          <div className="max-w-3xl">
            <p className="intro-label text-sm tracking-[0.3em] uppercase text-[#174d43] mb-8">
              / 01 — My Journey
            </p>

            <h2 className="intro-title text-[11vw] md:text-[6vw] font-bold leading-[0.95] tracking-tight">
              Every step
              <br />
              <span className="text-[#174d43]">
                made me better.
              </span>
            </h2>
          </div>

          <div className="intro-description flex flex-col justify-end max-w-sm">
            <div className="w-16 h-[2px] bg-[#174d43] mb-7" />

            <p className="text-lg text-gray-600 leading-relaxed">
              Every experience has shaped the developer I am
              today. Here's a glimpse into my journey,
              my learning and the milestones along the way.
            </p>
          </div>

        </div>
      </div>

      <div className="journey-list relative px-[7vw] pb-40">
        <div className="absolute left-[8vw] md:left-1/2 top-0 bottom-0 w-[1px] bg-black/15">
          <div className="journey-progress absolute top-0 left-0 w-full h-full bg-[#174d43] origin-top" />
        </div>
        <div className="flex flex-col gap-28 md:gap-40">
          {journeyData.map((item, index) => (
            <div
              key={item.number}
              className={`journey-card relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center ${
                index % 2 !== 0 ? "md:text-right" : ""
              }`}
            >
              <div className="journey-dot absolute left-[calc(1vw-7px)] md:left-[calc(50%-8px)] top-5 w-4 h-4 rounded-full bg-[#174d43] border-[4px] border-[#eaeaea] z-10 shadow-[0_0_0_5px_rgba(23,77,67,0.10)]" />
              <div
                className={`journey-year pl-[12vw] md:pl-0 ${
                  index % 2 !== 0 ? "md:order-2" : ""
                }`}
              >
                <span className="block text-[16vw] md:text-[9vw] font-bold leading-none tracking-[-0.08em] text-[#174d43]">
                  {item.year}
                </span>
              </div>
              <div
                className={`journey-content group pl-[12vw] md:pl-0 ${
                  index % 2 !== 0 ? "md:order-1" : ""
                }`}
              >
                <div className="border-t border-black/20 pt-7">
                  <div className={`flex items-center justify-between mb-8 ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}>
                    <span className="text-xs tracking-[0.2em] text-gray-500">
                      JOURNEY / {item.number}
                    </span>
                    <span className="text-xs px-4 py-2 rounded-full border border-[#174d43]/30 text-[#174d43]">
                      {item.tag}
                    </span>

                  </div>

                  <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 group-hover:text-[#174d43] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className={`text-base md:text-lg text-gray-600 leading-relaxed max-w-md ${
                    index % 2 !== 0 ? "md:ml-auto" : ""
                  }`}>
                    {item.description}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>

      <div className="final-section relative bg-[#174d43] text-[#eaeaea] px-[7vw] py-32 md:py-44 overflow-hidden">
        <div className="absolute right-[-10%] top-[-30%] w-[50vw] h-[50vw] rounded-full border border-white/10" />
        <div className="absolute right-[-5%] top-[-20%] w-[35vw] h-[35vw] rounded-full border border-white/10" />
        <div className="relative z-10">
          <p className="final-label text-sm tracking-[0.3em] uppercase text-white/60 mb-12">
            / 02 — What's Next?
          </p>
          <h2 className="final-heading text-[15vw] md:text-[10vw] font-bold leading-[0.85] tracking-[-0.07em] overflow-hidden">
            <span className="block">Still</span>
            <span className="block text-white/50">Becoming.</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-10 mt-20">
            <p className="text-lg md:text-xl text-white/65 leading-relaxed max-w-lg">
              The journey doesn't stop here. I'm always
              learning, experimenting and building
              something meaningful.
            </p>

            <span className="text-sm tracking-[0.2em] uppercase text-white/70">
              More to come <span className="text-white">↗</span>
            </span>

          </div>

        </div>
      </div>

    </section>
      </>
  );
};

export default About;
