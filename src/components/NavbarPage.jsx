import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useEffect, useState } from 'react'

const NavbarPage = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const proRef = useRef(null);
  const contRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(homeRef.current,{x:"100vw"}, {
      x: '-89vw',
      duration: 2,
      ease: 'power2.inOut',
      delay: 0.2,
    })
      .to(homeRef.current, {
        x: '59.2vw', 
        duration: 0.5,
        ease: 'power2.inOut',
      });

    gsap.to(aboutRef.current,{
      x: '58vw',
      duration: 1,
      ease: "power2.inOut",
    })
    gsap.to(proRef.current, {
      x: '-78vw',
      duration: 0.9,
      ease: "power3.inOut",
      deylay: 0.2
    })
    gsap.to(contRef.current, {
      x: '-54vw',
      duration: 1,
      ease: "power2.inOut",
      delay: 0.2
    })

  }, [])
  return (
    <div className='bg-[#eaeaea] w-full h-screen text-zinc-800 fixed top-0 left-0 z-40 overflow-hidden'>

      <div className="overflow-hidden w-full h-screen font-[b] flex flex-col 
      lg:text-[16.5vw] text-[28vh]
      lg:leading-[12vw] leading-[22vh]"
      >
        <Link ref={homeRef} className=" font-extrabold " to='/'>home</Link>
        <Link ref={aboutRef} className=" font-extrabold mr-[42vw]" to='/about'>about</Link>
        <Link ref={proRef} className=" font-extrabold ml-[120vw] text-end" to='/project'>projects</Link>
        <Link ref={contRef} className=" font-extrabold ml-[100vw]" to='/contact'>contact</Link>
      </div>
    </div>
  )
}

export default NavbarPage