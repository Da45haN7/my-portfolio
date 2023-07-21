import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My Name Is Darshan Bhamare everyone calls me Darshan. I am a
            Software Developer. I am looking for Software Developer opportunities.  
          </p>
          <p className="pb-5">
            I am proficient in skills like Python, Java, JavaScript, HTML, CSS React.js, Redux, and many more.
          </p>

          <p>In backend I know SQL, Node.js, and MongoDB</p>

          <p>
            In my spare time I like to do competitive coding and I also
            like to go on a trek, watch movies and travel.
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;