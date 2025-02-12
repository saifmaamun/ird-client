import top from "../../../assets/left sidebar/top-hand.png"
import bottom from "../../../assets/left sidebar/bottom-hand.png"
import Image from "next/image";


const LeftSidebar = () => {
    return (
        <div className="max-w-[100px] xl:block hidden ">
  
  
  <div className="bg-white shadow-sm  rounded-2xl px-1 py-5">
    {/* menu */}
    <div className='flex flex-col justify-between  items-center '>
      <div>
        <Image width={72} height={72} src={top}  alt=""/>
      </div>
      {/* middle menu */}
      <div className="my-32">
        {/* single icons */}
        {/* home */}
        <div className="border mb-7 rounded-full bg-[#E8F0F5] w-8 h-8  text-center">
        <svg className="rounded-full p-1"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_15_3)">
<rect width="38" height="38" fill="#E8F0F5"/>
<path d="M9 21H4C3.44772 21 3 20.5523 3 20V12.4142C3 12.149 3.10536 11.8946 3.29289 11.7071L11.2929 3.70711C11.6834 3.31658 12.3166 3.31658 12.7071 3.70711L20.7071 11.7071C20.8946 11.8946 21 12.149 21 12.4142V20C21 20.5523 20.5523 21 20 21H15M9 21H15M9 21V15C9 14.4477 9.44772 14 10 14H14C14.5523 14 15 14.4477 15 15V21" stroke="#000000" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_15_3">
<rect width="38" height="38" fill="#E8F0F5"/>
</clipPath>
</defs>
</svg>
        </div>
        {/* menu */}
        <div className="border mb-7 rounded-full bg-[#E8F0F5] w-8 h-8  text-center">
        <svg className="rounded-full p-1" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 3.32001H16C14.8954 3.32001 14 4.21544 14 5.32001V8.32001C14 9.42458 14.8954 10.32 16 10.32H19C20.1046 10.32 21 9.42458 21 8.32001V5.32001C21 4.21544 20.1046 3.32001 19 3.32001Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 3.32001H5C3.89543 3.32001 3 4.21544 3 5.32001V8.32001C3 9.42458 3.89543 10.32 5 10.32H8C9.10457 10.32 10 9.42458 10 8.32001V5.32001C10 4.21544 9.10457 3.32001 8 3.32001Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 14.32H16C14.8954 14.32 14 15.2154 14 16.32V19.32C14 20.4246 14.8954 21.32 16 21.32H19C20.1046 21.32 21 20.4246 21 19.32V16.32C21 15.2154 20.1046 14.32 19 14.32Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 14.32H5C3.89543 14.32 3 15.2154 3 16.32V19.32C3 20.4246 3.89543 21.32 5 21.32H8C9.10457 21.32 10 20.4246 10 19.32V16.32C10 15.2154 9.10457 14.32 8 14.32Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
        {/* idea */}
        <div className="border mb-7 rounded-full bg-[#E8F0F5] w-8 h-8  text-center">
        <svg className="rounded-full p-1"  fill="#000000" viewBox="-4 0 19 19" xmlns="http://www.w3.org/2000/svg" ><path d="M10.328 6.83a5.903 5.903 0 0 1-1.439 3.64 2.874 2.874 0 0 0-.584 1v1.037a.95.95 0 0 1-.95.95h-3.71a.95.95 0 0 1-.95-.95V11.47a2.876 2.876 0 0 0-.584-1A5.903 5.903 0 0 1 .67 6.83a4.83 4.83 0 0 1 9.28-1.878 4.796 4.796 0 0 1 .38 1.88zm-.95 0a3.878 3.878 0 0 0-7.756 0c0 2.363 2.023 3.409 2.023 4.64v1.037h3.71V11.47c0-1.231 2.023-2.277 2.023-4.64zM7.83 14.572a.475.475 0 0 1-.475.476h-3.71a.475.475 0 0 1 0-.95h3.71a.475.475 0 0 1 .475.474zm-.64 1.262a.238.238 0 0 1-.078.265 2.669 2.669 0 0 1-3.274 0 .237.237 0 0 1 .145-.425h2.983a.238.238 0 0 1 .225.16z"/></svg>
        </div>
        {/* bookmark */}
        <div className="border mb-7 rounded-full bg-[#E8F0F5] w-8 h-8  text-center">
        <svg className="rounded-full p-1"  viewBox="-3 -5 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" >
        <g id="Icon-Set"  transform="translate(-412.000000, -99.000000)" fill="#000000">
            <path d="M442,124 C442,125.104 441.073,125.656 440,126 C440,126 434.557,127.515 429,128.977 L429,104 L440,101 C441.104,101 442,101.896 442,103 L442,124 L442,124 Z M427,128.998 C421.538,127.53 416,126 416,126 C414.864,125.688 414,125.104 414,124 L414,103 C414,101.896 414.896,101 416,101 L427,104 L427,128.998 L427,128.998 Z M440,99 C440,99 434.211,100.594 428.95,102 C428.291,102.025 427.627,102 426.967,102 C421.955,100.656 416,99 416,99 C413.791,99 412,100.791 412,103 L412,124 C412,126.209 413.885,127.313 416,128 C416,128 421.393,129.5 426.967,131 L428.992,131 C434.612,129.5 440,128 440,128 C442.053,127.469 444,126.209 444,124 L444,103 C444,100.791 442.209,99 440,99 L440,99 Z" id="book-album" >

</path>
        </g>
    </g>
</svg>
        </div>
        {/* plus */}
        <div className="border mb-7 rounded-full bg-[#E8F0F5] w-8 h-8  text-center">
        <svg className="rounded-full p-1"  viewBox="4 4 24 24" fill="#000" version="1.1" xmlns="http://www.w3.org/2000/svg">

<path d="M0 26.016q0 2.496 1.76 4.224t4.256 1.76h20q2.464 0 4.224-1.76t1.76-4.224v-20q0-2.496-1.76-4.256t-4.224-1.76h-20q-2.496 0-4.256 1.76t-1.76 4.256v20zM4 26.016v-20q0-0.832 0.576-1.408t1.44-0.608h20q0.8 0 1.408 0.608t0.576 1.408v20q0 0.832-0.576 1.408t-1.408 0.576h-20q-0.832 0-1.44-0.576t-0.576-1.408zM8 16q0 0.832 0.576 1.44t1.44 0.576h4v4q0 0.832 0.576 1.408t1.408 0.576 1.408-0.576 0.608-1.408v-4h4q0.8 0 1.408-0.576t0.576-1.44-0.576-1.408-1.408-0.576h-4v-4q0-0.832-0.608-1.408t-1.408-0.608-1.408 0.608-0.576 1.408v4h-4q-0.832 0-1.44 0.576t-0.576 1.408z"></path>
</svg>
        </div>
        {/* leaf */}
        <div className="border mb-7 rounded-full bg-[#E8F0F5] w-8 h-8  text-center">
        <svg className="rounded-full p-1"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.00244 4.70455V9C2.00244 12.3137 4.68873 15 8.00244 15C8.10042 15 8.19784 14.9977 8.29467 14.993C8.55723 15.8766 8.98958 16.6872 9.5539 17.3868L7.22374 19.7156C6.93075 20.0084 6.93061 20.4833 7.22342 20.7763C7.51622 21.0692 7.99109 21.0694 8.28408 20.7766L10.6146 18.4474C11.8152 19.4154 13.3421 19.9949 15.0044 19.9949C18.8696 19.9949 22.0031 16.8615 22.0031 12.9962V7.74756C22.0031 6.78106 21.2196 5.99756 20.2531 5.99756L15.0044 5.99756C14.4209 5.99756 13.8541 6.06896 13.3123 6.2035C12.3069 4.29847 10.3063 3 8.00244 3H3.70699C2.76559 3 2.00244 3.76315 2.00244 4.70455ZM11.6835 17.3792L15.7801 13.2851C16.0731 12.9923 16.0732 12.5174 15.7804 12.2244C15.4876 11.9314 15.0128 11.9313 14.7198 12.2241L10.6226 16.3188C9.92169 15.3958 9.50569 14.2446 9.50569 12.9962C9.50569 9.9594 11.9675 7.49756 15.0044 7.49756H20.2531C20.3911 7.49756 20.5031 7.60949 20.5031 7.74756V12.9962C20.5031 16.0331 18.0412 18.4949 15.0044 18.4949C13.7567 18.4949 12.6062 18.0794 11.6835 17.3792ZM8.00244 4.5C9.65903 4.5 11.1065 5.39514 11.8877 6.72812C10.7891 7.27543 9.85464 8.10307 9.17802 9.11737L7.28032 7.21967C6.98743 6.92678 6.51255 6.92678 6.21966 7.21967C5.92677 7.51256 5.92677 7.98744 6.21966 8.28033L8.45718 10.5179C8.1654 11.2883 8.00569 12.1236 8.00569 12.9962C8.00569 13.1656 8.01171 13.3336 8.02354 13.5L8.00244 13.5C5.51716 13.5 3.50244 11.4853 3.50244 9L3.50244 4.70455C3.50244 4.59158 3.59402 4.5 3.70699 4.5L8.00244 4.5Z" fill="#212121"/>
</svg>
        </div>
        {/* book */}
        <div className="border mb-7 rounded-full bg-[#E8F0F5] w-8 h-8  text-center">
        <svg className="rounded-full p-1"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_15_3)">
<rect width="38" height="38" fill="#E8F0F5"/>
<path d="M9 21H4C3.44772 21 3 20.5523 3 20V12.4142C3 12.149 3.10536 11.8946 3.29289 11.7071L11.2929 3.70711C11.6834 3.31658 12.3166 3.31658 12.7071 3.70711L20.7071 11.7071C20.8946 11.8946 21 12.149 21 12.4142V20C21 20.5523 20.5523 21 20 21H15M9 21H15M9 21V15C9 14.4477 9.44772 14 10 14H14C14.5523 14 15 14.4477 15 15V21" stroke="#000000" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_15_3">
<rect width="38" height="38" fill="#E8F0F5"/>
</clipPath>
</defs>
</svg>
        </div>
      </div>
      <div>
      <Image width={56} height={56} src={bottom}  alt=""/>
      </div>
    </div>
  </div>
</div>
    );
};

export default LeftSidebar;