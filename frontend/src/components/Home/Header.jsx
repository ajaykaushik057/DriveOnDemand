import React, { useContext } from "react";
import { LocationContext } from "../../context/LocationContext";

function Header() {
  const { location } = useContext(LocationContext);

  return (
    <div className="header flex justify-center items-center h-[88.5vh]  px-[30px] ">
      <div>
        <div className="bg-dark bg-opacity-60 text-white w-[900px] px-[100px] py-[40px]">
          <p className="text-[18px] text-[#a4a2a2] mb-[-20px]">
            Cars on demand, for every journey
          </p>
          <h1 className="text-[90px] text-left">DriveOnDemand</h1>
          <p>
            DriveonOnDemand connects car owners with renters effortlessly. Post
            your car or find one to rent with ease, offering flexibility and
            convenience for every journey.
          </p>

          <div className="flex justify-center items-center">
            <button className="bg-[#EB8317] rounded-full text-[18px] px-5 py-3 text-white m-4 ">
              Explore now
            </button>
            <p>in {location.city}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
