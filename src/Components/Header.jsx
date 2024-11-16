import React from 'react';
import logo from "../assets/logo.png"
import moment from 'moment';

const Header = () => {
    return (
        <div className='w-10/12  flex  flex-col justify-center items-center gap-3 py-5 mx-auto'>
            <div className='w-full' >
                <img className='w-1/3 mx-auto' src={logo} alt="" />
            </div>
            <h2 className='text-lg text-[#706F6F]'>Journalism Without Fear or Favour</h2>
            <p className='text-xl text-[#706F6F] font-medium'><span className='text-[#403F3F]'>{moment().format("dddd")}</span>{moment().format(" MMMM Do YYYY")}</p>
            
        </div>
    );
};

export default Header;