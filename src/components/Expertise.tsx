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
  "PgmPy",
  "PyMC",
  "Statsmodels",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "Hugging Face",
  "Jupyter",
  "SQL",
  "PostgreSQL",
  "GeoPandas",
];

const labelsSecond = [
  "QGIS",
  "ArcGIS",
  "GeoDa",
  "OSGeo",
  "Data Visualization",
  "Tableau",
  "Matplotlib",
  "Seaborn",
  "Storytelling",
];

const labelsThird = ["Git", "GitHub", "Docker"];

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
              Experienced in statistical modeling, machine learning, and data
              wrangling using Python and R. Skilled in designing analytical
              pipelines, feature engineering, and model evaluation to uncover
              actionable insights.
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
              Proficient in transforming complex data into meaningful visual
              narratives. Specialized in dashboards, interactive charts, and
              geographic visualization for communicating insights to diverse
              audiences.
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
            <h3>Data Engineering & Automation</h3>
            <p>
              Adept at managing databases, automating data pipelines, and
              integrating analytics workflows. Experienced with version control,
              containerization.
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
