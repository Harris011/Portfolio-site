import React from 'react';
import base from '../image/base.png';
import portfolioimg from '../image/portfolioimg.PNG'

function Project() {
    return ( 
    <div className='mt-20 pt-10 pb-10'>
        <div className='text-center lg:text-center'>
            <h2 className='font-bold text-xl  pb-8'>PORTOFOLIO</h2>
        </div>
        <div className='md:flex xl:justify-evenly md:gap-10'>
            <div className="mb-8 max-w-sm bg-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg p-4" src={portfolioimg} alt="..." />
                </a>
                <div className="p-5 w-80">
                    <a href="https://harrisjohanda-portfolio.netlify.app/">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Portfolio</h5>
                    </a>
                    <p className="mb-3 font-normal text-white dark:text-gray-400">The Portfolio project is built using CRA React.js, Tailwind CSS, Flowbite, and React Icons. CRA React.js is used for creating separate components, Tailwind CSS and Flowbite are used for design and layout, and React Icons provide a library of icons.</p>
                </div>
            </div>
            <div className="mb-8 max-w-sm bg-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={base} alt="..." />
                </a>
                <div className="p-5 w-80">
                    <a href="">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Project Title</h5>
                    </a>
                    <p className="mb-3 font-normal text-white dark:text-gray-400">This description related to the project intended, and serves to provide an overview of the various modules and elements utilized during its development.</p>
                </div>
            </div>
            <div className="mb-8 max-w-sm bg-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={base} alt="..." />
                </a>
                <div className="p-5 w-80">
                    <a href="">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Project Title</h5>
                    </a>
                    <p className="mb-3 font-normal text-white dark:text-gray-400">This description related to the project intended, and serves to provide an overview of the various modules and elements utilized during its development.</p>
                </div>
            </div>
        </div>
    </div>
);
}

export default Project;