import React from 'react';
import Title from './Title';

const Contact = () => {
    return (
        <div className='flex flex-col mb-10 mx-auto'>
            <div className='flex justify-center items-center'>
                <form
                    action="https://getform.io/f/91efeb38-2515-48cc-822d-30b736f4f341"
                    method="POST"
                    className='flex flex-col w-full md:w-7/12'
                >
                    <Title>Contact</Title>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        cold="30"
                        rows="10"
                        className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md active:scale-[.97] active:duration-75 transition-all hover:scale-[1.02]"
                    >
                        Work With Me
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;