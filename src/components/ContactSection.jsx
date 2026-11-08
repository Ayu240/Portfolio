import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GoArrowRight } from "react-icons/go";

const ContactSection = () => {
    const rowdata = [{
        id: 1,
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/its-me-ayush/'
    },
    {
        id: 2,
        name: 'github',
        link: 'https://github.com/Ayu240'
    },
    {
        id: 3,
        name: 'leetcode',
        link: 'https://leetcode.com/u/Ayush_255/'
    },
    {
        id: 4,
        name: 'mail',
        link: 'mailto:av609497@gmail.com'
    }]

    const [data, setData] = useState(rowdata);
    const [formData, setFromData] = useState({ name: "", contact: "", address: "" })
    const [users, setUsers] = useState([])
    const [showUsers, setShowUsers] = useState(false)

    const handleOnClick = ((link, e) => {
        window.open(link, "_blank", "noopener,noreferrer");
        e.preventDefault()
    });



    return (
        <div className='flex flex-col w-full h-screen font-[b] bg-[#eaeaea] relative overflow-auto scroll-smooth'>
            <div className=" w-full h-[45.5vh]  flex flex-col leading-none ">

                <div className="w-full flex flex-col justify-center h-[46]">
                    <h1 className='-mt-[5.5vh] text-[24vw] font-bold  tracking-tight leading-none select-none' >
                        contactUs
                    </h1>

                    <p className='text-md -mt-[3.5vh] font-[b] text-end mr-[5vw]'> got a project in your mind <br /> </p>
                    {/* <p className='text-md -mt-[3.5vh] font-[b] text-end mr-[5vw]'> any questions or throught? ideas Or maybe you just want to say hi? <br /> </p> */}
                </div>
            </div>

            <div className="p-4 flex justify-between  w-1/2 h-full font-[a] ">

                {data.map((items) => {
                    return (
                        <button
                            type="button"
                            key={items.id}
                            onClick={() => handleOnClick(items.link)}
                            className="group bg-white p-1 w-[7.8vw] h-[5vh] rounded-[3vw] flex items-center justify-between cursor-pointer"
                        >
                            <h1 className=" text-[1.2vw] font-[b]">{items.name}</h1>

                            <div
                                className="
                                    w-2 h-2
                                    rounded-full
                                    bg-black
                                    flex items-center justify-center
                                    transition-all duration-300
                                    group-hover:w-[2vw]
                                    group-hover:h-[2vw] overflow-hidden">
                                <div className="group-hover:text-white text-black -rotate-45">
                                    <GoArrowRight />
                                </div>
                            </div>
                        </button>
                    )
                })}

            </div>

        </div>
    )
}


export default ContactSection