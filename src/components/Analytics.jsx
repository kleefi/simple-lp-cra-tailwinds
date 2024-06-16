import React from "react";
import Laptop from "./../assets/laptop.jpg";

function Analytics() {
  return (
    <div className="w-full bg-white px-4 py-16">
      <div className="mx-auto grid max-w-[1240px] md:grid-cols-2">
        <img className="mx-auto my-4 w-[500px]" src={Laptop} alt="" />
        <div className="flex flex-col justify-center">
          <p className="font-bold text-[#00d9fa]">New Technology</p>
          <h2 className="py-2 text-2xl font-bold sm:text-3xl md:text-4xl">
            Improve your business with our services
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            velit nihil eligendi modi quia, iusto perspiciatis. Aperiam, eum ea.
            Ratione similique maxime aspernatur quisquam, tempore unde rerum sed
            perferendis ut.
          </p>
          <button className="mx-auto my-6 w-[200px] rounded-md bg-black py-3 text-[#00df9a] md:mx-0">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
