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
                I contributed to the{" "}
                <em>Ecosistema Nacional Informático de Salud</em> by developing
                the data processing pipeline behind the HIV transmission and
                drug-resistance surveillance chapter. The project aimed to
                support public-health decision-making by identifying
                transmission clusters and potential antiretroviral resistance
                patterns in Mexico City.
                <br />
                <br />I cleaned, standardized, and transformed clinical and
                genomic datasets—received from Clínica Especializada Condesa and
                CIEI—to produce the structured outputs used for interactive
                visualizations and open datasets on the public platform. This
                work enabled researchers and health institutions to monitor
                transmission links, explore resistance profiles, and strengthen
                prevention and treatment strategies.
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
                I developed the automated EDA and data-processing pipeline used
                to prepare genomic SARS-CoV-2 datasets from CoViGen-Mex and
                GISAID for official dashboards and geospatial visualizations.
                The incoming sequences were heterogeneous and inconsistent, so
                my work focused on cleaning, standardizing, and transforming
                them into reliable, analysis-ready outputs.
                <br />
                <br />I produced the structured datasets required by the
                visualization and GIS teams, and performed statistical analyses
                to support variant monitoring and genomic surveillance. This
                automated workflow ensured consistent inputs for public
                dashboards and maps, reducing manual workload and improving the
                reproducibility of the surveillance process.
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
                I contributed to the development of the Sargassum Actors Map, a
                tool designed to connect the community working on monitoring,
                mitigation, and adaptation strategies for pelagic sargassum in
                the Mexican Caribbean. The project required consolidating
                information from institutions and specialists addressing
                different aspects of the sargassum phenomenon, and transforming
                it into a structured dataset for a public, searchable platform.
                <br />
                <br />I supported the data collection, cleaning, and
                standardization process, ensuring that profiles, thematic lines,
                and institutional roles were consistent and usable for mapping
                and analysis.
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
                INEGI mortality data changes structure year to year, making
                multi-year analysis difficult. I automated the workflows that
                clean, harmonize, and integrate these heterogeneous datasets
                into a unified PostgreSQL database, enabling reproducible
                epidemiological and demographic analysis.
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
