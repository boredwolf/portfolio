import React from 'react';
import { useContext } from 'react';
import appContext from '../Context';
import timeline from '../data/timeline';
import timelineFR from '../data/timelineFR';
import TimelineItem from './TimelineItem.jsx';
import Title from './Title';

const Timeline = () => {

    const { language } = useContext(appContext)

    const timeLineItems = language === "FR" ? timelineFR : timeline

    return (
        <div className='flex flex-col md:flex-row justify-center my-20 '>
            <div className='w-full md:w-7/12'>
                <Title>{language === "FR" ? "Chronologie" : "Timeline"}</Title>
                {timeLineItems.map(item => (
                    <TimelineItem year={item.year} title={item.title} duration={item.duration} details={item.details} />
                ))}
            </div>
        </div>
    );
};

export default Timeline;