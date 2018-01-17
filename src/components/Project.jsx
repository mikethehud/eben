import React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import moment from "moment";
import config from "../../config.js";
import hexToRgba from "hex-rgba";

import styles from "./project.scss";

import Stack from "./Stack";

class Project extends React.Component {

  render() {

    let { name, technologies, role, logo, color, slug, theme  } = this.props;

    let logoUrl = logo && logo.data ? config.api.fileUrl + logo.data.url : '';
    let backgroundColor = color ? "#" + color : "#" + "0040e3";

    return (
      <div className={ styles.container }>
        <div
          className={ styles.infosWrapper + " " + styles[theme] }
          style={{ background: "url('"+logoUrl+"')" }}
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

        <Link to={ "study/" + slug } className={ styles.overlay }>
          <span className={ styles.overlayContent }>
            View Project &rarr;
          </span>
        </Link>
      </div>
    )
  }

}

export default Project;
