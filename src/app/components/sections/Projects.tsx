"use client";
import React, { useEffect, useState } from "react";
import { Github, Globe } from "lucide-react";

interface Project {
  _id: string;
  pro_name: string;
  d1?: string;
  d2?: string;
  d3?: string;
  tech: string[];
  details?: string;
  srt?: string;
  img?: string;
  code?: string;
  server?: string;
  live?: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  //console.log(projects);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        setProjects(data.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="bg-[#0F1729] py-16 lg:px-36 p-5" id="projects">
      {/* Title Section */}
      <div className="flex items-center justify-center w-full">
        <div className="flex-grow border-t border-[#1A9ED4]"></div>
        <span className="mx-4 text-[#1A9ED4] font-bold text-2xl">Projects</span>
        <div className="flex-grow border-t border-[#1A9ED4]"></div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1A9ED4]"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-[#131a2b] rounded-lg overflow-hidden shadow-md shadow-[#1A9ED4]/20 hover:shadow-[#1A9ED4]/40 transition-all"
            >
              {project.img && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.pro_name}
                    className="w-full h-full object-cover object-top hover:object-bottom transition-all duration-3000 ease-in-out"
                  />
                </div>
              )}
              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.pro_name}
                </h3>
                <p className="text-gray-300 text-sm mb-3">{project.srt}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech[0].split(",").map((tech, index) => (
                    <span
                      key={index}
                      className="bg-[#1A9ED4]/20 text-[#1A9ED4] text-xs px-2 py-1 rounded"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 bg-[#1A9ED4] text-[#0F1729] px-3 py-1 rounded text-sm font-medium hover:bg-[#1A9ED4]/80"
                    >
                      <Globe size={16} /> Live
                    </a>
                  )}
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 bg-[#131a2b] border border-[#1A9ED4] text-[#1A9ED4] px-3 py-1 rounded text-sm font-medium hover:bg-[#1A9ED4]/10"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
