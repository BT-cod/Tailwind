import { React, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setnav] = useState(false);

  const handleNav = () => {
    setnav(!nav);
  };

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">BUSINESS</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contacts</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-700 bg-[#191919] ease-in-out duration-500" : "fixed left-[-100%]"}>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">BUSINESS</h1>

        <ul className="uppercase text-2xl">
          <li className="p-4 border-b border-b-gray-600 hover:bg-gray-500 cursor-pointer">Home</li>
          <li className="p-4 border-b border-b-gray-600 hover:bg-gray-500 cursor-pointer">Company</li>
          <li className="p-4 border-b border-b-gray-600 hover:bg-gray-500 cursor-pointer">Resources</li>
          <li className="p-4 border-b border-b-gray-600 hover:bg-gray-500 cursor-pointer">About</li>
          <li className="p-4 hover:bg-gray-500 cursor-pointer">Contacts</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
