import LeftSidebar from "@/components/shared/LeftSidebar/LeftSidebar";
import MainContent from "@/components/shared/MainContent/MainContent";
// import Navbar from "@/components/shared/Navbar/Navbar";
import RightSidebar from "@/components/shared/RightSidebar/RightSidebar";

export default function Home() {
  return (
    <div className='flex justify-center items-start p-4 bg-none space-x-4'>
            <LeftSidebar/>
            <MainContent/>
            <RightSidebar/>
            
        </div>
    
  );
}
