import React from 'react';
import { useContext } from 'react';
import appContext from '../Context';


const Intro = () => {

    const { language } = useContext(appContext)


    return (
        <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
            <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold dark:text-white mt-16'>Jouvhomme Félix</h1>
            <p className='text-base md:text-xl mb-3 font-medium'>{language === "FR" ? "Développeur web" : "Web Developer"}</p>
            {language === "FR" ? (<p className='text-sm max-w-xl mb-6 font-bold'>
                Je suis un développeur web passionné et toujours à la recherche de nouvelles technologies pour en explorer les possibilités et monter en compétences.
                <br /> Je travaille actuellement sur une application web en tant que développeur front-end avec React et Typescript. Curieux, empathique et soucieux du détail, je sais m'intégrer à une équipe et participer à sa réussite.
            </p>) : (<p className='text-sm max-w-xl mb-6 font-bold'>I'm a passionate web developer always looking to explore and learn new technologies. I'm currently working on a web app as a front-end developer with React and Typescript. Curious, empathic and solicitous about details, i know how to be part of a team and contribute to its success. </p>)}



        </div >
    );
};

export default Intro;