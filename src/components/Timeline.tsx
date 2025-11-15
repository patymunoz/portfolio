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
            date="2025 - Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Adjunct Professor & External Consultant
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              ITESO · Jalisco, Mexico
            </h4>
            <p>
              Teach <em>Probabilistic Graphical Models</em> in the Master’s in
              Data Science program and provide academic advising for
              undergraduate Mathematical Modeling students on analytical and
              applied data projects.
            </p>
          </VerticalTimelineElement>

          {/* 2022 - 2024 | Conahcyt - CentroGeo */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2022 - 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Conahcyt – CentroGeo · Mexico City
            </h4>
            <p>
              Worked on national-scale data and geospatial analytics pipelines
              for public policy dashboards and data products. Automated
              Python-based workflows, built geospatial pipelines with GeoPandas,
              queried multi-source datasets in PostgreSQL/PostGIS, and improved
              data processing efficiency and consistency for development teams.
            </p>
          </VerticalTimelineElement>

          {/* 2019 - 2021 | Espacios que Inspiran */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2019 - 2021"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Espacios que Inspiran, S.A. de C.V. · Jalisco
            </h4>
            <p>
              Managed quantitative and geospatial data using GIS tools.
              Conducted market and spatial analytics, produced thematic maps and
              analytical reports, and supported strategic expansion decisions
              with data-driven insights.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
