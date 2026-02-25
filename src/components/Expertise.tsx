import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faChartLine,
  faRobot,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsAI = [
  "LLM orchestration",
  "Prompt engineering",
  "NLP pipelines",
  "Embeddings",
  "Fine-tuning workflows",
  "Agent architectures",
  "API integration",
];

const labelsBackend = [
  "Python",
  "Modular architecture",
  "REST APIs",
  "ETL pipelines",
  "Data validation",
  "PostgreSQL",
];

const labelsML = [
  "Classical ML models",
  "Feature engineering",
  "Experiment design",
  "Model evaluation",
  "Statistical inference",
];

const labelsTools = [
  "LangChain",
  "Hugging Face",
  "OpenAI API",
  "Git",
  "GitHub",
  "GitLab",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faRobot} size="3x" />
            <h3>AI Engineering</h3>
            <p>
              LLM orchestration, prompt engineering, NLP pipelines, embeddings,
              fine-tuning workflows, agent-based architectures, and API
              integration.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Focus:</span>
              {labelsAI.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faServer} size="3x" />
            <h3>Backend & Systems</h3>
            <p>Python, modular architecture design, and PostgreSQL.</p>
            <div className="flex-chips">
              <span className="chip-title">Backend:</span>
              {labelsBackend.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faChartLine} size="3x" />
            <h3>Machine Learning</h3>
            <p>
              Classical ML models, feature engineering, experiment design, model
              evaluation, and statistical inference.
            </p>
            <div className="flex-chips">
              <span className="chip-title">ML:</span>
              {labelsML.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDatabase} size="3x" />
            <h3>Tools</h3>
            <p>
              LangChain, Hugging Face, OpenAI API, Git, and GitHub/GitLab for
              version control and collaboration.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Stack:</span>
              {labelsTools.map((label, index) => (
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
