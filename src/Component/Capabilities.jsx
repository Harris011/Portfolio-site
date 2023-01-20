import React from 'react';
import autocad from '../image/autocad.png';
import html5 from '../image/html5.png';
import css from '../image/css.png';
import js from '../image/js.png';
import javascript from '../image/javascript.png'



function Capabilities() {
    return ( <div className='bg-gray-500 mt-20 pt-10'>
        <div className='ml-20 lg:text-center mr-10'>
            <h2 className='font-bold text-xl text-white pb-8'>SKILLS</h2>
        </div>
        <div className='lg:flex gap-8 mx-20 pt-5 pb-20'>
            <div className='relative mx-auto text-center shadow-gray-900 bg-white shadow-lg mb-4 rounded-full w-40 h-40 overflow-hidden'>
                <img className='pt-7 pl-2' src={autocad} alt="" />
                <h3 className='pt-1'>AutoCad</h3>
            </div>
            <div className='relative mx-auto text-center shadow-gray-900 bg-white shadow-lg mb-4 rounded-full w-40 h-40 overflow-hidden'>
                <img src={html5} alt="" />
            </div>
            <div className='relative mx-auto text-center shadow-gray-900 bg-white shadow-lg mb-4 rounded-full w-40 h-40 overflow-hidden'>
                <img className='px-6' src={css} alt="" />
            </div>
            <div className='relative mx-auto text-center shadow-gray-900 bg-white shadow-lg mb-4 rounded-full w-40 h-40 overflow-hidden'>
                <img className='px-1' src={javascript} alt="" />
            </div>
        </div>
    </div> );
}

export default Capabilities;