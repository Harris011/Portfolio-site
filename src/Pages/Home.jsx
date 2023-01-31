import React from 'react';
import Navbar from '../Component/Navbar';
import Banner from '../Component/Banner';
import Profile from '../Component/Profile';
import Footer from '../Component/Footer';
import Capabilities from '../Component/Capabilities';
import Project from '../Component/Project';
import Contact from '../Component/Contact';

function Home() {
    return ( <div className='bg-gray px-10 lg:px-28'>
        <div className='min-h-screen'>
            <Navbar />
            <Banner />
            <Profile />
            <Capabilities />
            <Project />
            <Contact />
            <Footer />
        </div>
    </div> );
}

export default Home;