import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {MdOutlineWork} from "react-icons/md";
import { Container, Row } from 'react-bootstrap'

const Exp = () => (
    <>
    <section id="exp">
    <h5>What i did before</h5>
    <h2>Experience</h2>
    <Container>

      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <VerticalTimeline>
              <style>{`
      .vertical-timeline::before {
        background-color: black;
      }
    `}</style>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#578E7E', color: '#3D3D3D' }}
                contentArrowStyle={{ borderRight: '7px solid  #3D3D3D' }}
                date={<span style={{ color: "#3D3D3D" }}>
                    Oct 2022 - Dec 2022
                </span>}
                iconStyle={{ background: '#3D3D3D', color: '#578E7E' }}
                icon={<MdOutlineWork />}
            >
                <h3 className="vertical-timeline-element-title" style={{color:"#F5ECD5", fontFamily:"aveneir next"}}>Software Developer</h3>
                <h5 className="vertical-timeline-element-subtitle" style={{color:"#F5ECD5", fontFamily:"aveneir next"}}>Brillio Techonologies</h5>
                <ul>
                  <li style={{fontFamily:"aveneir next"}}>Engineered and tested over 10 microservices using Java Spring Boot as part of Verizon's digital transformation project </li>
                  <li style={{fontFamily:"aveneir next"}}>Optimized database interactions using PostgreSQL, ensuring data integrity and query efficiency.</li>
                  <li style={{fontFamily:"aveneir next"}}>Facilitated CI/CD pipelines using Jenkins and GitLab CI, automating testing and deployment processes for 5+ dev environments.</li>
                  <li style={{fontFamily:"aveneir next"}}>Collaborated in Agile teams of 20+ developers using project management tools like Git and JIRA, ensuring on-time delivery for multiple concurrent projects.</li>
                </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#578E7E', color: '#3D3D3D' }}
                contentArrowStyle={{ borderRight: '7px solid  #3D3D3D' }}
                date={<span style={{ color: "#3D3D3D" }}>
                    Oct 2021 - Sep 2022
                </span>}
                iconStyle={{ background: 'black', color: '#578E7E' }}
                icon={<MdOutlineWork />}
                >
                <h3 className="vertical-timeline-element-title" style={{color:"#F5ECD5", fontFamily:"aveneir next"}}>Software Engineer</h3>
                <h5 className="vertical-timeline-element-subtitle" style={{color:"#F5ECD5", fontFamily:"aveneir next"}}>Cognizant Techonological Solutions</h5>
                <ul>
                <li style={{fontFamily:"aveneir next"}}>Collaborated with senior engineers to develop scalable software solutions for global clients in chemicals and automotive industries.</li>
                <li style={{fontFamily:"aveneir next"}}>Enhanced application performance by performing basic code reviews and optimizing simple bottlenecks, improving response times by 10% using tools like SQL and VisualVM.</li>
                <li style={{fontFamily:"aveneir next"}}>Supported cloud migration efforts by assisting in deploying applications on AWS, gaining exposure to cloud-native architectures and infrastructure-as-code practices.</li>
                <li style={{fontFamily:"aveneir next"}}>Supported the implementation of microservices architectures and RESTful APIs, ensuring smooth system integrations.</li>
                <li style={{fontFamily:"aveneir next"}}>Assisted in automating business processes using RPA tools and contributed to the setup of CI/CD pipelines.</li>
                <li style={{fontFamily:"aveneir next"}}>Executed 100+ test cases using JUnit, Selenium, and Postman, improving system reliability.</li>
                <li style={{fontFamily:"aveneir next"}}>Contributed to Agile delivery processes by participating in sprint planning, daily stand-ups, and retrospectives, ensuring task completion and delivering small features on schedule.	</li>
                </ul>
            </VerticalTimelineElement>
        </VerticalTimeline>
      </Row>
    </Container>
    </section>
    </>
);

export default Exp;