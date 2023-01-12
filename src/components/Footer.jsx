import React from 'react';

const Footer = () => {
    return (
        <div className='py-5 text-center'>
            {/* social icons */}
            <p className='text-sm mt-2 opacity-50'>
                &copy; {new Date().getFullYear()} Félix Jouvhomme. All rights reserved.
            </p>
        </div>
    );
};

export default Footer;