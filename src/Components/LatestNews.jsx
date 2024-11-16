import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-2 items-center bg-[#F3F3F3] p-4'>
            <p className='bg-[#D72050] py-[9px] px-[25px] text-xl font-medium text-white'>Latest</p>
            <Marquee pauseOnHover={true} speed={70} className='space-x-10'>
                <Link to="/news" className='text-lg font-semibold text-[#403F3F]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </Link>

                <Link to="/news" className='text-lg font-semibold text-[#403F3F]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </Link>

                <Link to="/news" className='text-lg font-semibold text-[#403F3F]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;