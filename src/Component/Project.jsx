import React from 'react';
import base from '../image/base.png';

function Project() {
    return ( 
    <div className='mt-20 pt-10'>
        <div className='ml-20 lg:text-center mr-10'>
            <h2 className='font-bold text-xl  pb-8'>PORTOFOLIO</h2>
        </div>
        <div className='lg:flex justify-evenly gap-8'>
            <div className='my-6 shadow-2xl bg-gray-500 p-3 rounded-xl'>
                <img className='w-auto h-auto' src={base} alt="" />
                <div className='text-justify text-white p-4'>
                    <h3>title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aliquam a necessitatibus perferendis error, similique consectetur culpa pariatur aspernatur provident. Debitis perferendis non exercitationem expedita tenetur iure nostrum? Ea, pariatur?</p>
                </div>
            </div>
            <div className='my-6 shadow-2xl bg-gray-500 p-3 rounded-xl '>
                <img className='w-auto h-auto' src={base} alt="" />
                <div className='text-justify text-white p-4'>
                    <h3>title</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim laboriosam, omnis aliquam sapiente maiores non esse impedit velit quam neque nesciunt amet facere beatae quidem? Doloremque architecto quos illum? Ducimus?</p>
                </div>
            </div>
            <div className='my-6 shadow-2xl bg-gray-500 p-3 rounded-xl'>
                <img src={base} alt="" />
                <div className='text-justify text-white p-4'>
                    <h3>title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aliquam a necessitatibus perferendis error, similique consectetur culpa pariatur aspernatur provident. Debitis perferendis non exercitationem expedita tenetur iure nostrum? Ea, pariatur?</p>
                </div>
            </div>
            <div className='my-6 shadow-2xl bg-gray-500 p-3 rounded-xl'>
                <img src={base} alt="" />
                <div className='text-justify text-white p-4'>
                    <h3>title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis tempore cupiditate omnis asperiores, dolorem accusantium hic, ad, quas officiis dolorum minus ipsum voluptas consequuntur assumenda veniam corporis iusto a at?</p>
                </div>
            </div>
        </div>
    </div>
);
}

export default Project;