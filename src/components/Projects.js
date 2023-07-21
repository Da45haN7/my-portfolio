import React from "react";
import cssProjects from "../assets/brain-tumor.png";
import devlog from "../assets/airbnb.png";
import getInspirred from "../assets/college.jpg";
import uilogs from "../assets/pacman.gif";

const Projects = () => {
  const projects = [
    {
      img: devlog,
      title: "AirBnb Clone",
      desc: " A clone of AirBnb website. Built with Firebase, React, Redux and CSS ",
      code: "https://github.com/Da45haN7/AirBnb-Clone",
    },
    {
      img: uilogs,
      title: "Implementation of Bidirectional Search in Pacman Domain",
      desc: "Performed T-test on each search algorithm and achieved better results than all four algorithms for Bidirectional Search ",
      code: "https://github.com/Da45haN7/",
    },
    {
      img: cssProjects,
      title: "Brain Tumor Detection and Classification using Convolutional Neural Networks",
      desc: "Developed an web application to detect and classify tumor in brain",
      code: "https://github.com/Da45haN7/",
    },
    {
      img: getInspirred,
      title: "College Inventory Management System",
      desc: "A web application using Java, MySQL to ease the management of the college inventory system",
      code: "https://github.com/Da45haN7/",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. I have built these with Python, Java, Artificial Intelligence Deep Learning, React,
            HTML, CSS. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-4 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} className="project__img"/>
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;