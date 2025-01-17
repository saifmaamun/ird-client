import Image from "next/image";
import Link from "next/link";
import userIcon from "../../../assets/user-icon.png";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full  mb-4">
      <div className="flex-1">
        <Link href="/">
          
          <h1 className="text-2xl font-semibold">Dua Page</h1>
        </Link>
      </div>
      <div className="md:flex justify-center items-center gap-2 hidden">
        
        
        <Input className="bg-white border-none " type="text" placeholder="Search By Dua Name" />
        
        <div className="dropdown dropdown-end 2xl:hidden block">
          
            <div className="w-10 rounded-full">
              <Image src={userIcon} alt=""></Image>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
