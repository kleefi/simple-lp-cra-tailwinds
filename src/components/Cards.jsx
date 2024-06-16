import React from "react";
import Single from "./../assets/single.png";
import Double from "./../assets/double.png";
import Triple from "./../assets/triple.png";

function Cards() {
  return (
    <div className="w-full bg-white px-4 py-[10rem]">
      <div className="mx-auto grid max-w-[1240px] gap-8 md:grid-cols-3">
        <div className="my-4 flex w-full flex-col rounded-lg p-4 shadow-xl duration-300 hover:scale-110">
          <img
            className="mx-auto mt-[-3rem] w-20 bg-white"
            src={Single}
            alt=""
          />
          <h2 className="py-8 text-center text-2xl font-bold">Single users</h2>
          <p className="text-center text-4xl font-bold">$100</p>
          <div className="text-center font-medium">
            <p className="mx-8 mt-8 border-b py-2">Domain</p>
            <p className="mx-8 border-b py-2">Hosting</p>
            <p className="mx-8 border-b py-2">Website</p>
          </div>
          <button className="mx-auto my-6 w-[200px] rounded-md bg-[#00df9a] py-3 text-black">
            Contact Us
          </button>
        </div>

        <div className="my-4 flex w-full flex-col rounded-lg p-4 shadow-xl duration-300 hover:scale-110 md:my-0">
          <img
            className="mx-auto mt-[-3rem] w-20 bg-white"
            src={Double}
            alt=""
          />
          <h2 className="py-8 text-center text-2xl font-bold">Double users</h2>
          <p className="text-center text-4xl font-bold">$150</p>
          <div className="text-center font-medium">
            <p className="mx-8 mt-8 border-b py-2">Domain</p>
            <p className="mx-8 border-b py-2">Hosting</p>
            <p className="mx-8 border-b py-2">Website</p>
          </div>
          <button className="mx-auto my-6 w-[200px] rounded-md bg-[#697773] py-3 text-white">
            Contact Us
          </button>
        </div>

        <div className="my-4 flex w-full flex-col rounded-lg p-4 shadow-xl duration-300 hover:scale-110">
          <img
            className="mx-auto mt-[-3rem] w-20 bg-white"
            src={Triple}
            alt=""
          />
          <h2 className="py-8 text-center text-2xl font-bold">Triple users</h2>
          <p className="text-center text-4xl font-bold">$200</p>
          <div className="text-center font-medium">
            <p className="mx-8 mt-8 border-b py-2">Domain</p>
            <p className="mx-8 border-b py-2">Hosting</p>
            <p className="mx-8 border-b py-2">Website</p>
          </div>
          <button className="mx-auto my-6 w-[200px] rounded-md bg-[#00df9a] py-3 text-black">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
