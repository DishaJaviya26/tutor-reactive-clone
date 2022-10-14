import React from 'react';

const JoinUs = () => {
    return (<>
        <div className='lg:h-screen bg-[#1c344c] py-14' style={{ fontFamily: "'Open Sans', sans-serif" }}>
            <div className='flex flex-col lg:flex-row justify-center items-center h-full w-4/5 mx-auto'>

                <div className='lg:w-1/2 md:w-2/3  lg:pr-20 mb-8'>
                    <h1 style={{ fontFamily: " 'Bebas Neue', cursive " }} className='text-white sm:text-5xl text-3xl font-semibold mb-4'>
                        <span className='text-[#55a7f0]'>tutor</span>reactive
                    </h1>

                    <p className='text-white leading-7 mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, sed. Magnam reiciendis odit beatae fuga vitae consectetur labore, itaque odio</p>
                    <hr className='w-20 border-b-4 border-[#55a7f0]' />

                    <div className='my-8'>
                        <h2 className='uppercase font-semibold text-white my-4 text-lg'>our location</h2>
                        <p className='my-2 text-white'><span className='text-[#55a7f0] uppercase'>Address: </span>Lorem ipsum, dolor sit amet consectetur adipisicing Maiores, illo</p>
                        <p className='my-2 text-white'><span className='text-[#55a7f0] uppercase'>Phone: </span>+91 837564738</p>
                        <p className='my-2 text-white'><span className='text-[#55a7f0] uppercase'>Email: </span>info@tutorreactive.com</p>
                    </div>

                    <hr className='w-20 border-b-4 border-[#55a7f0] mb-8' />
                    <p className='my-2 text-white uppercase tracking-wide'>Let's Learn Something New</p>
                </div>

                <div className='lg:w-1/2 md:w-2/3 bg-white md:px-12 px-6 py-4 rounded-xl shadow-lg shadow-gray-900'>
                    <h1 className='sm:text-5xl text-3xl mb-4 text-[#2088e2] font-black'>Join Us</h1>
                    <hr className='w-14 border-b-4 border-[#2088e2] mb-4' />
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, numquam!</p>

                    <form className='my-4 flex flex-col'>
                        <label htmlFor="name" className='font-semibold text-gray-800 text-sm'>Name</label>
                        <div className='flex mb-1'>
                            <input type="text" placeholder='First' className='border-2 border-gray-400 w-1/2 rounded-lg p-1 outline-none mr-2' />
                            <input type="text" placeholder='Last' className='border-2 border-gray-400 w-1/2 rounded-lg p-1 outline-none ' />
                        </div>

                        <label htmlFor="name" className='font-semibold text-gray-800 text-sm'>Create A Password</label>
                        <input type="text" className='border-2 border-gray-400 w-full rounded-lg p-1 outline-none mb-1' />

                        <label htmlFor="name" className='font-semibold text-gray-800 text-sm'>Confirm Password</label>
                        <input type="text" className='border-2 border-gray-400 w-full rounded-lg p-1 outline-none mb-1' />

                        <label htmlFor="name" className='font-semibold text-gray-800 text-sm'>Gender</label>
                        <input type="text" className='border-2 border-gray-400 w-full rounded-lg p-1 outline-none mb-1' />

                        <label htmlFor="name" className='font-semibold text-gray-800 text-sm'>Email</label>
                        <input type="text" className='border-2 border-gray-400 w-full rounded-lg p-1 outline-none mb-1' />

                        <label htmlFor="name" className='font-semibold text-gray-800 text-sm'>Mobile</label>
                        <input type="text" className='border-2 border-gray-400 w-full rounded-lg p-1 outline-none' />

                        <button className='bg-[#2088e2] shadow-lg shadow-gray-500 text-white py-1 px-14 rounded-md uppercase font-bold tracking-wide mt-4 w-48 self-end hover:bg-[#1a73c2]'>Register</button>
                    </form>
                </div>
            </div>
        </div>
    </>);
}

export default JoinUs;