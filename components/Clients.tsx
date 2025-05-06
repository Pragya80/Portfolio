"use client";

import React from "react";
import { companies, projects } from "@/data";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        My Recent <span className="text-purple">Projects</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 px-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">{project.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
              {project.des}
            </p>
            <div className="flex gap-2 mt-4 flex-wrap">
              {project.iconLists.map((icon, index) => (
                <img key={index} src={icon} alt="tech" className="w-6 h-6" />
              ))}
            </div>
            <a
              href={project.link}
              className="inline-block mt-4 text-purple hover:underline text-sm"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-20">
        {companies.map((company) => (
          <div key={company.id} className="flex md:max-w-60 max-w-32 gap-2">
            <img src={company.img} alt={company.name} className="md:w-10 w-5" />
            <img
              src={company.nameImg}
              alt={company.name}
              width={company.id === 4 || company.id === 5 ? 100 : 150}
              className="md:w-24 w-20"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
