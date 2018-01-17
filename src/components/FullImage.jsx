import React from "react";

import styles from "./fullimage.scss";

class FullImage extends React.Component {

  render() {
    if(this.props && this.props.src) {
      return <img {...this.props} className={ styles.fullimage } />;
    }
    else return null;
  }

}

export default FullImage;
