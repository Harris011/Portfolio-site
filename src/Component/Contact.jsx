import React from 'react';
import { BsInstagram } from 'react-icons/bs'
import {RxLinkedinLogo} from 'react-icons/rx'


function Contact() {
    return ( <div id='contact' className='bg-gray-500 mt-36'>
        {/* <h1>get</h1> */}
        <div className='mt-14 pt-6 lg:flex justify-between mx-20 text-white'>
            <div className='w-auto pb-8'>
                <h3 className='font-bold text-lg pb-4'>Get in Touch</h3>
                <p className='w-60 text-lg'>"I am looking forward to start a project with you!"</p>
                <p className='w-60'>Feel free to get in touch with me. i am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                <div className='flex pt-2'>
                    <BsInstagram className='mr-2' />
                    <RxLinkedinLogo />
                </div>
            </div>
            <div className='pb-6 text-white'>
                <p className='font-bold pb-1'>Call Me: </p>
                <p>085277032949</p>
                <p className='font-bold text-lg pb-1 pt-2'>Location: </p>
                <p>Jakarta, Indonesia</p>
                <p className='font-bold text-lg pb-1 pt-2'>My Service: </p>
                <p>Development</p>
            </div>
            <div>
                <form>
                    <div className='pb-10'>
                        <div>
                            <input type="text" name="" id="" className='w-full' placeholder="Enter your Name" />
                        </div>
                        <div>
                            <input type="email" name="" id="" className='w-full' placeholder="Enter a valid email address" />
                        </div>
                        <div>
                            <textarea name="" id="" rows="5" className='w-full'></textarea>
                        </div>
                        <div className='mt-2'>
                            <button type="submit" className='bg-white text-black p-2 hover:bg-gray-200'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div> );
}

export default Contact;