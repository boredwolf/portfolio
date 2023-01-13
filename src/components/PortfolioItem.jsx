import React from 'react';

const PortfolioItem = ({ title, imgUrl, stack, link }) => {
    return (
        <div className='border-2 border-stone-900 dark:border-white rounded-md overflow-hidden active:scale-[.97] active:duration-75 transition-all hover:scale-[1.07] z-50'>
            <a href={link} target="_blank">
                <img src={imgUrl} alt="portfolio" className='w-full h-36 md:h-48 object-cover cursor-pointer' />
            </a>
            <div className='w-full p-4'>
                <h3 className='text-lg dark:text-white md:text-xl mb-2 md:mb-3 font-semibold dark:text-white'>{title}</h3>
                <p className='flex flew-wrap gap-2 flex-row items-center-justify-start text-cs md:text-sm dark:text-white '>
                    {stack.map(item => (
                        <span className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white dark:text-white rounded-md'>
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
};

export default PortfolioItem;