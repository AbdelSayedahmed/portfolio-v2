import React from "react";
import { projects, skills } from "../utils/data";

export default function Projects() {
  const getSkillDetails = (skillName) => {
    return skills.find((skill) => skill.name === skillName) || {};
  };

  return (
    <div className="flex flex-wrap justify-center mt-[100px] gap-4 w-full lg:w-[80%] p-5 md:p-0">
      {projects.map((project) => (
        <div
          className="bg-white rounded-lg shadow w-full sm:w-[45%] md:w-[30%]"
          key={project.id}
        >
          <img
            src={
              project.imageUrl ||
              "https://via.placeholder.com/300?text=No+Image+Available"
            }
            alt={`Screenshot of ${project.name}`}
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              {project.name}
            </h2>
            <p className="text-sm text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.skillSet.map((skill) => {
                const { icon, color } = getSkillDetails(skill);
                return (
                  <div
                    key={`${project.id}-${skill}`}
                    className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium shadow-sm ${
                      color || "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {icon && (
                      <img
                        src={icon}
                        alt={`${skill} icon`}
                        className="w-5 h-5"
                      />
                    )}
                    {skill}
                  </div>
                );
              })}
            </div>
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-1">
                Repositories:
              </h3>
              <ul className="list-disc list-inside">
                {project.frontendLink.map((link, index) => (
                  <li key={index}>
                    <a
                      href={Object.values(link)[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {Object.keys(link)[0]}
                    </a>
                  </li>
                ))}
                {project.backendLink.map((link, index) => (
                  <li key={index}>
                    <a
                      href={Object.values(link)[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {Object.keys(link)[0]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-1">
                Deployed Links:
              </h3>
              {project.deployedLink.length > 0 ? (
                <ul className="list-disc list-inside">
                  {project.deployedLink.map((link, index) => (
                    <li key={index}>
                      <a
                        href={Object.values(link)[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        {Object.keys(link)[0]}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">Not available</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
