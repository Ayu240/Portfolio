import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaArrowRight } from "react-icons/fa6";
gsap.registerPlugin(ScrollTrigger);

export const ProjectSection = () => {
  const [data] = useState([
    { id: 1, title: "frist", text: "Connect with MongoDB experts,." },
    { id: 2, title: "second", text: "for text" },
    { id: 3, title: "thrid", text: "3rd text" },
    { id: 4, title: "fourth", text: "4th text" },
    { id: 5, title: "fifth", text: "5th text" },
    { id: 6, title: "sixth", text: "6th text" },
  ]);

  useEffect(() => {

    gsap.from(".cards", {
      x: "101.5vw",
      opacity: 1,
      duration: 3,
      stagger: 0.25,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".cards",
        start: 'top 65%',
        end: "bottom 100%",
        scrub: true,
        toggleActions: "restart reverse play reverse",
      }
    });

    gsap.to(".text", {
      x: "-100vw",
      duration: 2.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".text",
        start: "top 70%",
        end: "bottom 48%",
        scrub: true,
        toggleActions: "restart pause resume pause",
      },
    });


  }, []);

  return (
    <div className='w-full h-screen bg-[#eaeaea] p-0.5 relative'>
      <div className="relative w-full h-[48vh] 
        flex items-center justify-end overflow-hidden scroll-smooth ">

        <h1 className="text top-[3vh] tracking-tight leading-none 
          text-center font-bold font-[b] -mx-[75.9vw] text-[48vh] select-none pb-[6vh] ">
          projects
        </h1>
      </div>

      <div className="relative w-full h-[55%] mt-[6vh] bg-[#eaeaea]
                flex flex-nowrap overflow-x-hidden overflow-y-hidden ">

        {data.map((item) => (
          <div key={item.id} className="cards shrink-0 min-w-[15.4vw] h-[44vh]
           bg-[#fafaf8] cursor-pointer flex flex-col rounded-md shadow-sm border border-zinc-200">

            <div className="relative w-[16vw] h-[47vh] overflow-hidden flex">
              <p className=" text-black font-[b] font-light p-2">
                {item.text}
              </p>
              <div className="absolute inset-0 flex justify-end">
                <h1 className="font-[b] font-bold text-[42vh] leading-none text-[#eaeaea] select-none">
                  {item.id}
                </h1>
              </div>
            </div>

            <div className="h-[8vh] w-[16.2vw] flex items-center 
              justify-between font-[b] bg-[#eaeaea] p-1 m-0.5 rounded-[5vw]">
              {item.title}
              <div className="w-8 h-8 flex items-center justify-center 
                -rotate-45 bg-zinc-900/15 rounded-full">
                <FaArrowRight />
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
