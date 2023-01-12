import React from 'react';

const Intro = () => {
    return (
        <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
            <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold dark:text-white'>Jouvhomme Félix</h1>
            <p className='text-base md:text-xl mb-3 font-medium'>Software Engineer & Web Developer</p>
            <p className='text-sm max-w-xl mb-6 font-bold'>Passionné du web et des jeux videos depuis toujours, j'ai appris le développement web et je suis impatient d'aborder de nouvelles technologies pour en explorer les possibilités et monter en compétences.
                < br />Curieux, empathique et déterminé, je saurai m'intégrer à une équipe et contribuer à la réussite des projets auxquels je participerai.</p>
        </div>
    );
};

export default Intro;