import React from "react";

const About = () => {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 bg-gray-800">
      <div className="header bg-gray-900 text-white p-4 mb-4">
        <h1 className="text-3xl font-bold mb-2">About Us</h1>
        <p className="text-lg text-gray-400">Welcome to our website!</p>
      </div>
      <div className="image-section mb-4">
        <img
          src="about-us.jpg"
          alt="About Us Image"
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
      <div className="content-section mb-4">
        <h2 className="text-2xl font-bold mb-2 text-gray-200">Our Story</h2>
        <p className="text-lg text-gray-400 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <p className="text-lg text-gray-400 mb-4">
          Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
          Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        </p>
      </div>
      <div className="team-section mb-4">
        <h2 className="text-2xl font-bold mb-2 text-gray-200">Meet Our Team</h2>
        <ul className="flex flex-wrap justify-center mb-4">
          <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <img
              src="team-member-1.jpg"
              alt="Team Member 1"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-lg font-bold mb-1 text-gray-200">John Doe</h3>
            <p className="text-lg text-gray-400">Founder & CEO</p>
          </li>
          <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <img
              src="team-member-2.jpg"
              alt="Team Member 2"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-lg font-bold mb-1 text-gray-200">Jane Smith</h3>
            <p className="text-lg text-gray-400">CTO</p>
          </li>
          <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <img
              src="team-member-3.jpg"
              alt="Team Member 3"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-lg font-bold mb-1 text-gray-200">
              Bob Johnson
            </h3>
            <p className="text-lg text-gray-400">Designer</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
