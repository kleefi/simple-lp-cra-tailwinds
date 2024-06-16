import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="mx-auto grid max-w-[1240px] gap-8 px-4 py-16 text-gray-300 lg:grid-cols-3">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">React.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet
          maxime sint excepturi doloremque accusamus?
        </p>
        <div className="my-6 flex w-full justify-between md:w-[40%]">
          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
        </div>
      </div>
      <div className="col-span-4 flex justify-between lg:col-span-2">
        <div className="">
          <h6 className="font-medium text-gray-400">Menu</h6>
          <ul>
            <li className="py-2 text-sm">Home</li>
            <li className="py-2 text-sm">Company</li>
            <li className="py-2 text-sm">Resources</li>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Contact</li>
          </ul>
        </div>
        <div className="">
          <h6 className="font-medium text-gray-400">Menu</h6>
          <ul>
            <li className="py-2 text-sm">Home</li>
            <li className="py-2 text-sm">Company</li>
            <li className="py-2 text-sm">Resources</li>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Contact</li>
          </ul>
        </div>
        <div className="">
          <h6 className="font-medium text-gray-400">Menu</h6>
          <ul>
            <li className="py-2 text-sm">Home</li>
            <li className="py-2 text-sm">Company</li>
            <li className="py-2 text-sm">Resources</li>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Contact</li>
          </ul>
        </div>
        <div className="">
          <h6 className="font-medium text-gray-400">Menu</h6>
          <ul>
            <li className="py-2 text-sm">Home</li>
            <li className="py-2 text-sm">Company</li>
            <li className="py-2 text-sm">Resources</li>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
