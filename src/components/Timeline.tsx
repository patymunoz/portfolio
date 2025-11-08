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
              Teaching <em>Probabilistic Graphical Models</em> in the Master’s
              in Data Science program. Providing academic advising for
              undergraduate Mathematical Modeling students in applied projects
              and business plan development.
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
              Acquired, processed, and integrated national datasets for the
              National Information Ecosystems (ENI) and Gema Geospatial Viewer.
              Automated analytics workflows with Python and created visual
              dashboards and technical reports to communicate public policy
              insights through storytelling and visualization.
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
              Managed quantitative and geospatial data using GIS tools. Designed
              surveys and focus groups for market and spatial research, and
              created thematic maps to guide strategic business expansion.
            </p>
          </VerticalTimelineElement>

          {/* 2019 - 2021 | Secretaría de Educación Jalisco */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2019 - 2021"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Project Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Secretaría de Educación Jalisco · Jalisco
            </h4>
            <p>
              Coordinated logistics and implementation with government agencies.
              Designed and delivered courses in science and public health.
            </p>
          </VerticalTimelineElement>

          {/* 2015 - 2017 | Universidad de Guadalajara */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2015 - 2017"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Adjunct Professor
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              University of Guadalajara · Jalisco
            </h4>
            <p>
              Designed and taught courses for undergraduate students, providing
              academic mentoring and methodological support.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
