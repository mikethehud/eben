import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../assets/img/Logo.svg";

import styles from "./logo.scss";

class Logo extends React.Component {
  // no props

  render() {
		return (
      <Link to="/">
        <img src={LogoImage} alt="eben Logo" className={ styles.image } />
        <div className={ styles.heading }>
          Full-Stack Portfolio & Résumé of Mike Hudson
        </div>
      </Link>
    )
  }

}

export default Logo;
