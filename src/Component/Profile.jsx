import React from 'react';
import Haris from '../image/Haris.JPG'

function Profile() {
    return ( <div id='profile' className='py-12 px-1 lg:py-20'>
        <div className='lg:text-center'>
            <h2 className='font-bold text-xl lg:pb-5'>PROFILE</h2>
            {/* <p className='text-lg'>I'm a Web Developer</p> */}
        </div>
        <div className='lg:flex lg:items-top md:px-12 md:gap-x-2 xl:px-40'>
            <div className='w-auto pb-10 lg:p-12 lg:shadow-xl lg:rounded-lg'>
                <h3 className='font-bold text-lg pt-6 pb-2'>About me</h3>
                <p className='w-60'>I am Harris Johanda, an Electrical Engineering graduate from the University of North Sumatera. Currently, I am studying Full Stack Web Development at Purwadhika Digital School Technology to expand my skillset.</p>
            </div>
            <div className='relative shadow-lg ring-offset-2 ring ring-gray-400 mx-auto bg-gradient-to-b from-gray-800 rounded-full w-64 h-64 overflow-hidden md:visible lg:invisible xl:invisible'>
                <img src={Haris} alt="..." />
            </div>
            <div className='pt-10 lg:shadow-xl lg:p-12 lg:rounded-lg'>
                <h3 className='font-bold text-lg'>Details</h3>
                <p className='font-bold pt-3 pb-1'>Name: </p>
                <p>Muhammad Harris Johanda</p>
                <p className='font-bold text-lg pt-3 pb-1'>Education: </p>
                <p className='font-medium'>University of North Sumatera</p>
                <p className='w-60 font-light'>Bachelor of Electrical Engineering (2011 - 2017)</p>
                <p className='font-bold text-lg pb-1 pt-3'>Location: </p>
                <p>Jakarta, Indonesia</p>
            </div>
        </div>
    </div>);
}

export default Profile;