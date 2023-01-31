import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import {RxLinkedinLogo} from 'react-icons/rx';



function Contact() {
    return ( <div id='contact' className='bg-gray-500 mt-10 pb-5'>
        <div className='px-5 mt-14 pt-6 lg:flex lg:justify-center md:gap-32 xl:gap-80 text-white'>
            <div className='pb-6 text-white'>
                <p className='font-bold text-lg pb-1'>Get in Touch: </p>
                <p className='font-bold text-md pb-1 pt-2'>Phone: </p>
                <p>085277032949</p>
                <p className='font-bold text-md pb-1 pt-2'>Email: </p>
                <p>johandaharris@gmail.com</p>
                <div className='flex gap-5 pt-5'>
                    <a className='text-xl' href="https://www.instagram.com/harrisjohanda/">
                        <BsInstagram />
                    </a>
                    <a className='text-xl' href="https://www.linkedin.com/in/muhammad-harris-johanda-1414901ab/">
                        <RxLinkedinLogo />
                    </a>
                    <a className='text-xl' href="https://wa.me/6285277032949">
                        <BsWhatsapp />
                    </a>
                </div>
            </div>
            <div>        
                <form>
                  <div className="pb-2">
                    <label for="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white  focus:border-white block w-full lg:w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white" placeholder="enter a valid email address" required />
                  </div>
                  <div class="pb-2">
                    <label for="text" className="block mb-2 text-sm font-medium text-white dark:text-white">Subject</label>
                    <input type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white  focus:border-white block w-full lg:w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white" placeholder="Let me know how i can help" required />
                  </div>
                  <div class="pt-2 pb-4">
                  <label for="message" className="block mb-2 text-sm font-medium text-white dark:text-white">Your message</label>
                    <textarea id="message" rows="4" className="block p-2.5 w-full lg:w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-white focus:border-white dark:bg-gray-100 dark:border-white dark:placeholder-gray-100 dark:text-white dark:focus:ring-white dark:focus:border-white " placeholder="Leave a comment..."></textarea>
                  </div>
                  <button type="submit" className="text-gray-500 bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-100 dark:hover:bg-white dark:focus:ring-white">Submit</button>
                </form>
            </div>
        </div>
    </div> );
}

export default Contact;