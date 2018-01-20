import React from "react";
import PropTypes from "prop-types";

import styles from "./grid.scss";

class Grid extends React.Component {

  static propTypes = {
    // OPTIONAL: describes the valign attribute of the grid
    valign: PropTypes.oneOf(["center","top","bottom"]),

    // OPTIONAL: additional classes to pass to the grid
    className: PropTypes.string
  }

  render() {

    let { valign, className } = this.props;

    let gridClasses = [ styles.grid ];

    if(valign) gridClasses.push(styles["grid-" + valign]);
    if(className) gridClasses.push(className);

    return (
      <div className={ gridClasses.join(" ") }>
        {this.props.children}
      </div>
    )
  }

}

class Column extends React.Component {

  render() {

    let { cols, pull, className } = this.props;

    let colClasses = [ styles.column ];

    if(cols) colClasses.push(styles["col-" + cols]);
    if(pull) colClasses.push(styles["pull-right"])
    if(className) colClasses.push(className)

    return (
      <div className={ colClasses.join(" ") }>
        {this.props.children}
      </div>
    )
  }

}

Grid.Column = Column;

export default Grid;
