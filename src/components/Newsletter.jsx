import React from "react";

function Newsletter() {
  return (
    <div className="my-4 w-full px-4 py-16 text-white">
      <div className="mx-auto grid max-w-[1240px] md:items-center lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="py-2 text-2xl font-bold sm:text-3xl md:text-4xl">
            Need information, tips or tips & tricks?
          </h2>
          <p>Signup our newsletter to know what's new</p>
        </div>
        <div className="my-4">
          <div className="flex w-full flex-col items-center justify-between sm:flex-row">
            <input
              className="mr-2 flex w-full flex-col rounded-md p-3 text-black"
              type="email"
              placeholder="Your email"
            />
            <button className="mx-auto my-6 w-[200px] rounded-md bg-[#00df9a] py-3 font-medium text-black">
              Send
            </button>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
