import React from "react";
import { GiBilledCap, GiShirt } from "react-icons/gi";
import { PiTShirtDuotone } from "react-icons/pi";

const Record = () => {
  return (
    // <div classNameName="bg-gradient-to-r from-[#e0584c] to-[#FD3B29] mt-14 lg:mr-14 ml-0 lg:ml-4 mr-0 rounded-sm">
    //   <div classNameName="max-w-4xl mx-auto">
    //     <div classNameName=" grid grid-cols-1  lg:grid-cols-3 gap-4 p-8 rounded-sm">
    //       <div classNameName="lg:pl-8 pl-28">
    //         <PiTShirtDuotone classNameName="text-8xl" />
    //         <h1 classNameName="text-4xl font-bold text-white pt-2">77,000+</h1>
    //         <h3 classNameName="text-[20px] text-white">T-shirts produced</h3>
    //       </div>
    //       <div classNameName="lg:pl-8 pl-28">
    //         <GiBilledCap classNameName="text-8xl " />
    //         <h1 classNameName="text-4xl font-bold text-white pt-2">53,000+</h1>
    //         <h3 classNameName="text-[20px] text-white">Caps produced</h3>
    //       </div>
    //       <div classNameName="lg:pl-8 pl-28">
    //         <GiShirt classNameName="text-8xl" />
    //         <h1 classNameName="text-4xl font-bold text-white pt-2">21,000+</h1>
    //         <h3 classNameName="text-[20px] text-white">Hoodies produced</h3>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <section className="grid grid-cols-1 lg:grid-cols-3">
      <div className="outer">
        <div className="dot"></div>
        <div className="card">
          <div className="ray"></div>
          <div className="text"> 77,000+</div>
          <div className="text-[24px] font-bold">T-shirts produced</div>
          <div className="line topl"></div>
          <div className="line leftl"></div>
          <div className="line bottoml"></div>
          <div className="line rightl"></div>
        </div>
      </div>
      <div className="outer">
        <div className="dot"></div>
        <div className="card">
          <div className="ray"></div>
          <div className="text">21,000+</div>
          <div className="text-[24px] font-bold">Hoodies produced</div>
          <div className="line topl"></div>
          <div className="line leftl"></div>
          <div className="line bottoml"></div>
          <div className="line rightl"></div>
        </div>
      </div>
      <div className="outer">
        <div className="dot"></div>
        <div className="card">
          <div className="ray"></div>
          <div className="text">53,000+</div>
          <div className="text-[24px] font-bold">Caps produced</div>
          <div className="line topl"></div>
          <div className="line leftl"></div>
          <div className="line bottoml"></div>
          <div className="line rightl"></div>
        </div>
      </div>
    </section>
  );
};

export default Record;
