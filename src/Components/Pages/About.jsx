import React, { useState, useEffect } from 'react';
import AboutStyled from "../About-section"
import AboutSectionData from "./AboutData";

function AboutSection() {

  const [yearsCount, setYearsCount] = useState(1);
  const [projectsCount, setProjectsCount] = useState(1);
  const [clientsCount, setClientsCount] = useState(1);

  useEffect(() => {
    const yearsInterval = setInterval(() => {
      setYearsCount((prev) => {
        if (prev < 4) return prev + 1;
        clearInterval(yearsInterval);
        return prev;
      });
    }, 1000);

    const projectsInterval = setInterval(() => {
      setProjectsCount((prev) => {
        if (prev < 30) return prev + 1;
        clearInterval(projectsInterval);
        return prev;
      });
    }, 50);

    const clientsInterval = setInterval(() => {
      setClientsCount((prev) => {
        if (prev < 5) return prev + 1;
        clearInterval(clientsInterval);
        return prev;
      });
    }, 500);

    return () => {
      clearInterval(yearsInterval);
      clearInterval(projectsInterval);
      clearInterval(clientsInterval);
    };
  }, []);

  return (
    <AboutStyled>
      <div className="About-container">
        <h3>ABOUT ME</h3>
        <p>
          As a software engineer, I bring proficiency in front-end and back-end development technologies,
          including HTML, CSS, JavaScript, and various programming languages. With hands-on experience
          in web development frameworks and methodologies, I excel in creating responsive and dynamic web applications.
        </p>

        <div className="about">
          {AboutSectionData.map((About, index) => (
            <div className="about-div" key={index} style={{ "--i": index }}>
              <img src={About.image} alt="" />
              <h4>{About.title}</h4>
            </div>
          ))}
        </div>

        <div className="about-experience">
          <div className="about-experience-div">
            <div className="about-years">
              <h4>{yearsCount}+</h4>
              <p>Years of Programming</p>
            </div>
            <div className="about-projects">
              <h4>{projectsCount}+</h4>
              <p>Projects Completed</p>
            </div>
            <div className="about-clients">
              <h4>{clientsCount}+</h4>
              <p>Clients</p>
            </div>
          </div>
        </div>

        <button type='button' className='btn'>Work With Me</button>
      </div>
    </AboutStyled>
  );
}

export default AboutSection;
