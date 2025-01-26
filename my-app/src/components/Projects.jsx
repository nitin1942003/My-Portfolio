import React, { useEffect, useState } from "react";

const images = import.meta.glob("../assets/*.{png,jpg,jpeg,gif}", { eager: true });

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const selectedRepos = [
    { name: "OJ-project", image: "../assets/p2.png" },
    { name: "cache-cpp-simulator", image: "../assets/p1.png" },
    { name: "RISC-V_cpu_design", image: "../assets/p3.png" },
    { name: "My-Portfolio", image: "../assets/p4.png" },
  ];  

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const username = "nitin1942003"; // Replace with your GitHub username
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();

        // Filter and add images to selected repositories
        const filteredProjects = data
          .filter((repo) => selectedRepos.find((r) => r.name === repo.name))
          .map((repo) => ({
            ...repo,
            image: selectedRepos.find((r) => r.name === repo.name)?.image,
          }));

        setProjects(filteredProjects);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p className="text-center">Loading projects...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-6">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="border p-4 rounded-lg shadow-md">
            <img
              src={images[project.image]?.default || ""}
              alt={project.name}
              className="w-full h-40 object-contain rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-gray-600">{project.description || "No description available"}</p>
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              View Repository
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
