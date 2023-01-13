import React from 'react';
import { useContext } from 'react';
import appContext from '../Context';

const Footer = () => {
    const { language } = useContext(appContext)

    return (
        <div className='py-5 text-center'>
            {/* social icons */}
            <p className='text-sm mt-2 text-black'>
                &copy; {new Date().getFullYear()} Félix Jouvhomme. {language === "FR" ? "Tous droits réservés." : "All rights reserved."}
            </p>
        </div>
    );
};

export default Footer;