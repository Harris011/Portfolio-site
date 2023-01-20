import React from 'react';
import Haris from '../image/Haris.JPG'

function Profile() {
    return ( <div id='profile'>
        <div className='ml-28 lg:text-center mr-10'>
            <h2 className='font-bold text-xl pt-20 pb-2'>PROFILE</h2>
            {/* <p className='text-lg'>I'm a Web Developer</p> */}
        </div>
        <div className='mt-14 lg:flex items-center mx-28 pb-24'>
            <div className='w-auto pb-10'>
                <h3 className='font-bold text-lg pb-4'>About me</h3>
                <p className='w-60'>I'm an Electrical Engineering graduate, right now i'm study Web Development at Purwadhika Digital Technology School.</p>
            </div>
            <div className='relative shadow-lg ring-2 ring-gray-200 mx-auto bg-gradient-to-b from-gray-800 rounded-full w-64 h-64 overflow-hidden'>
                <img src={Haris} alt="..." />
            </div>
            <div>
                <h3 className='font-bold text-lg pb-2 pt-8'>Details</h3>
                <p className='font-bold pb-2'>Name: </p>
                <p>Muhammad Harris Johanda</p>
                <p className='font-bold text-lg pb-2 pt-2'>Age: </p>
                <p>30 years</p>
                <p className='font-bold text-lg pb-2 pt-2'>Location: </p>
                <p>Jakarta, Indonesia</p>
            </div>
        </div>
    </div>);
}

export default Profile;