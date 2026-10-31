import React from 'react'
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaArrowRight } from "react-icons/fa6";
import LocomotiveScroll from 'locomotive-scroll';
import Heading from './Heading';
import Clock from './Clock';
import { ProjectSection } from './ProjectSection';
import ContactSection from './ContactSection';
import About from './About';
import Form from '../pages/Form';

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 1 });

const HeroSection = () => {

  const locomotiveScroll = new LocomotiveScroll();
  const contactRef = useRef(null);
  const AboutRef = useRef(null);
  const FormRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tll = gsap.timeline({
        scrollTrigger: {
          trigger: AboutRef.current,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: true,
          pinSpacing: true,
          anticipatePin: 1,
          // markers: true,
        },
      });
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: FormRef.current,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: true,
          pinSpacing: true,
          anticipatePin: 1,
          // markers: true,
        },
      });


      tll.from(AboutRef.current, {
        xPercent: 100,
        ease: "power2.out",
      });
      tl.from(contactRef.current, {
        xPercent: -100,
        ease: "power2.out",
      })
      tl2.from(FormRef.current, {
        xPercent: 100,
        ease: "power2.out",
      })
    }, contactRef);

    return () => ctx.revert();
  }, []);



  return (
    <>
      <div className="relative w-full bg-[#eaeaea] text-zinc-800">
        <Heading />
        <Clock />
        <ProjectSection />


        <div
          className="current w-full min-h-screen mt-[4vh] overflow-visible"
          ref={AboutRef}>
          <About />
        </div>

        <div
          ref={contactRef}
          className="current w-full min-h-screen overflow-visible">
          <Form />
        </div>

        <div
          ref={FormRef}
          className="current w-full min-h-screen overflow-visible">
          <ContactSection />
        </div>


      </div>
    </>
  )
}

export default HeroSection