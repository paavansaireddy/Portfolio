import "./portfolio.css";

import IMG1 from "../../assets/Guassian Splat.jpg";
import IMG2 from "../../assets/Portfolio.png";
import IMG3 from "../../assets/Disease_Pred.png";
import IMG4 from "../../assets/Sentiment.png";
import IMG5 from "../../assets/Cold_Email.png";
import IMG6 from "../../assets/Airline_Passenger.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "3D Gaussian Splatting for Real time Radiance Field Rendering",
      img: IMG1,
      description:
        "Rendering system using Gaussian model to generate photorealistic images.",
      technologies: "C++ | Python | Machine Learning | OpenGL ",
      github: "https://github.com/paavansaireddy/GussianSplatting",
    },
    {
      id: 2,
      title: "My Portfolio",
      img: IMG2,
      description:
        "Portfolio website built using React.",
      technologies: "HTML | CSS | JavaScript | React ",
      github: "https://github.com/Rasif-Taghizada/fh-huquq.com",
    },
    {
      id: 3,
      title: "Multi Disease Prediction ",
      img: IMG3,
      description: "Disease Prediction model buit using pyspark using various SVM and GBM algorithsm",
      technologies: "PySpark | Machine Learning | Numpy | Pandas",
      github: "https://github.com/paavansaireddy/MultiDiseasePrediction",
    },
    {
      id: 4,
      title: "Sentiment Analysis For Marketing.",
      img: IMG4,
      description:
        "Built a sentiment analysis model using NLP from the amazon reviews helps the buyer how the customers are feeling about the product.",
      technologies: "Python | Machine Leanning | NLP | Nltk | Numpy | Pandas",
      github: "https://github.com/paavansaireddy/Sentiment-Analysis-NLP-for-Marketting",
    },
    {
      id: 5,
      title: "Cold Email Generator",
      img: IMG5,
      description:
        "To help company's generate code email to showcase their client what they can do. ",
      technologies: "Python | Generative AI | LLM | Streamlit",
      github: "https://github.com/paavansaireddy/Cold-Email-Generator",
    },
    {
      id: 6,
      title: "Airline Passenger Satisfaction",
      img: IMG6,
      description:
        "To analyze the preformence of staff and maintainance of the Airlines from passenger Reviews using various Factors ",
      technologies: "Python | Machine Leanning | Numpy | Pandas",
      github: "https://github.com/paavansaireddy/Airline_Passenger_Satisfaction",
    },
    
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
