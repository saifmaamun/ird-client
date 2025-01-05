import React from 'react';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import Navbar from '../Navbar/Navbar';
import RightSidebar from '../RightSidebar/RightSidebar';

const LayoutPage = () => {
    return (
        <div className='flex justify-center items-start p-4 bg-none space-x-4'>
            <LeftSidebar/>
            <Navbar/>
            <RightSidebar/>
            
        </div>
    );
};

export default LayoutPage;