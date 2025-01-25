import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-4">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg max-w-2xl text-center leading-relaxed mb-6">
        Hello! I'm a passionate developer with a love for building beautiful and functional web applications. 
        I have experience in React, Tailwind CSS, and other modern web technologies. My goal is to create 
        seamless and engaging user experiences through clean code and thoughtful design.
      </p>
      <div className="flex gap-4">
        <a 
          href="/portfolio"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          View Portfolio
        </a>
        <a 
          href="/contact"
          className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300 transition">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default About;
