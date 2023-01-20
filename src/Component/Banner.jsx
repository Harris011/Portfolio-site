import React from "react";

function Banner() {
    return ( <div className="box-border bg-gradient-to-tr from-gray-200 via-gray-500 to-gray-800 w-full h-72 lg:h-128">
        <div className="container relative">
            {/* <img className="blur-sm lg:blur-none m-auto" src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="home" /> */}
            <div className="absolute inset-y-16 right-20 items-center lg:inset-y-44">
                <div className="text-3xl text-white font-medium lg:text-4xl">
                    <h3>Hello !</h3>
                    <h3>I'm Harris Johanda,</h3>
                    <h3>a Web Developer</h3>
                </div>
                <div className="mt-4 text-white bg-gray-600 w-fit p-2 rounded-sm hover:bg-gray-500">
                    <a href="">Read More</a>
                </div>
            </div>
        </div>

</div> );
}

export default Banner;