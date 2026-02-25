import React from "react";
import mock001 from "../assets/images/mock001.png";
import mock003 from "../assets/images/mock003.png";
import mock005 from "../assets/images/mock005.png";
import agent01 from "../assets/images/agent01.png";
import mock008 from "../assets/images/mock008.png";
import mock009 from "../assets/images/mock009.png";
import mock010 from "../assets/images/mock010.png";
import mock011 from "../assets/images/mock011.png";
import mock012 from "../assets/images/mock012.png";
import mock013 from "../assets/images/mock013.png";
import mock014 from "../assets/images/mock014.png";

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
                Built the data processing pipeline behind the HIV transmission
                and drug-resistance surveillance chapter of the{" "}
                <em>Ecosistema Nacional Informático de Salud</em>. The goal was
                to turn complex clinical and genomic data into clear signals for
                public-health decision-making in Mexico City.
                <br />
                <br />
                I cleaned, standardized, and integrated datasets from Clínica
                Especializada Condesa and CIEI, producing analysis-ready outputs
                used in interactive visualizations and open datasets. This work
                enabled health institutions to track transmission clusters,
                explore resistance patterns, and strengthen prevention and
                treatment strategies.
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
                Designed the automated EDA and preprocessing pipeline for
                SARS-CoV-2 genomic data from CoViGen-Mex and GISAID, powering
                official dashboards and geospatial visualizations.
                <br />
                <br />
                I standardized heterogeneous sequences, produced clean datasets
                for visualization and GIS teams, and ran statistical analyses to
                support variant monitoring. The result was a reproducible,
                low-touch workflow that improved data quality and reduced
                manual effort.
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
                Helped build the Sargassum Actors Map, a public platform that
                connects institutions and specialists working on monitoring,
                mitigation, and adaptation in the Mexican Caribbean.
                <br />
                <br />
                I consolidated and standardized multi-source records into a
                structured dataset, ensuring consistent profiles, thematic
                lines, and institutional roles for reliable mapping and search.
              </p>
            </div>
          }
          {
            <div className="project">
              <a href="" target="_blank" rel="noreferrer">
                <img
                  src={mock014}
                  className="zoom"
                  alt="Mortality data"
                  width="100%"
                />
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <h2>Mortality Database</h2>
              </a>
              <p>
                INEGI mortality data changes structure year to year, which
                breaks longitudinal analysis. I automated the cleaning,
                harmonization, and integration workflow to produce a unified
                PostgreSQL database, enabling reliable epidemiological and
                demographic analysis across years.
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
              href="https://github.com/patymunoz/agent-lang"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={agent01}
                className="zoom"
                alt="LLM chef assistant"
                width="100%"
              />
            </a>
            <a
              href="https://github.com/patymunoz/agent-lang"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Multimodal LLM Chef Assistant</h2>
            </a>
            <p>
              Designed and implemented a modular LLM-powered assistant using
              LangChain. Integrated multimodal input processing
              (image-to-ingredient extraction), web search tool orchestration,
              conversational memory management, and structured recipe
              generation.
            </p>
          </div>

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
              Developed a pipeline that transforms unstructured social-media
              text into georeferenced insights. Using NLP preprocessing and
              embedding-based extraction with OpenAI prompting, I generated
              structured location data that enabled geospatial analysis and
              interactive heatmaps.
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
              Developed an NLP pipeline for generating a domain-specific Named
              Entity Recognition dataset on food additives. Combined spaCy,
              NLTK, and OpenAI prompting to extract chemical-related terminology
              from raw text, clean and structure the corpus, and prepare
              training data for downstream model fine-tuning.
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
              <h2>Streamlit app for standardized data collection</h2>
            </a>
            <p>
              Previously, teams entered information using non-standard labels,
              generating inconsistent datasets that were difficult to merge and
              analyze. The app provides guided, dictionary-driven forms that
              ensure consistency, allowing non-technical users to produce clean,
              standardized records and export analysis-ready files with minimal
              effort.
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
