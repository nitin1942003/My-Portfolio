import React from "react";
import ProjectImage from '../assets/project-image.png';
import {
  Code,
  Server,
  FileCode,
  Database,
  GitBranch,
  Code2,
  Terminal,
  Globe,
  Cloudy,
  FileCode2Icon,
  ComputerIcon,
  ALargeSmall
} from "lucide-react";

const skillIcons = {
  'React': Code,
  'Node.js': FileCode2Icon,
  'JavaScript': FileCode,
  'CSS': Globe,
  'HTML': Terminal,
  'MongoDB': Database,
  'Express.js': Code2,
  'Tailwind CSS': ALargeSmall,
  'Git': GitBranch,
  'SQL': Database,
  'Python': Terminal,
  'Computer Networks': Server,
  'OS': ComputerIcon,
  'Cloud': Cloudy
};

const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-gray-100 to-blue-100 overflow-hidden">
      <div className="z-10 text-center px-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Hi, I'm Nitin Sharma</h1>
        <p className="text-xl text-gray-600 mb-6">Software Developer | Innovator</p>
      </div>

      <div className="w-full mt-12 overflow-hidden">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-8">My Skills</h2>
        <div className="skills-container relative overflow-hidden">
          <div className="skills-scroll">
            {/* First set of icons */}
            {Object.entries(skillIcons).map(([skill, Icon]) => (
              <div
                key={skill}
                className="skill-item flex-shrink-0 flex flex-col items-center group"
              >
                <Icon
                  className="w-12 h-12 text-gray-700 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300 mb-2"
                />
                <span className="text-lg font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                  {skill}
                </span>
              </div>
            ))}
            {Object.entries(skillIcons).map(([skill, Icon]) => (
              <div
                key={skill}
                className="skill-item flex-shrink-0 flex flex-col items-center group"
              >
                <Icon
                  className="w-12 h-12 text-gray-700 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300 mb-2"
                />
                <span className="text-lg font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center py-12 px-4">
        
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-8">
          My Deployed MERN Stack Project
        </h2>
        <img
          src={ProjectImage}
          alt="Runitin Project"
          className="w-20 h-20 object-cover rounded-full mb-2 shadow-lg border-4 border-white"
        />
        <a
          href="https://www.runitin.online/"
          className="text-xl text-blue-600 hover:text-blue-800 transition-colors duration-300 underline"
        >
          Runitin
        </a>
      </div>
    </div>
  );
};

export default Home;
