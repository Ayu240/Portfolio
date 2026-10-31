import React, { useEffect, useState } from 'react'

const Clock = () => {
  const [time, setTime] = useState(new Date());
  

  return (
    <div className='relative bg-[#eaeaea] text-black w-full h-screen select-none'>
      <div className="absolute w-full h-screen flex justify-center items-center flex-col">
        <div className="font-[b] text-white text-[38vw] flex items-center justify-center fixed">

          {time.getHours().toString().padStart(2, '0')}:
          {time.getMinutes().toString().padStart(2, '0')}

        </div>
      </div>


    </div>
  )
}

export default Clock