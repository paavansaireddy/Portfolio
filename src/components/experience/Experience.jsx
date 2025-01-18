import React from 'react';
import './experience.css';
import {  FaJava, FaPython, FaHtml5, FaCss3Alt, FaNode, FaReact, FaFlask, 
  FaGit, FaCircleNotch, FaJenkins, FaJira, FaBrain, FaAws, FaDocker, FaDatabase, FaLinux } from "react-icons/fa";
import { SiC, SiSelenium, SiJunit5, SiAmazonredshift, SiOracle, SiTensorflow, SiScikitlearn, SiPytorch } from 'react-icons/si'; 
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { DiDjango, DiMongodb, DiMsqlServer } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { GiArtificialHive } from "react-icons/gi";
import { VscAzure } from "react-icons/vsc";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
  <div className="experience__frontend">
      <h3>Programming Languages</h3>
      <div className="experience__content">
          <article className="experience__details">
            <SiC className="experience__details-icon" />
            <h4>C</h4>
          </article>
          <article className="experience__details">
            <TbBrandCpp className="experience__details-icon" />
            <h4>C++</h4>
          </article>
          <article className="experience__details">
            <FaJava className="experience__details-icon" />
            <h4>Java</h4>
          </article>
          <article className="experience__details">
            <IoLogoJavascript className="experience__details-icon" />
            <h4>JavaScript</h4>
          </article>
          <article className="experience__details">
            <FaPython className="experience__details-icon" />
            <h4>Python</h4>
          </article>
      </div>
  </div>

  <div className="experience__frontend">
      <h3>Web Development</h3>
      <div className="experience__content">
          <article className="experience__details">
            <FaHtml5 className="experience__details-icon" />
            <h4>HTML</h4>
          </article>
          <article className="experience__details">
            <FaCss3Alt className="experience__details-icon" />
            <h4>CSS</h4>
          </article>
          <article className="experience__details">
            <FaNode className="experience__details-icon" />
            <h4>NodeJs</h4>
          </article>
          <article className="experience__details">
            <FaReact className="experience__details-icon" />
            <h4>React</h4>
          </article>
          <article className="experience__details">
            <FaFlask className="experience__details-icon" />
            <h4>Flask</h4>
          </article>
          <article className="experience__details">
            <DiDjango className="experience__details-icon" />
            <h4>Django</h4>
          </article>
      </div>
  </div>

  <div className="experience__frontend">
      <h3>Tools and Technologies</h3>
      <div className="experience__content">
          <article className="experience__details">
            <FaGit className="experience__details-icon" />
            <h4>Git</h4>
          </article>
          <article className="experience__details">
            <FaCircleNotch className="experience__details-icon" />
            <h4>CI/CD</h4>
          </article>
          <article className="experience__details">
            <FaJenkins className="experience__details-icon" />
            <h4>Jenkins</h4>
          </article>
          <article className="experience__details">
            <SiJunit5 className="experience__details-icon" />
            <h4>JUnit</h4>
          </article>
          <article className="experience__details">
            <SiSelenium className="experience__details-icon" />
            <h4>Selenium</h4>
          </article>
          <article className="experience__details">
            <FaJira className="experience__details-icon" />
            <h4>Jira</h4>
          </article>
      </div>
  </div>
  <div className="experience__frontend">
      <h3>Backend Development and Databases</h3>
      <div className="experience__content">
          <article className="experience__details">
            <GrMysql className="experience__details-icon" />
            <h4>MySQL</h4>
          </article>
          <article className="experience__details">
            <DiMongodb className="experience__details-icon" />
            <h4>MongoDB</h4>
          </article>
          <article className="experience__details">
            <SiAmazonredshift className="experience__details-icon" />
            <h4>Redshift</h4>
          </article>
          <article className="experience__details">
            <DiMsqlServer className="experience__details-icon" />
            <h4>SQL Server</h4>
          </article>
          <article className="experience__details">
            <SiOracle className="experience__details-icon" />
            <h4>Oracle Database</h4>
          </article>
      </div>
  </div>
  <div className="experience__frontend">
      <h3>Machine Learning</h3>
      <div className="experience__content">
          <article className="experience__details">
            <SiTensorflow className="experience__details-icon" />
            <h4>TensorFlow</h4>
          </article>
          <article className="experience__details">
            <SiPytorch className="experience__details-icon" />
            <h4>Pytorch</h4>
          </article>
          <article className="experience__details">
            <SiScikitlearn className="experience__details-icon" />
            <h4>Scikit-learn</h4>
          </article>
          <article className="experience__details">
            <GiArtificialHive className="experience__details-icon" />
            <h4>Generative AI</h4>
          </article>
          <article className="experience__details">
            <FaBrain className="experience__details-icon" />
            <h4>Large Language Models (LLM's)</h4>
          </article>
      </div>
  </div>
  <div className="experience__frontend">
      <h3>Cloud & Devops</h3>
      <div className="experience__content">
          <article className="experience__details">
            <FaAws className="experience__details-icon" />
            <h4>AWS</h4>
          </article>
          <article className="experience__details">
            <VscAzure className="experience__details-icon" />
            <h4>Azure</h4>
          </article>
          <article className="experience__details">
            <FaDocker className="experience__details-icon" />
            <h4>Docker</h4>
          </article>
          <article className="experience__details">
            <FaDatabase className="experience__details-icon" />
            <h4>RestAPI's</h4>
          </article>
          <article className="experience__details">
            <FaLinux className="experience__details-icon" />
            <h4>Linux/Unix</h4>
          </article>
      </div>
  </div>
  
</div>

    </section>
  )
}

export default Experience