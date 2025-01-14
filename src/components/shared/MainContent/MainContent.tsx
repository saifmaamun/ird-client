
import { getDuas } from '@/actions/get-duas';
import Navbar from '../Navbar/Navbar';
import Content from '@/components/Content/Content';

const MainContent = async() => {
    const duas = await getDuas()
    // console.log(duas)
    return (
        <div className='flex flex-col justify-center items-center w-full p-4 bg-none space-x-4'>
        <Navbar/>
        <Content categories={duas}/>
        {/* <Content/> */}
        
    </div>
    );
};

export default MainContent;