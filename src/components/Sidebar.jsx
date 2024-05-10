import Link from 'next/link';
import React from 'react';
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";

const Sidebar = () => {
    return (
        <div className='flex flex-col gap-4 p-3'>
            <h1>Sidebar</h1>
            <Link href='/'>
           
            <FaSquareXTwitter className='w-16 h-16 cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200'></FaSquareXTwitter>
            
            </Link>
            <Link href='/' className='flex items-center cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200 gap-2 w-fit'>
            <HiHome className='w-7 h-7'>
            </HiHome>
            <span className='font-bold hidden xl:inline'>Home</span>
            </Link>
            <button className='bg-blue-500 font-bold text-white rounded-full px-4 py-2 mt-4 hover:bg-blue-700 transition-all duration-200 w-48 h-9 shadow-md hidden xl:inline'>Sign In</button>

        </div>
    );
};

export default Sidebar;