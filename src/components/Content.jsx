import React from "react";

import styles from "./content.scss";

class Content extends React.Component {
  // no props

  render() {
    return (
      <div className={ styles.textcontent }>
        {this.props.children}
      </div>
    )
  }

}

export default Content;
