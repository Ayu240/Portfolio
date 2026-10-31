import React from 'react'
import { useState, useEffect } from 'react'
import NavbarPage from './NavbarPage';

const Heading = () => {
    const [isOpen, setisOpen] = useState(false);
    const handleClcik = () => {
        setisOpen(!isOpen)
    }
    
    useEffect(() => {
        if (isOpen) {
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = 'auto';
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.documentElement.style.overflow = 'auto';
            document.body.style.overflow = 'auto';
        }
    }, [isOpen])
    return (
        <>
            <div className="w-full h-[8vh] font-[b] flex justify-between items-center z-50 overflow-hidden bg-transparent fixed select-none ">  
                <div className="relative">
                    <h1 className='text-[3vw] text-[] leading-[2vh] lg:leading-[5vh] '>Ayush</h1> 
                </div>

                <button className='items-center' onClick={handleClcik}>
                    {isOpen ? (
                        <div className="flex w-[4vw] flex-col 
                        items-center justify-center h-[5vw]">
                            <div className="w-[6vw] h-[0.2vh] bg-zinc-800 -rotate-45"></div>
                            <div className="w-[6vw] h-[0.2vh] bg-zinc-800 rotate-45"></div>
                        </div>
                    ) : (
                        <div className="">
                            <div className="w-[3.5vw] bg-zinc-800 h-[0.1vh] mb-2 mx-2 "></div>
                            <div className="w-[2.5vw] bg-zinc-800 h-[0.1vh] mb-2  mx-2"></div>
                            <div className="w-[1vw] bg-zinc-800 h-[0.1vh] mb-2  mx-2"></div>

                        </div>
                    )}


                </button>
            </div>
            {isOpen && (<NavbarPage />)}
        </>
    )
}

export default Heading