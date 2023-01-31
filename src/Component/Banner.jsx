import React from "react";
import Haris from '../image/Haris.JPG'

function Banner() {
    return ( <div className="box-border bg-gradient-to-tr from-gray-200 via-gray-500 to-gray-800 w-full h-72 lg:h-128">
        <div className="container relative">
            <div className="invisible lg:visible xl:visible md:absolute md:inset-y-32 md:left-20 lg:absolute lg:inset-y-32 xl:left-40">
                <div className='relative shadow-lg ring-offset-2 ring ring-white mx-auto bg-gradient-to-b from-white rounded-full md:w-64 md:h-64 xl:w-72 xl:h-72 overflow-hidden'>
                    <img src={Haris} alt="..." />
                </div>
            </div>
            <div className="absolute inset-y-20 px-12 items-center lg:inset-y-48 md:right-1 xl:right-5">
                <div className="text-lg text-white font-medium md:text-3xl xl:text-4xl">
                    <h3>Hello !</h3>
                    <h3>I'm Harris Johanda,</h3>
                    <div className="md:w-96 lg:w-96">
                        <h3>a Web Development Student</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
)};

export default Banner;