import React from 'react';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import Navbar from '../Navbar/Navbar';
import RightSidebar from '../RightSidebar/RightSidebar';

const LayoutPage = () => {
    return (
        <div className='flex justify-center items-start px-4 my-4 space-x-4'>
            <LeftSidebar/>
            <Navbar/>
            <RightSidebar/>
            
        </div>
    );
};

export default LayoutPage;