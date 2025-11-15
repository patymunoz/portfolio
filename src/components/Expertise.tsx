import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faChartLine } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "Python",
  "R",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "GeoPandas",
  "NLTK",
  "spaCy",
  "Word2Vec",
  "FastAPI",
  "PostgreSQL",
  "SQL",
  "Git",
  "GitHub",
];

const labelsSecond = [
  "QGIS",
  "ArcGIS",
  "GeoDa",
  "OSGeo",
  "Data Visualization",
  "Matplotlib",
  "Seaborn",
  "Leaflet.js",
  "Storytelling",
];

const labelsThird = [
  "LLM Prompting",
  "OpenAI API",
  "Embeddings",
  "Vector Stores",
  "Django REST",
  "Docker",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Data Science & Machine Learning</h3>
            <p>
              Hands-on experience building analytical pipelines, developing ML
              models, and structuring data for downstream applications. Skilled
              in feature engineering, model evaluation, NLP fundamentals, and
              geospatial ML workflows. Comfortable implementing prototypes and
              production-ready scripts in Python.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Core tools:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faChartLine} size="3x" />
            <h3>Data Visualization & Analytics</h3>
            <p>
              Experienced in turning datasets -structured, unstructured, and
              geoespatial- into actionable insights through clear narratives and
              dashboards. Developed analytical reports and interactive
              visualizations for public policy and business decisions.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Visualization stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDatabase} size="3x" />
            <h3>AI engineering & generative AI</h3>
            <p>
              I have implemented end-to-end data workflows that combine LLM
              prompting, embeddings, geolocation, and API-based data
              visualization. I have worked with Python-based LLM tooling,
              including spaCy, NLTK, Word2Vec, and OpenAI APIs for NLP
              preprocessing and structured-data extraction. Additionally, I have
              built small RAG-style prototypes using LlamaIndex, vector stores,
              and retrieval pipelines, gaining hands-on exposure to agent-like
              interactions and generative AI development through academic and
              personal projects.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech ecosystem:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
