import React from 'react';
import Navbar from '../Navbar/Navbar';
import Content from '@/components/Content/Content';

const MainContent = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full p-4 bg-none space-x-4'>
        <Navbar/>
        <Content/>
        
    </div>
    );
};

export default MainContent;