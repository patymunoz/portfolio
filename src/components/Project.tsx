import React from "react";
import mock001 from "../assets/images/mock001.png";
import mock003 from "../assets/images/mock003.png";
import mock005 from "../assets/images/mock005.png";
import mock006 from "../assets/images/mock006.png";
import mock008 from "../assets/images/mock008.png";
import mock009 from "../assets/images/mock009.png";
import mock010 from "../assets/images/mock010.png";
import mock011 from "../assets/images/mock011.png";
import mock012 from "../assets/images/mock012.png";
import mock013 from "../assets/images/mock013.png";

import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      {/* ──────── WORK PROJECTS ──────── */}
      <section className="projects-section">
        <h1>Work Projects</h1>
        <div className="projects-grid">
          {
            <div className="project">
              <a
                href="https://salud.conahcyt.mx/vih/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={mock010}
                  className="zoom"
                  alt="Inundaciones GDL"
                  width="100%"
                />
              </a>
              <a
                href="https://salud.conahcyt.mx/vih/"
                target="_blank"
                rel="noreferrer"
              >
                <h2>VIH/SIDA Data Analysis</h2>
              </a>
              <p>
                Data analysis and visualization project for the CONAHCYT
                VIH/SIDA. I worked on automating data cleaning, processing, and
                visualization tasks using Python.
              </p>
            </div>
          }
          {
            <div className="project">
              <a
                href="https://salud.conahcyt.mx/coronavirus/investigacion/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={mock011} className="zoom" alt="Salud" width="100%" />
              </a>
              <a
                href="https://salud.conahcyt.mx/coronavirus/investigacion/"
                target="_blank"
                rel="noreferrer"
              >
                <h2>COVID-19 Data Analysis</h2>
              </a>
              <p>
                Data analysis and visualization project for the CONAHCYT
                COVID-19 research. I worked on automating data cleaning,
                processing, and visualization tasks using Python.
              </p>
            </div>
          }
          {
            <div className="project">
              <a
                href="https://energia.conahcyt.mx/sargazo/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={mock012}
                  className="zoom"
                  alt="COVID-19"
                  width="100%"
                />
              </a>
              <a
                href="https://energia.conahcyt.mx/sargazo/"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Sargazo Data Analysis</h2>
              </a>
              <p>
                Data analysis and visualization project for the CONAHCYT Sargazo
                research. I worked on automating data cleaning, processing, and
                visualization tasks using Python.
              </p>
            </div>
          }
        </div>
      </section>

      {/* ──────── PERSONAL PROJECTS ──────── */}
      <section className="projects-section">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
          <div className="project">
            <a
              href="https://github.com/patymunoz/inundaciones_gdl"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={mock013}
                className="zoom"
                alt="NLP pipeline"
                width="100%"
              />
            </a>
            <a
              href="https://github.com/patymunoz/inundaciones_gdl"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Pipeline NLP, APIs & Geospatial Statistics</h2>
            </a>
            <p>
              Full end-to-end project combining web scraping, NLP, data
              visualization, Django database integration, and geospatial
              statistics. Developed in Python with Beautiful Soup, NLTK, Plotly,
              GeoPandas, and Folium.
            </p>
          </div>

          <div className="project">
            <a
              href="https://github.com/patymunoz/food_additives_ner"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={mock009}
                className="zoom"
                alt="NER dataset"
                width="100%"
              />
            </a>
            <a
              href="https://github.com/patymunoz/food_additives_ner"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Food Additives NER</h2>
            </a>
            <p>
              NLP pipeline for generating a domain-specific Named Entity
              Recognition dataset on food additives using spaCy, NLTK, and
              OpenAI API.
            </p>
          </div>

          <div className="project">
            <a
              href="https://formulario-ciri-vf9hvvp8edwphbqzccwaqy.streamlit.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={mock008}
                className="zoom"
                alt="Streamlit app"
                width="100%"
              />
            </a>
            <a
              href="https://formulario-ciri-vf9hvvp8edwphbqzccwaqy.streamlit.app/"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Streamlit Application</h2>
            </a>
            <p>
              Streamlit web application for managing and recording case
              information. Users can upload datasets, complete and validate new
              entries through interactive forms, and export updated files with
              summary reports.
            </p>
          </div>
        </div>
      </section>

      {/* ──────── ACADEMIC PROJECTS ──────── */}
      <section className="projects-section">
        <h1>Academic Projects</h1>
        <div className="projects-grid">
          <div className="project">
            <a
              href="https://modelos-graficos-probabilisticos.readthedocs.io/es/latest/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={mock001}
                className="zoom"
                alt="PGM course"
                width="100%"
              />
            </a>
            <a
              href="https://modelos-graficos-probabilisticos.readthedocs.io/es/latest/"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Probabilistic Graphical Models</h2>
            </a>
            <p>
              Sphinx-based documentation for the “Probabilistic Graphical
              Models” course, built and hosted on Read the Docs. Uses PyMC and
              PgmPy for Bayesian modeling.
            </p>
          </div>

          <div className="project">
            <a
              href="https://curso-machine-learning-python.readthedocs.io/es/latest/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={mock003}
                className="zoom"
                alt="ML course"
                width="100%"
              />
            </a>
            <a
              href="https://curso-machine-learning-python.readthedocs.io/es/latest/"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Machine Learning Algorithms</h2>
            </a>
            <p>
              Sphinx-based documentation for the “Machine Learning Algorithms”
              course. Built and published on Read the Docs using Scikit-learn
              for ML implementations.
            </p>
          </div>

          <div className="project">
            <a
              href="https://curso-geoespacial.readthedocs.io/es/latest/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={mock005}
                className="zoom"
                alt="Geospatial analysis"
                width="100%"
              />
            </a>
            <a
              href="https://curso-geoespacial.readthedocs.io/es/latest/"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Geospatial Analysis</h2>
            </a>
            <p>
              Sphinx-based documentation for the “Geospatial Analysis” course.
              Uses GeoPandas, Folium, and Osmnx for implementing geospatial
              analytics.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
