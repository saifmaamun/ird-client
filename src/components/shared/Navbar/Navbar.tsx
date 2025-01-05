import Image from "next/image";
import Link from "next/link";
import userIcon from "../../../assets/user-icon.png"


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 ">
  <div className="flex-1">
    <Link href="/"> <h1 className="text-2xl font-semibold">Dua Page</h1></Link>
    
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end lg:hidden block">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
         <Image src={userIcon} alt=""></Image>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    );
};

export default Navbar;