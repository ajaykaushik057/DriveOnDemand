import React from "react";
import Marquee from "react-fast-marquee";
import Honda from "../../assets/hon.png";
import Hyundai from "../../assets/hyu.png";
import Suzuki from "../../assets/suz.png";
import Ford from "../../assets/ford.png";

const StatisticsSection = () => {
  const types = [
    {
      name: "Hyundai",
      img: `${Hyundai}`,
    },
    {
      name: "Honda",
      img: `${Honda}`,
    },
    {
      name: "Suzuki",
      img: `${Suzuki}`,
    },
    {
      name: "Ford",
      img: `${Ford}`,
    },
  ];

  return (
    <>
      <div className="overflow-hidden px-[50px] md:px-[100px] p-[30px] ">
        <div className="bg-[#2e2e2e] rounded-lg p-[20px]">
          <Marquee className="flex space-x-10">
            {" "}
            {types.map((type) => (
              <div key={type.name} className="flex-shrink-0 ">
                <img
                  className="h-[100px] w-[100px] object-contain mr-[80px] md:mr-[230px]"
                  src={type.img}
                  alt=""
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default StatisticsSection;

{
  /* <div>
<p className="text-2xl font-bold">25,000+</p>
<p className="mt-2">Verified Cars</p>
</div>
<div>
<p className="text-2xl font-bold">20,000+</p>
<p className="mt-2">Trusted Hosts</p>
</div>
<div>
<p className="text-2xl font-bold">2 Billion+</p>
<p className="mt-2">KMs Driven</p>
</div>
<div>
<p className="text-2xl font-bold">38+ Cities</p>
<p className="mt-2">And Counting...</p>
</div>
<div>
<p className="text-2xl font-bold">20+ Airports</p>
<p className="mt-2">Live On Zoomcar platform</p>
</div> */
}
