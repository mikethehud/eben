import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import moment from "moment";
import config from "../../config.js";
import hexToRgba from "hex-rgba";

import Stack from "./Stack";

import styles from "./project.scss";

class Project extends React.Component {

  static propTypes = {
    // REQUIRED: string name of project
    name: PropTypes.string.isRequired,

    // OPTIONAL: list of technologies
    technologies: PropTypes.shape({
      meta: PropTypes.object,
      data: PropTypes.array
    }),

    // REQUIRED: string describing the role
    role: PropTypes.string.isRequired,

    // OPTIONAL: background image in directus schema
    background: PropTypes.shape({
      meta: PropTypes.object,
      data: PropTypes.object
    }),

    // OPTIONAL: hex color code string (w/o #)
    color: PropTypes.string,

    // REQUIRED: slug to form link to details page
    slug: PropTypes.string.isRequired,

    // OPTIONAL: theme choice for the project panel
    theme: PropTypes.string
  }

  render() {

    let { name, technologies, role, logo, color, slug, theme  } = this.props;

    let backgroundUrl = logo ? config.api.fileUrl + logo.data.url : "";
    let backgroundColor = color ? "#" + color : "#0040e3";

    return (
      <div className={ styles.container }>
        <div
          className={ styles.infosWrapper + " " + styles[theme] }
          style={{ background: "url('"+backgroundUrl+"')" }}
        >
          <div className={ styles.infos } style={{ backgroundColor: hexToRgba(backgroundColor, 95)  }}>
            <h3>{name}</h3>
            <div className={ styles.role }>{role}</div>
          </div>
        </div>
        <div className={ styles.stack }>
          <Stack
            technologies={technologies ? technologies.data : null}
            small
          />
        </div>

        <Link to={ "/study/" + slug } className={ styles.overlay }>
          <span className={ styles.overlayContent }>
            View Project &rarr;
          </span>
        </Link>
      </div>
    )
  }

}

export default Project;
