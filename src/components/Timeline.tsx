import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career Timeline</h1>
        <VerticalTimeline>
          {/* 2025 - Present | ITESO */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2025 — Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Adjunct Professor & External Consultant
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              ITESO — Jalisco, MX
            </h4>
            <p>
              Teach in the Master’s in Data Science program and mentor
              undergraduate students in Mathematical Modeling and applied data
              projects.
              <br />
              <br />
              <strong>Focus:</strong> Python, PGMs, Bayesian Modeling, Teaching
            </p>
          </VerticalTimelineElement>

          {/* 2021 - 2024 | Conahcyt - CentroGeo */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2021 — 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Conahcyt / CentroGeo — Mexico City, MX
            </h4>
            <p>
              Designed and maintained automated data-processing pipelines in
              Python to handle large multi-source datasets. Implemented
              validation logic and reusable transformation modules under version
              control to ensure robustness and reproducibility across recurring
              analytical workflows.
              <br />
              <br />
              <strong>Focus:</strong> Python, PostgreSQL, Git, Version Control
            </p>
          </VerticalTimelineElement>

          {/* 2019 - 2021 | Espacios que Inspiran */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2019 — 2021"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Espacios que Inspiran — Jalisco, MX
            </h4>
            <p>
              Performed market and spatial analyses to support business
              expansion decisions. Developed analytical workflows, thematic
              maps, and spatial statistics to translate data into
              decision-relevant insights.
              <br />
              <br />
              <strong>Focus:</strong> Spatial Analysis, Data Visualization,
              Geospatial Statistics
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
