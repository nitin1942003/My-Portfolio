import React, { useEffect, useState } from "react";

const About = () => {
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/nitin1942003")
      .then((response) => response.json())
      .then((data) => {
        setProfileImage(data.avatar_url);
      })
      .catch((error) => console.error("Error fetching GitHub profile:", error));
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-4">
      {profileImage && (
        <img
          src={profileImage}
          alt="GitHub Profile"
          className="w-40 h-40 rounded-full shadow-lg"
        />
      )}
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg max-w-2xl text-center leading-relaxed mb-6">
        Hello! I'm a passionate developer with a love for building beautiful and functional web applications.
        I have experience in MERN stack with supporting backend and frontend Technologies. My goal is to create
        seamless and engaging user experiences through clean code and thoughtful design.
      </p>
      <div className="flex gap-4">
        <a
          href="https://drive.google.com/file/d/1CbQDv75rBnwhnkNkRuMdW4q2yBzGOrDb/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          View Resume
        </a>
      </div>
    </div>
  );
};

export default About;
