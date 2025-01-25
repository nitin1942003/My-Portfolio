import React from "react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS.",
    link: "https://your-portfolio.com",
  },
  {
    id: 2,
    title: "Weather App",
    description: "A weather forecasting app using OpenWeather API.",
    link: "https://weather-app.com",
  },
  {
    id: 3,
    title: "E-commerce Store",
    description: "A full-stack e-commerce platform built with MERN stack.",
    link: "https://ecommerce-store.com",
  },
  {
    id: 4,
    title: "Chat Application",
    description: "A real-time chat app using WebSockets.",
    link: "https://chat-application.com",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
