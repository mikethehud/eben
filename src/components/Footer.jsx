import React from "react";

import styles from "./footer.scss"

import Grid from "./Grid";

class Footer extends React.Component {

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
