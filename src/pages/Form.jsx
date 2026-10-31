import React, { useEffect, useState } from 'react'
import { MdArrowOutward } from 'react-icons/md'

const Form = () => {
  const [formData, setFormData] = useState({ name: "", contact: "", address: "" })
  const [users, setUsers] = useState([])
  const [showUsers, setShowUsers] = useState(false)

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value
    }))
  }

  const submitHandle = (e) => {
    e.preventDefault();
    console.log(formData);

    setUsers((previousUser) => [
      ...previousUser, {
        id: Date.now(),
        ...formData
      }
    ]);

    setFormData({
      name: "",
      contact: "",
      address: ""
    })
  };

  let fristpro = new Promise((res, rej) => {
    setTimeout(function myName() {
      console.log("myname is ayush")
    }, 10000)
    res(1)

  })


  let promise = new Promise((res, rej) => {
    let success = true;
    if (success) {
      res("fullfilled");
    } else {
      rej("reject")
    }
  });

  promise.then((message)=>{
    console.log("the ka msg is "+message);

  }).catch((err)=>{
    console.log("msg ka error "+err)
  })

  let promise1=new Promise((res,rej)=>{
    setTimeout(res,100,"frist");
  })

  let promise2=new Promise((res,rej)=>{
    setTimeout(res,100,"frist2");
  })

  let promise3=new Promise((res,rej)=>{
    setTimeout(res,100,"frist3");
  })
  Promise.all([ promise1,promise2,promise3 ,promise ,fristpro]).then((value)=>{
    console.log(value).catch((err)=>{
      console.log(err)
    })
  })




  // useEffect(() => {
  //   if (users.length === 0) {
  //     setShowUsers(false);
  //     return;
  //   }

  //   setShowUsers(true);
  //   const timer = setTimeout(() => setShowUsers(false), 10000);

  //   return () => clearTimeout(timer);
  // }, [users]);

  return (
    <div className='flex flex-col w-full h-screen font-[b] bg-[#eaeaea] relative overflow-hidden scroll-smooth'>
      {/* Header Section */}
      <div className="w-full h-[45.5vh] flex flex-col leading-none">
        <div className="w-full flex flex-col justify-center h-[46]">
          <h1 className='-mt-[5.5vh] text-[22vw] font-bold tracking-tight leading-none select-none'>
            getInTouch
          </h1>
          <p className='text-md -mt-[3.5vh] font-[b] text-end mr-[5vw]'>
            drop your details
          </p>
        </div>
      </div>

      {/* Form and Submissions Container */}
      <div className="w-full flex gap-8 px-8 pb-8 h-full overflow-auto">

        {/* Form Section - Left Side */}
        <div className="w-1/2 flex flex-col">
          <form onSubmit={submitHandle} className='space-y-6'>

            {/* Name Input */}
            <div className='flex flex-col gap-2 mt-[5vh]'>
              <label className='text-lg font-[b] font-semibold'>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleOnChange}
                // required
                placeholder='Enter your name'
                className='bg-white text-zinc-800 border-none rounded-xl p-2 text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-800 transition-all'
              />
            </div>

            {/* Contact Input */}
            <div className='flex flex-col gap-3'>
              <label className='text-lg font-[b] font-semibold'>Contact</label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleOnChange}
                // required
                placeholder='Enter your phone number'
                className='bg-white text-zinc-800 border-none rounded-xl p-2 text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-800 transition-all'
              />
            </div>

            {/* Address Input */}
            <div className='flex flex-col gap-3'>
              <label className='text-lg font-[b] font-semibold'>Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleOnChange}
                // required
                placeholder='Enter your address'
                rows='2'
                className='bg-white text-zinc-800 border-none rounded-xl p-4 text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-800 transition-all resize-none'
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className='group bg-zinc-800 text-white font-[b] font-semibold text-lg px-8 py-4 rounded-xl hover:bg-zinc-900 transition-all duration-300 flex items-center justify-between w-full'
            >
              <span>Submit</span>
              <MdArrowOutward className='group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform' size={20} />
            </button>
          </form>
        </div>

        {/* Submissions Section - Right Side */}
        <div className="w-1/2 flex ">
          {/* {showUsers && users.length > 0 && ( */}
          <h2 className='text-2xl font-[b] font-bold mb-4'>Recent Submissions</h2>
          <div className='space-y-4 overflow-y-auto pr-4 flex '>
            {users.map((user) => (
              <div
                key={user.id}
                className='bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300'
              >
                <div className='space-y-3 gap-2'>
                  <div className='flex gap-2 items-center'>
                    <p className='text-sm text-zinc-500 font-[b]'>NAME</p>
                    <h3 className='text-lg font-[b] font-semibold text-zinc-800'>
                      {user.name}
                    </h3>
                  </div>
                  <div className='flex items-center gap-2'>
                    <p className='text-sm text-zinc-500 font-[b]'>CONTACT</p>
                    <p className='text-base font-[b] text-zinc-800'>
                      {user.contact}
                    </p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <p className='text-sm text-zinc-500 font-[b]'>ADDRESS</p>
                    <p className='text-base font-[b] text-zinc-800 break-words'>
                      {user.address}
                    </p>
                  </div>
                  <p className='text-xs text-zinc-400 pt-1 border-t border-zinc-200'>
                    {new Date(user.id).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* )} */}
        </div>
      </div>
    </div>
  )
}

export default Form