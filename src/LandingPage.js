import React from 'react';

const LandingPage = () => {
    return (<>
        <div className='md:h-screen py-16 bg-[#1c344c]'>
            <div className='flex flex-col lg:flex-row justify-center items-center h-full w-2/3 mx-auto'>

                <div className='flex flex-col md:w-2/3 md:mb-0 mb-10'>
                    <h1 style={{ fontFamily: " 'Bebas Neue', cursive " }} className='text-white sm:text-7xl text-5xl font-semibold mb-12'>Hello, we are
                        <br /><span className='sm:text-8xl text-6xl'><span className='text-[#55a7f0] border-b-4 border-[#55a7f0]'>tutor</span>reactive</span>
                    </h1>
                    <p style={{ fontFamily: "'Open Sans', sans-serif" }} className='text-white text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis unde consectetur magni reiciendis tempora itaque ab tempore harum officia</p>
                    <button className='uppercase w-fit self-center bg-[#45a3f5] hover:bg-[#1d84df] transition-all text-white font-semibold text-xl py-2 px-8 rounded-2xl mt-8 shadow-lg shadow-gray-900'>explore courses</button>
                </div>

                <div className='md:w-1/2'>
                    <div>
                        <img src='./RobotImg.svg' class="object-cover" alt='Robot' />
                    </div>
                </div>

            </div>
        </div>
    </>);
}

export default LandingPage;