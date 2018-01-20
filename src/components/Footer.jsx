import React from "react";

import Grid from "./Grid";

import styles from "./footer.scss"

class Footer extends React.Component {
  // no props

  render() {
    return (
      <a href="https://mikehudson1.typeform.com/to/oobcBz" target="_blank" className={ styles.footer }>
        <div className={ styles.footerContent }>
          <span>🤙</span> Get in touch with me.
        </div>
      </a>
    )
  }

}

export default Footer;
