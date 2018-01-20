import React from "react";
import PropTypes from "prop-types";

import styles from "./stack.scss";

class Stack extends React.Component {

  static propTypes = {
    // OPTIONAL: array of technologies with the directus structure
    technologies: PropTypes.arrayOf(PropTypes.object),

    // OPTIONAL: small form of the stack object
    small: PropTypes.bool
  }

  render() {

    let { technologies, small } = this.props;

    let frontend = [];
    let backend = [];

    let smallStyles = small ? styles.small : "";

    if(technologies) {
      frontend = technologies.filter((element) => element.type == "frontend");
      backend = technologies.filter((element) => element.type == "backend");
    }

    return (
      <div className={ styles.stack + " " + smallStyles }>

        <div className={ styles.frontend }>
          <span className={ styles.stacktype }>Front-End</span>
          {frontend.length > 0 &&
            frontend.map((technology, i) => { return (i>0) ? ", "+technology.name : technology.name })
          }
          {frontend.length <= 0 && "—"}
        </div>

        <div className={ styles.backend }>
          <span className={ styles.stacktype }>Back-End</span>
          {backend.length > 0 &&
            backend.map((technology, i) => { return (i>0) ? ", "+technology.name : technology.name })
          }
          {backend.length <= 0 && "—"}
        </div>

      </div>
    )
  }

}

export default Stack;
